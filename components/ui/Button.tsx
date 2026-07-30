import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",

        variant === "primary"
          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"

          : "border border-slate-300 hover:bg-slate-100",

        className
      )}
      {...props}
    />
  );
}