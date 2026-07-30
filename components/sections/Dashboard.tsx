"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
    return (
        <section className="py-32">

            <div className="container-custom">

                <div className="rounded-[40px] bg-slate-900 p-8 shadow-2xl dark:bg-slate-950">

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-white p-8 dark:bg-slate-900"
                    >

                        <div className="grid lg:grid-cols-3 gap-8">

                            <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-950/40">

                                <h4 className="mb-6 font-semibold text-slate-900 dark:text-white">
                                    Revenue
                                </h4>

                                <div className="h-40 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500" />

                            </div>

                            <div className="rounded-xl bg-slate-50 p-6 dark:bg-slate-800">

                                <h4 className="mb-6 font-semibold text-slate-900 dark:text-white">
                                    Projects
                                </h4>

                                <div className="space-y-4">

                                    <div className="h-5 rounded bg-slate-200"></div>

                                    <div className="h-5 rounded bg-slate-200"></div>

                                    <div className="h-5 rounded bg-slate-200"></div>

                                    <div className="h-5 rounded bg-slate-200"></div>

                                </div>

                            </div>

                            <div className="rounded-xl bg-green-50 p-6 dark:bg-green-950/30">

                                <h4 className="mb-6 font-semibold text-slate-900 dark:text-white">
                                    Team
                                </h4>

                                <div className="flex -space-x-4">

                                    {[1,2,3,4].map((i)=>(
                                        <div
                                            key={i}
                                            className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-white"
                                        />
                                    ))}

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}