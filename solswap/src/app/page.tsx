import React from 'react';
import Header from '../components/header';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <Header />

      {/* Rest of your page content goes here */}
      <main>
        <h1>My Wallet</h1>
        <p>Address:  </p>
        <p>Balance:  </p>
      </main>
    </div>
  );
}
