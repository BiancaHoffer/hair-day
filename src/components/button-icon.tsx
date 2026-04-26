import type React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import Icon from "./icon";

const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer transition group ",
  {
    variants: {
      variant: {
        none: "",
        primary: "fill-yellow",
      },
      size: {
        md: "w-4 h-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

const buttonIconIconVariants = cva("transition hover:fill-yellow-dark");

interface ButtonIconProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
  variant,
  size,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({
        variant,
        size,
        className,
      })}
      {...props}
    >
      <Icon svg={icon} className={buttonIconIconVariants()} />
    </button>
  );
}
