import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-sans text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight disabled:pointer-events-none disabled:opacity-50 px-6 py-3";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-electric-blue text-white hover:bg-electric-blue-hover active:bg-electric-blue-hover",
  secondary:
    "border border-slate-border text-white hover:border-cool-gray hover:bg-white/5",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={styles} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;
  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
