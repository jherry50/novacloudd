"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="hero-bg py-28">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >
          <p className="font-semibold text-blue-600 mb-4">
            Business Management Platform
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Manage Your Entire Business
            <span className="gradient-text">
              {" "}From One Platform.
            </span>
          </h1>

          <p className="text-slate-600 mt-8 text-lg">
            NovaCloud helps modern companies automate workflows,
            collaborate faster and make smarter business decisions.
          </p>

          <div className="flex gap-4 mt-10">
            <Button>
              Start Free
            </Button>

            <Button variant="secondary">
              Book Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          {/* <div className="rounded-3xl bg-white shadow-2xl p-8">

            <div className="h-64 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600"/>

          </div> */}
          <div className="lg:col-span-1">
            <DashboardPreview />
          </div>
        </motion.div>

      </div>
    </section>
  );
}