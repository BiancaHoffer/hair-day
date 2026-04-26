import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      "title-lg-bold": "text-[1.5rem] font-bold leading-6",
      "title-md-bold": "text-base font-bold leading-6",
      "title-sm-bold": "text-sm font-bold leading-5",
      "body-md": "text-base leading-6 font-regular",
      "body-sm": "text-sm leading-5 font-regular",
    },
    color: {
      primary: "text-gray-100",
      secondary: "text-gray-200",
      tertiary: "text-gray-300",
      quaternary: "text-gray-400",
    },
  },
  defaultVariants: {
    variant: "body-md",
    color: "primary",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  color,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, color, className }),
      ...props,
    },
    children,
  );
}
