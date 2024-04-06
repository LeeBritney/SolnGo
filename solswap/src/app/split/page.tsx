"use client";
import React from 'react';
import "./split.css";
import Link from 'next/link';

interface Bill {
  name: string;
  address: string;
  amount: number;
  splitOption: 'evenly' | 'separately' | 'recurring payment';
}

const backButtonStyles = {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 2,
    backgroundColor: "transparent",
    border: "3px white solid",
    borderRadius: "20px",
    padding: "10px 20px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

const SplitBill: React.FC = () => {
  const [bill, setBill] = React.useState<Bill>({
    name: '',
    address: '',
    amount: 0,
    splitOption: 'evenly',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBill({
      ...bill,
      [event.target.name]: event.target.value,
    });
  };

  const handleSplitOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBill({
      ...bill,
      splitOption: event.target.value as Bill['splitOption'],
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here, potentially using the bill state
    console.log('Bill details:', bill);
    setBill({ name: '', address: '', amount: 0, splitOption: 'evenly' }); // Reset form
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Split Bill</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm font-medium">
            Bill Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={bill.name}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="mb-2 text-sm font-medium">
            Wallet Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={bill.address}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-2 text-sm font-medium">
            Amount (SOL):
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={bill.amount}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="splitOption" className="mb-2 text-sm font-medium">
            Way of splitting:
          </label>
          <select
            id="splitOption"
            name="splitOption"
            value={bill.splitOption}
            onChange={handleSplitOptionChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="evenly">Evenly</option>
            <option value="separately">Separately</option>
            <option value="recurring payment">Recurring Payment</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Split Bill
        </button>
      </form>
      <div style={backButtonStyles} ><Link href= "/">Back to Home</Link></div>
    </div>
  );
};

export default SplitBill;
