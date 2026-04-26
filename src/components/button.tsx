import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

const buttonVariants = cva(
  `flex items-center justify-center cursor-pointer transition border-2 border-transparent rounded-lg group`,
  {
    variants: {
      variant: {
        primary: "bg-yellow hover:border-yellow-light",
      },
      size: {
        md: "h-14 p-4",
      },
      disabled: {
        true: "bg-yellow/30 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Text className="text-gray-800" variant="title-sm-bold">
        {children}
      </Text>
    </button>
  );
}
