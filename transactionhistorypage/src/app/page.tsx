import React from "react";
import Header from "../components/header";
import styles from "./TransactionHistoryGrid.module.css";

interface Transaction {
  id: number;
  from: string;
  to: string;
  amount: string;
  date: string;
  senderwalletAddress: string;
  receiverwalletAddress: string;
  remarks: string; // Adding the remarks field
}

const TransactionHistoryPage: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      from: "JustWint3r",
      to: "chengenchong123",
      amount: "3 SOL",
      date: "2024-04-01",
      senderwalletAddress: "0x1234567",
      receiverwalletAddress: "0x7654321",
      remarks: "Hihi carry me to diamond pls",
    },
    {
      id: 2,
      from: "JustWint3r",
      to: "walauceh",
      amount: "5 SOL",
      date: "2024-04-02",
      senderwalletAddress: "0x1234567",
      receiverwalletAddress: "0x2109876",
      remarks: "Thanks for the Monyet NFT!",
    },
    {
      id: 3,
      from: "JustWint3r",
      to: "baygorr",
      amount: "2 SOL",
      date: "2024-04-04",
      senderwalletAddress: "0x1234567",
      receiverwalletAddress: "0x6543210",
      remarks: "Gib u sol hehe",
    },
    {
      id: 4,
      from: "JustWint3r",
      to: "brit",
      amount: "5 SOL",
      date: "2024-04-04",
      senderwalletAddress: "0x1234567",
      receiverwalletAddress: "0x1098765", 
      remarks: "I want bkt",
    },
    {
      id : 5,
      from: "JustWint3r",
      to: "nightmire",
      amount: "1.5 SOL",
      date: "2024-04-05",
      senderwalletAddress: "0x1234567",
      receiverwalletAddress: "0x5432109",
      remarks: "Thank u for boosting me to plat!",
    },
  ];

  return (
    <main className="container mx-auto px-4">
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold">Transaction History</h1>
        </div>
        <div className={`grid gap-6 ${styles.transactionGrid}`}>
          {transactions.map((transaction) => (
            <div key={transaction.id} className={styles.transactionItem} id={`transaction-${transaction.id}`}>
              <a href={`#transaction-${transaction.id}`} className={styles.transactionLink}>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-base font-semibold">From: {transaction.from}</h2>
                    <h2 className="text-base font-semibold">To: {transaction.to}</h2>
                  </div>
                  <p className="text-base font-semibold">${transaction.amount}</p>
                </div>
              </a>
              <div className={styles.transactionDetails}>
                <p>Date: {transaction.date}</p>
                {transaction.senderwalletAddress && (
                  <p>From: {transaction.senderwalletAddress}</p>
                )}
                {transaction.receiverwalletAddress && (
                  <p>To: {transaction.receiverwalletAddress}</p>
                )}
                {transaction.remarks && (
                  <p>Remarks: {transaction.remarks}</p>
                )}
                {/* Add more details as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TransactionHistoryPage;