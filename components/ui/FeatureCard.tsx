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
        ">
            <div className="mb-6 text-blue-600">
                {icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
                {title}
            </h3>

            <p className="text-slate-600 leading-7">
                {description}
            </p>
        </div>
    );
}