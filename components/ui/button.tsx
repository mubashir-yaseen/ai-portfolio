import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "ghost";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const base = "px-4 py-2 rounded font-medium";

    let style: string = "";
    if (variant === "outline") {
      style = "border border-blue-600 text-blue-600 hover:bg-blue-50";
    } else if (variant === "ghost") {
      style = "hover:bg-blue-50";
    }

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
