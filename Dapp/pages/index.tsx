import { useState } from "react";
import type { NextPage } from "next";
import { useWallet } from '@meshsdk/react';
import { CardanoWallet } from '@meshsdk/react';
import { Transaction, ForgeScript, Asset, KoiosProvider, resolveDataHash } from '@meshsdk/core';
import { resolveSlotNo } from '@meshsdk/core';
import type { Mint, AssetMetadata } from '@meshsdk/core';

const Home: NextPage = () => {
  const { connected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  // set string constants that change state when text in textbox is adjusted
  const [lastTx, setLastTx] = useState("");
  const [asset, setUnit] = useState("");
  const [currentTx, setCurrentTx] = useState<null | any>(null);
  const [datum, setDatum] = useState("");

  // metadata only used as example
  const metadata: AssetMetadata={
    "name": "Mesh Token",
    "image": "ipfs://QmRzicpReutwCkM6aotuKjErFCUD213DpwPq6ByuzMJaua",
    "mediaType": "image/jpg",
    "description": "This NFT is minted by Mesh (https://meshjs.dev/)."
  };
  const scriptAddress = 'addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8';

  //get assets function from week1
  async function getAssets() {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
    }
  }

  async function lockToken(asset:string, datum: string) {
    const tx = new Transaction({ initiator: wallet })
  .sendAssets(
    {
      address: scriptAddress, // address containing the smart contract logic
      datum: {
        value: datum, // extra info about the transaction. (Note: datum(hash) needs to be the same when unlocking token)
      },
    },
    [
      {
        unit: asset, //unit of asset to be locked
        quantity: "1", // only one since nft
      },
    ],
  );

  try {
    const unsignedTx = await tx.build();
    const signedTx = await wallet.signTx(unsignedTx);
    const txHash = await wallet.submitTx(signedTx);
    setLastTx(txHash);
    console.log(txHash);
  } catch (error) {
    console.log("transaction did not complete");
  }
  
  }
  async function _getAssetUtxo({ scriptAddress, asset, datum }: any) {
    const koios = new KoiosProvider('preprod');
  
    const utxos = await koios.fetchAddressUTxOs(
      scriptAddress,
      asset
    );
  
    const dataHash = resolveDataHash(datum);
  
    let utxo = utxos.find((utxo: any) => {
      return utxo.output.dataHash == dataHash;
    });
  
    return utxo;
  }

  async function unlockToken(asset:string, datum: string) {
    // fetch input UTXO
    const assetUtxo = await _getAssetUtxo({
      scriptAddress: 'addr_test1wpnlxv2xv9a9ucvnvzqakwepzl9ltx7jzgm53av2e9ncv4sysemm8',
      asset: asset,
      datum: datum,
    });
    // get wallet change address
    const address = await wallet.getChangeAddress();
        const tx = new Transaction({ initiator: wallet })
      .redeemValue({
        value: assetUtxo,
        script: {
          version: 'V1',
          code: '4e4d01000033222220051200120011',
        },
        datum: datum,
      })
    .sendValue(address, assetUtxo) // address is recipient address
    .setRequiredSigners([address]);

    try {
      const unsignedTx = await tx.build();
      // note that the partial sign is set to true
      const signedTx = await wallet.signTx(unsignedTx, true);
      const txHash = await wallet.submitTx(signedTx);
      setLastTx(txHash);
    } catch (error) {
      console.log("transaction did not complete")
    }
    
  }



  //Gets slot number of preproduction testnet, inputs: minutes (fill in 0 for current slot nr)
  function getSlotNr(minutes: number): string{
    let nowDateTime = new Date();
    const slot1 = resolveSlotNo('preprod', nowDateTime.getTime());
    console.log("huidige slot: " + slot1);
    let dateTimeAdded = new Date(nowDateTime.getTime() + minutes*60000); //600000 is for converting minutes to miliseconds.
    console.log(dateTimeAdded);
    const slot = resolveSlotNo('preprod', dateTimeAdded.getTime());
    console.log((nowDateTime.getUTCHours() + 2) + ":" + nowDateTime.getUTCMinutes()); // +2 is for conversion to local time Utrecht Netherlands
    console.log("slot number =" + slot);
    return slot;
  }
  
  // Build transaction, includes : wallet address, amount of money, metadata & start time of tx. (metadata & exptime optional) (returns a type 'Transaction' )
  async function buildTx(walletAdr: string, amount: string, metadata?: AssetMetadata, CID?: AssetMetadata, startSlot?: string): Promise<string>{
    const tx = new Transaction({ initiator: wallet })
    .sendLovelace(
      walletAdr,
      amount
    );

    if(metadata && CID){
      const forgingScript = ForgeScript.withOneSignature(walletAdr);
      metadata.image = CID;
      const asset: Mint = {
        assetName: 'tiger33',
        assetQuantity: '1',
        metadata: metadata,
        label: '721',
        recipient: walletAdr,
      };
      tx.mintAsset(
        forgingScript,
        asset
      );
      console.log("tx mint");
    }else if(metadata){
      tx.setMetadata(0, metadata);
    }else{
      console.log("no metadata");
    }
    
    /*
    if(startSlot){
      tx.setTimeToStart(startSlot);
      console.log("transaction should be executable after slot: " + startSlot)
    }else{
      console.log("no timer");
    }
    */
    const unsignedTx = await tx.build();
    return unsignedTx;
  }

  // send transaction, parameters: 'transaction' from buildTx() Note: sets state of lastTX (maby make it return the hash of tx) 
  async function sendTx(unsignedTx: Promise<string>){
    try{
      const buildedTx = await unsignedTx;
      const signedTx = await wallet.signTx(buildedTx);
      const txHash = await wallet.submitTx(signedTx);
      setLastTx(txHash);
      return txHash;
    }catch(e: any){
      setLastTx("Not send")
      console.log(e.name);
      console.log(e.message);
    }
  }

  function adaToLovelace(amount: string): string{
    var tempVal: number = +amount;
    tempVal = tempVal * 1000000;
    console.log(tempVal);
    var value: string = tempVal.toString();
    return value;
  }

  return (
      <><div>
      <h1>Connect Wallet</h1>
      <CardanoWallet />
      {connected && (
        <>
          <h1>Lock/ unlock your Token!</h1>
          {assets ? (
            <pre>
              <code className="language-js">
                {JSON.stringify(assets, null, 2)}
              </code>
            </pre>
          ) : (
            <button
              type="button"
              onClick={() => console.log(getAssets())}
              disabled={loading}
              style={{
                margin: "18px",
                backgroundColor: loading ? "orange" : "grey",
              }}
            >
              get assets
            </button>
          )}
        </>
      )}
      <><h1> </h1></>
      <form>
        <label>Assets Unit to Lock: 
          <input
            type="text"
            value={asset}
            onChange={(e) => setUnit(e.target.value)} />
        </label>
      </form>

      <form>
        <label>Datum: 
          <input
            type="text"
            value={datum}
            onChange={(e) => setDatum(e.target.value)} />
        </label>
      </form>

    </div><div>

        <button
          type="button"
          onClick={() => lockToken(asset, datum)}
          disabled={loading}
          style={{
            margin: "18px",
            backgroundColor: loading ? "orange" : "grey",
          }}
        >
          Lock Token
        </button>

        <button
          type="button"
          onClick={() => unlockToken(asset, datum)}
          disabled={loading}
          style={{
            margin: "18px",
            backgroundColor: loading ? "orange" : "grey",
          }}
        >
          Unlock Token
        </button>

        <button
          type="button"
          onClick={() => getSlotNr(0)}
          disabled={loading}
          style={{
            margin: "18px",
            backgroundColor: loading ? "orange" : "grey",
          }}
        >
          get slotnr
        </button>

        <form>
          <label>Transaction hash:
            <input
              type="text"
              value={lastTx}
              readOnly />
          </label>
        </form>
      </div></>
  );
};

export default Home;