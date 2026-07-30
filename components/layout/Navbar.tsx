"use client";

import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur-xl">

      <div className="container-custom h-20 flex items-center justify-between">

        <h2 className="font-bold text-2xl gradient-text">
          NovaCloud
        </h2>

        <nav className="hidden md:flex gap-8">

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}

        </nav>

        <div className="hidden md:block">
          <Button>
            Start Free
          </Button>
        </div>

        <MobileMenu />

      </div>

    </header>
  );
}