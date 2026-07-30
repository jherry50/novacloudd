import { CloudLightning } from "lucide-react";

type LogoProps = {
  size?: "sm" | "md" | "lg";
};

export default function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: {
      icon: 20,
      text: "text-xl",
    },
    md: {
      icon: 26,
      text: "text-2xl",
    },
    lg: {
      icon: 34,
      text: "text-4xl",
    },
  };

  const current = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg">
        <CloudLightning size={current.icon} />
      </div>

      <span
        className={`font-bold tracking-tight ${current.text} bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent`}
      >
        NovaCloud
      </span>
    </div>
  );
}