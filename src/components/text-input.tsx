import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import Icon from "./icon";
import UserIcon from "../assets/icons/user-square.svg?react";

const containerTextVariants = cva(
  "flex items-center gap-2 border border-gray-500 focus-within:border-yellow-dark rounded-lg bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "p-3",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

const inputTextVariants = cva("bg-transparent outline-none");

interface InputTextProps
  extends
    VariantProps<typeof containerTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  iconComponent?: React.ReactNode;
}

export default function TextInput({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <label className={containerTextVariants({ size, disabled, className })}>
      <Icon svg={UserIcon} />
      <input
        type="text"
        className={cx(inputTextVariants(), textVariants())}
        {...props}
      />
    </label>
  );
}
