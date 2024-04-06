import React from 'react';
import styles from './header.module.css'; // Import CSS module
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} mx-auto px-4 flex justify-between items-center py-4`}>
        {/* Logo Placeholder */}
        <Link href="/">
          <div className={styles.logo}>
            <img src="/logo.png" alt="Logo" width="100" height="100" />
          </div>
        </Link>

        {/* Website Name */}
        <Link href="/">
          <h1 className={styles.websiteName}>Sol&Go</h1>
        </Link>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            className={`${styles.searchInput} w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Profile Button */}
        <Link href="/profile">
          <button className={styles.profileButton}>
            <img src="/logo.png" alt="Profile Image" className="w-11 h-11 rounded-full border" />
          </button>
        </Link>


        {/* Burger Menu (Placeholder) */}
        <Link href="/transaction">
          <h2 className = "menuButton">
            aa
          </h2>
        </Link>
      </div>
    </header>
  );
}
