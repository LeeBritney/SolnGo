import React from 'react';
import Header from '../components/header';
import Link from 'next/link';
import WalletBalance from '../components/WalletBalance';

 const HomePage: React.FC = () => {

  return (
    <div className="container mx-auto px-4">
      <Header />

      {/* Rest of your page content goes here */}
      <main>
        <h1>My Wallet</h1>
        <WalletBalance />
        <Link href="/about">
          <button>Click here to visit About Page</button>
        </Link>

      </main>
    </div>
  );
};

export default HomePage;