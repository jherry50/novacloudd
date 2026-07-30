"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

const automationItems = [
  { label: "Invoice sync", value: 98 },
  { label: "Customer onboarding", value: 91 },
  { label: "Forecast alerts", value: 87 },
];

const nextSteps = [
  "Review 4 new proposals",
  "Approve 2 onboarding requests",
  "Prepare Friday launch brief",
];

export default function Dashboard() {
  return (
    <section className="py-32">
      <div className="container-custom">
        <div className="rounded-[40px] bg-slate-900 p-8 shadow-2xl dark:bg-slate-950">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 dark:bg-slate-900"
          >
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-3xl bg-slate-950 p-8 text-white dark:bg-slate-950">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-blue-300">Operations overview</p>
                    <h3 className="mt-2 text-3xl font-semibold">
                      Your team is delivering on plan
                    </h3>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                    Live • 2 min ago
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Revenue</p>
                    <p className="mt-3 text-2xl font-semibold">$184K</p>
                    <p className="mt-2 flex items-center gap-1 text-sm text-emerald-300">
                      +14.2% <ArrowUpRight size={16} />
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Open deals</p>
                    <p className="mt-3 text-2xl font-semibold">24</p>
                    <p className="mt-2 text-sm text-slate-300">7 ready to close</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Team capacity</p>
                    <p className="mt-3 text-2xl font-semibold">92%</p>
                    <p className="mt-2 text-sm text-slate-300">Healthy workload</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Weekly momentum</p>
                    <p className="text-sm text-slate-300">+18% vs last week</p>
                  </div>
                  <div className="mt-6 flex h-24 items-end gap-3">
                    {[40, 58, 72, 64, 88, 92].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-400" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Sparkles size={18} />
                    <p className="font-semibold">Automation health</p>
                  </div>

                  <div className="mt-5 space-y-4">
                    {automationItems.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-blue-50 p-6 dark:bg-blue-950/40">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <CheckCircle2 size={18} />
                    <p className="font-semibold">Next priorities</p>
                  </div>

                  <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                    {nextSteps.map((step) => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}