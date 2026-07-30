import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    features: [
      "Up to 5 team members",
      "Unlimited projects",
      "Basic analytics",
      "Email support",
    ],
  },

  {
    name: "Pro",
    price: "$79",
    featured: true,
    features: [
      "Unlimited users",
      "Advanced analytics",
      "Automation",
      "Priority support",
      "API access",
    ],
  },

  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Dedicated manager",
      "Unlimited storage",
      "Custom integrations",
      "24/7 support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32"
    >
      <div className="container-custom">

        <SectionHeading
          badge="Pricing"
          title="Simple Pricing"
          description="No hidden fees. Upgrade whenever you're ready."
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`
                rounded-3xl
                border
                p-10
                transition
                hover:-translate-y-2
                hover:shadow-2xl
                bg-white
                text-slate-900
                dark:bg-slate-900
                dark:text-slate-100

                ${
                  plan.featured
                    ? "border-blue-600 shadow-xl"
                    : "border-slate-200 dark:border-slate-700"
                }
              `}
            >

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="text-5xl font-bold mt-6">
                {plan.price}
              </div>

              <div className="space-y-4 my-10">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-green-600"
                    />

                    {feature}

                  </div>

                ))}

              </div>

              <Button className="w-full">
                Get Started
              </Button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}