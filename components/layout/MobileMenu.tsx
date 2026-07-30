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

        <Dialog.Content className="fixed right-0 top-0 h-full w-80 bg-white p-8 shadow-2xl">

          <div className="flex justify-between items-center mb-12">

            <h2 className="font-bold text-2xl">
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
                className="block text-lg"
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