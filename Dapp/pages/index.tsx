import { useState } from "react";
import type { NextPage } from "next";
import { useWallet } from '@meshsdk/react';
import { CardanoWallet } from '@meshsdk/react';
import { Transaction } from '@meshsdk/core';
import { resolveSlotNo } from '@meshsdk/core';
import ReactDOM from 'react-dom/client';

const Home: NextPage = () => {
  const { connected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // set string constants that change state when text in textbox is adjusted
  const [lastTx, setLastTx] = useState("");
  const [WalletAddress, setAddress] = useState("");
  const [txAmount, setTxAmount] = useState("");
  const [currentTx, setCurrentTx] = useState<null | any>(null);

  //get assets function from week1
  async function getAssets() {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
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

  // metadata only used as example
  var metadata = {
    "orderNr": "069", 
    "customerNr": "420024", 
    "employeeId": "2072",
    "comments": "No pickles on the burger please",
    "date": "01/04/2030",
    "carbonCreditCost": "201"
    };
  // Build transaction, includes : wallet address, amount of money, metadata & start time of tx. (metadata & exptime optional) (returns a type 'Transaction' )
  async function buildTx(walletAdr: string, amount: string, metadata?: any, startSlot?: string): Promise<string>{
    const tx = new Transaction({ initiator: wallet })
    .sendLovelace(
      walletAdr,
      amount
    );

    if(metadata){
      tx.setMetadata(0, metadata);
    }else{
      console.log("no metadata");
    }
    
    if(startSlot){
      tx.setTimeToStart(startSlot);
      console.log("transaction should be executable after slot: " + startSlot)
    }else{
      console.log("no timer");
    }
    
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
      <div>
        <h1>Connect Wallet</h1>
        <CardanoWallet />
        {connected && (
            <>
              <h1>Make transaction!</h1>
              {assets ? (
                  <pre>
              <code className="language-js">
                {JSON.stringify(assets, null, 2)}
              </code>
            </pre>
              ) : (
                  <button
                      type="button"
                      onClick={() => console.log(sendTx(buildTx(WalletAddress, adaToLovelace(txAmount), metadata, getSlotNr(1))))}
                      disabled={loading}
                      style={{
                        margin: "18px",
                        backgroundColor: loading ? "orange" : "grey",
                      }}
                  >
                    Make transaction!
                  </button>
              )}
            </>
        )}
        <><h1> </h1></>
        <form>
          <label>send Ada to:
            <input
              type="text" 
              value={WalletAddress}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </form>

        <form>
          <label>amount of ADA:
            <input
              type="text" 
              value={txAmount}
              onChange={(e) => setTxAmount(e.target.value)}
            />
          </label>
        </form>


        <button
          type="button"
          onClick={() => setCurrentTx(buildTx(WalletAddress, adaToLovelace(txAmount), metadata, getSlotNr(2)))                    }
          disabled={loading}
          style={{
            margin: "18px",
            backgroundColor: loading ? "orange" : "grey",
          }}
        >
        Build TX
        </button>

        <button
          type="button"
          onClick={() => sendTx(currentTx)}
          disabled={loading}
          style={{
            margin: "18px",
            backgroundColor: loading ? "orange" : "grey",
          }}
        >
        Send TX
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
              readOnly
            />
          </label>
        </form>
      </div>
  );
};

export default Home;