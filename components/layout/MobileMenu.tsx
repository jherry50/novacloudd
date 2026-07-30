"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>

        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed right-0 top-0 h-full w-80 bg-white p-8 shadow-2xl dark:bg-slate-950">

          <div className="mb-12 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              NovaCloud
            </h2>

            <Dialog.Close asChild>
              <button>
                <X />
              </button>
            </Dialog.Close>

          </div>

          <nav className="space-y-8">

            {links.map((link) => (

              <a
                key={link.href}
                href={link.href}
                className="block text-lg text-slate-700 dark:text-slate-200"
              >
                {link.label}
              </a>

            ))}

          </nav>

          <Button className="w-full mt-12">
            Start Free
          </Button>

        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  );
}