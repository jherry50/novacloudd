"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your subscription whenever you want.",
  },
  {
    q: "Do you offer enterprise plans?",
    a: "Yes. Contact us for custom enterprise pricing.",
  },
  {
    q: "Is there a free trial?",
    a: "Absolutely. Every plan includes a 14-day free trial.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32">
      <div className="container-custom max-w-4xl">

        <h2 className="mb-16 text-center text-5xl font-bold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={faq.q}
            className="border-b py-6"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between"
            >
              <span className="text-left font-semibold text-slate-900 dark:text-white">
                {faq.q}
              </span>

              <ChevronDown
                className={`transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />

            </button>

            {open === index && (

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                {faq.a}
              </p>

            )}

          </div>
        ))}

      </div>
    </section>
  );
}