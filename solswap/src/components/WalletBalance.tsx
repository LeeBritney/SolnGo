import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import wallet from "./wallet-address.json";
import React from "react";

// Import our dev wallet keypair from the wallet file
// put wallet variable in the bracket
const from = Keypair.fromSecretKey(new Uint8Array(wallet));
// Define our WBA public key
const to = new PublicKey("FoB1thm3eomX3e2K3Zi1qj9z9mjABcdjAymzYLH4GDXL");
//Create a Solana devnet connection
const connection = new Connection("https://api.devnet.solana.com");

const BalancePage : React.FC = async () => {
  // Get balance of dev wallet
  const balance = await connection.getBalance(from.publicKey);
  let wBalance = (balance / LAMPORTS_PER_SOL);
  return (
    <div>
      <h1>Wallet Balance: {wBalance.toString()} SOL</h1>
      <h2>Public Key: { "DeepfdNfch7Snn67Taf2HmjHVhsGaRVnGGF8c2fbnjEE" }</h2>
    </div>
  );
};

export default BalancePage;