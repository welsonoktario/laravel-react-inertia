import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export type InputErrorProps = React.InputHTMLAttributes<HTMLParagraphElement>;

const InputError = React.forwardRef<HTMLParagraphElement, InputErrorProps>(
  ({ className, ...props }, ref) => {
    if (!props.children) return null;

    return (
      <p
        className={cn("mt-2 text-sm text-destructive", className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </p>
    );
  }
);
InputError.displayName = "InputError";

export { Input, InputError };
