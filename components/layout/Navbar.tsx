"use client";

import Button from "../ui/Button";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">

      <div className="container-custom flex h-20 items-center justify-between">

        <h2 className="text-2xl font-bold gradient-text">
          <Logo/>
        </h2>

        <nav className="hidden gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}

        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button>
            Start Free
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>

      </div>

    </header>
  );
}