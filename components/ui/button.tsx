import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "ghost";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const base = "px-4 py-2 rounded font-medium";
    const style =
      variant === "outline"
        ? "border border-blue-600 text-blue-600 hover:bg-blue-50"
        : variant === "ghost"
        ? "hover:bg-blue-50"
        : "bg-blue-600 text-white hover:bg-blue-700";

    return (
      <button ref={ref} className={cn(base, style, className)} {...props} />
    );
  }
);
Button.displayName = "Button";
