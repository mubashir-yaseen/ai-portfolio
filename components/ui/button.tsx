import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "ghost";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const base = "px-4 py-2 rounded font-medium";

    // Always set to a string — never undefined
    const style: string =
      variant === "outline"
        ? "border border-blue-600 text-blue-600 hover:bg-blue-50"
        : variant === "ghost"
        ? "hover:bg-blue-50"
        : "";

    return (
      <button
        ref={ref}
        className={cn(base, style, className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
