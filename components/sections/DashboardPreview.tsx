"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Search,
  ArrowUpRight,
  Users,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-3xl" />

      {/* Dashboard */}
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">

        {/* Top Bar */}

        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="w-3 h-3 rounded-full bg-red-400"/>

            <div className="w-3 h-3 rounded-full bg-yellow-400"/>

            <div className="w-3 h-3 rounded-full bg-green-400"/>

          </div>

          <div className="hidden md:flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-2 text-slate-500">

            <Search size={16} />

            Search...

          </div>

          <Bell
            size={18}
            className="text-slate-500"
          />

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-3 gap-5 p-6">

          {/* Revenue */}

          <div className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">

            <div className="flex justify-between">

              <div>

                <p className="text-slate-500 text-sm">
                  Monthly Revenue
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  $248,650
                </h2>

              </div>

              <div className="flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-900/40 px-3 py-2 text-green-700 dark:text-green-300">

                <ArrowUpRight size={16} />

                18%

              </div>

            </div>

            {/* SVG Chart */}

            <svg
              viewBox="0 0 400 180"
              className="mt-8 w-full"
            >

              <defs>

                <linearGradient
                  id="line"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#2563EB"
                  />

                  <stop
                    offset="100%"
                    stopColor="#7C3AED"
                  />

                </linearGradient>

              </defs>

              <path
                d="
                M10 150
                C50 120,
                80 130,
                120 70
                S220 40,
                260 90
                S340 80,
                390 25
                "
                fill="none"
                stroke="url(#line)"
                strokeWidth="5"
                strokeLinecap="round"
              />

            </svg>

          </div>

          {/* Stats */}

          <div className="space-y-5">

            <Metric
              icon={<Users size={22} />}
              title="Customers"
              value="8,219"
            />

            <Metric
              icon={<CreditCard size={22} />}
              title="Subscriptions"
              value="1,483"
            />

            <Metric
              icon={<CheckCircle2 size={22} />}
              title="Completed"
              value="94%"
            />

          </div>

        </div>

        {/* Activity */}

        <div className="border-t border-slate-200 dark:border-slate-800 p-6">

          <h3 className="font-semibold mb-5">
            Recent Activity
          </h3>

          <div className="space-y-4">

            <Activity
              name="Sarah Johnson"
              action="created a new marketing campaign"
              color="bg-green-500"
            />

            <Activity
              name="Michael Chen"
              action="approved Invoice #1043"
              color="bg-blue-500"
            />

            <Activity
              name="Emma Davis"
              action="invited 4 team members"
              color="bg-purple-500"
            />

          </div>

        </div>

      </div>
    </motion.div>
  );
}

function Metric({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5">

      <div className="text-blue-600 mb-3">
        {icon}
      </div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        {value}
      </h3>

    </div>
  );
}

function Activity({
  name,
  action,
  color,
}: {
  name: string;
  action: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4">

      <div className={`w-10 h-10 rounded-full ${color}`} />

      <div>

        <p className="font-medium">
          {name}
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {action}
        </p>

      </div>

    </div>
  );
}