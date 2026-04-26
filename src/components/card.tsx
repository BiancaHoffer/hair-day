import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const cardVariants = cva("rounded-xl bg-gray-700", {
  variants: {
    size: {
      none: "",
      md: "p-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface CardProps
  extends VariantProps<typeof cardVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  size,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children,
  );
}
