import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

import {
    Shield,
    Zap,
    ChartBar,
    Workflow,
    Users,
    Cloud,
} from "lucide-react";

export default function Features() {

    const features = [

        {
            icon: <Zap size={40} />,
            title: "Lightning Fast",
            description:
                "Instant page loads and optimized cloud performance for growing businesses.",
        },

        {
            icon: <Workflow size={40} />,
            title: "Workflow Automation",
            description:
                "Automate repetitive business tasks and reduce manual effort.",
        },

        {
            icon: <Users size={40} />,
            title: "Team Collaboration",
            description:
                "Collaborate in real time with comments, tasks and notifications.",
        },

        {
            icon: <ChartBar size={40} />,
            title: "Analytics",
            description:
                "Visualize KPIs using beautiful dashboards and reports.",
        },

        {
            icon: <Shield size={40} />,
            title: "Enterprise Security",
            description:
                "Industry-leading security with role-based permissions and encryption.",
        },

        {
            icon: <Cloud size={40} />,
            title: "Cloud Infrastructure",
            description:
                "Always available with scalable cloud-native architecture.",
        },

    ];

    return (

        <section
            id="features"
            className="py-32 bg-slate-50"
        >

            <div className="container-custom">

                <SectionHeading
                    badge="Features"
                    title="Everything You Need To Scale"
                    description="Powerful tools designed to help modern businesses move faster."
                />

                <div className="grid lg:grid-cols-3 gap-8">

                    {features.map((feature) => (

                        <FeatureCard
                            key={feature.title}
                            {...feature}
                        />

                    ))}

                </div>

            </div>

        </section>

    );
}