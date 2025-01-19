import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: "outline" | "filled";
  size?: "md" | "lg";
  showIcon?: boolean;
}

export function LinkButton({
  href,
  children,
  variant = "outline",
  size = "lg",
  showIcon = true,
}: LinkButtonProps) {
  const baseStyles =
    "inline-flex items-center text-base font-medium transition-colors duration-200 group";

  const variants = {
    outline:
      "border border-black hover:text-white hover:bg-primary rounded-full",
    filled:
      "border border-transparent text-white bg-primary hover:bg-primary-dark rounded-md",
  };

  const sizes = {
    md: "px-4 py-2",
    lg: "px-6 py-3",
  };

  return (
    <Link
      href={href}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      <span>{children}</span>
      {showIcon && (
        <ArrowRightCircleIcon
          className="ml-2 h-8 w-8 group-hover:translate-x-1 transition-transform duration-200"
          strokeWidth={1}
        />
      )}
    </Link>
  );
}
