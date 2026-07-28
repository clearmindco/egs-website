import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const sizeStyles = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof sizeStyles;
}) {
  return (
    <div className={cn("mx-auto w-full px-6 lg:px-8", sizeStyles[size], className)}>
      {children}
    </div>
  );
}
