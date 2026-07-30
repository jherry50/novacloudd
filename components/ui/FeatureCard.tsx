import { ReactNode } from "react";

type Props = {
    icon: ReactNode;
    title: string;
    description: string;
};

export default function FeatureCard({
    icon,
    title,
    description,
}: Props) {
    return (
        <div className="
            group
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            dark:border-slate-700
            dark:bg-slate-900
        ">
            <div className="mb-6 text-blue-600 dark:text-blue-400">
                {icon}
            </div>

            <h3 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
                {title}
            </h3>

            <p className="leading-7 text-slate-600 dark:text-slate-300">
                {description}
            </p>
        </div>
    );
}