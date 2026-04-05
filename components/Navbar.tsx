"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <div className="topbar-inner left-only">
        <nav className="topnav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`topnav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}

          <Link href="/#contact" className="topnav-link">
            Contact
          </Link>
        </nav>

        <div className="topbar-empty" aria-hidden="true" />
      </div>
    </header>
  );
}