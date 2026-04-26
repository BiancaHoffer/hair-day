import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

const timeSelectVariantsWrapper = cva(
  "flex items-center justify-center appearance-none transition rounded-lg cursor-pointer focus-within:border-yellow focus-within:text-yellow has-[:checked]:border-yellow has-[:checked]:text-yellow",
  {
    variants: {
      variant: {
        default:
          "border border-solid border-gray-500 bg-gray-600 hover:bg-gray-500",
      },
      size: {
        md: "w-fit py-2 px-5",
      },
      disabled: {
        true: "pointer-events-none bg-transparent text-gray-500 border-gray-600",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      disabled: false,
    },
  },
);

const timeSelectVariants = cva("appearance-none");

interface TimeSelectProps
  extends
    VariantProps<typeof timeSelectVariantsWrapper>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  disabled?: boolean;
}

export default function TimeSelect({
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: TimeSelectProps) {
  return (
    <label
      className={cx(
        timeSelectVariantsWrapper({ variant, size, disabled }),
        textVariants(),
        className,
      )}
    >
      {children}
      <input
        className={timeSelectVariants()}
        type="radio"
        name="time"
        value={children?.toString()}
        disabled={disabled}
        {...props}
      />
    </label>
  );
}
