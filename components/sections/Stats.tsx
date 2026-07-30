"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 100,
    suffix: "K+",
    label: "Businesses",
  },
  {
    number: 99.99,
    suffix: "%",
    label: "Uptime",
    decimals: 2,
  },
  {
    number: 150,
    suffix: "+",
    label: "Countries",
  },
  {
    number: 4.9,
    suffix: "★",
    label: "Customer Rating",
    decimals: 1,
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="py-32 bg-slate-900 text-white">

      <div
        ref={ref}
        className="container-custom grid md:grid-cols-4 gap-10"
      >

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-blue-400">

              {inView && (
                <CountUp
                  end={stat.number}
                  decimals={stat.decimals ?? 0}
                  duration={2}
                />
              )}

              {stat.suffix}

            </h2>

            <p className="mt-3 text-slate-300">
              {stat.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}