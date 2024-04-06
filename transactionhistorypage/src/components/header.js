import React from 'react';
import styles from './header.module.css'; // Import CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} mx-auto px-4 flex justify-between items-center py-4`}>
        {/* Logo Placeholder */}
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" width="100" height="100" />
        </div>

        {/* Website Name */}
        <h1 className={styles.websiteName}>Sol&Go</h1>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            className={`${styles.searchInput} w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
        </div>

        {/* Profile Button */}
        <button className={styles.profileButton}>
          <img src="/logo.png" alt="Profile Image" className="w-10 h-10 rounded-full border" />
        </button>


        {/* Burger Menu (Placeholder) */}
        <button className={styles.menuButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path
              stroke="currentColor"
              d="M3 18h18v-2H3v2zm0-8h18v-2H3v2z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}