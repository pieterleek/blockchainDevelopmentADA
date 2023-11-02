import { useState } from "react";
import type { NextPage } from "next";
import { useWallet } from '@meshsdk/react';
import { CardanoWallet } from '@meshsdk/react';
import { Transaction } from '@meshsdk/core';
import ReactDOM from 'react-dom/client';

const Home: NextPage = () => {
  const { connected, wallet } = useWallet();
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // set string constants that change state when text in textbox is adjusted
  const [lastTx, setLastTx] = useState("");
  const [WalletAddress, setAddress] = useState("");
  const [txAmount, setTxAmount] = useState("");

  //get assets function from week1
  async function getAssets() {
    if (wallet) {
      setLoading(true);
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
    }
  }

  // Build transaction, includes : wallet address & amount of money. (returns a type 'Promise<string>' )
  async function buildTx(walletAdr: string, amount: string): Promise<string>{
    const tx = new Transaction({ initiator: wallet })
    .sendLovelace(
      walletAdr,
      amount
    )
  ;
  const buildedTx = await tx.build();
  return buildedTx;
  }

  // send transaction, parameters: 'Promise<string>' from buildTx() Note: sets state of lastTX (maby make it return the hash of tx) 
  async function sendTx(buildedTx: Promise<string>){
    try{
      const unsignedTx = await buildedTx;
      const signedTx = await wallet.signTx(unsignedTx);
      const txHash = await wallet.submitTx(signedTx);
      setLastTx(txHash);
      return txHash;
    }catch(e: any){
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
                      onClick={() => sendTx(buildTx(WalletAddress, adaToLovelace(txAmount)))                    }
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

        <form>
          <label>Transaction hash:
            <input
              type="text" 
              value={lastTx}
            />
          </label>
        </form>
      </div>
  );
};

export default Home;