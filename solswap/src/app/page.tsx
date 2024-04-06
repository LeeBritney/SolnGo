import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import WalletBalance from '../components/WalletBalance';
import "./globals.css";


const HomePage: React.FC = () => {

  return (

    <div className = "container mx-auto px-4">
      <Header />
      <main>
      <div className = 'md:flex justify-around mt-20'>
        <div className = "container-sm text-justify border-2 border-gray-300 rounded-lg p-4 px-10">
          <h1 className = "walletTitle">My Wallet</h1>
          <WalletBalance />
          <Link href = "/reload">
            <button className = "reload-button">Reload +</button>
          </Link>
        </div>
      </div>
      <div className ="button-container">
        <Link href = "/qr">
          <button className = "button">Scan QR</button>
        </Link>
        <Link href = "/split">
          <button className = "button">Split Bill</button>
        </Link>
      </div>
      </main>
      <Footer /> 
    </div>

  );
};

export default HomePage;