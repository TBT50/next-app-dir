"use client";

import Link from "next/link";

function Header() {
  return (
    <header className="max-w-2xl mx-auto">
      <nav>
        <ul className="flex py-2">
          <li>
            <Link href="/" className="p-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="p-4">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/contact" className="p-4">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
