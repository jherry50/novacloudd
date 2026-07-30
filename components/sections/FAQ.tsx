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

        <h2 className="text-center text-5xl font-bold mb-16">
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
              className="w-full flex justify-between items-center"
            >
              <span className="font-semibold text-left">
                {faq.q}
              </span>

              <ChevronDown
                className={`transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />

            </button>

            {open === index && (

              <p className="mt-5 text-slate-600 leading-7">
                {faq.a}
              </p>

            )}

          </div>
        ))}

      </div>
    </section>
  );
}