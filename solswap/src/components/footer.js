import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className="flex items-center justify-between">
        <ul className="list-none">
          <li>
            <Link href="https://twitter.com/solandgo">Follow Our Twitter!</Link>
          </li>
        </ul>
        <ul className="list-none">
          <li>
            <p>Copyright © Sol&Go 2024</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
