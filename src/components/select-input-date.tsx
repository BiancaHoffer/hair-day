import { cva, cx, type VariantProps } from "class-variance-authority";
import { useRef } from "react";
import { textVariants } from "./text";
import Icon from "./icon";
import CaretDown from "../assets/icons/caret-down.svg?react";
import CalendarIcon from "../assets/icons/calendar-blank.svg?react";

const containerTextVariants = cva(
  "flex items-center gap-3 border border-gray-500 focus-within:border-yellow-dark rounded-lg bg-transparent outline-none cursor-pointer",
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

const inputTextVariants = cva(
  "flex-1 min-w-0  [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden cursor-pointer outline-none font-sans font-normal bg-transparent",
);

interface InputTextProps
  extends
    VariantProps<typeof containerTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function SelectInputDate({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleWrapperClick = () => {
    if (!disabled) {
      inputRef.current?.showPicker?.();
    }
  };

  return (
    <label
      className={containerTextVariants({ size, disabled, className })}
      onClick={handleWrapperClick}
    >
      <Icon svg={CalendarIcon} size="md" color="primary" />
      <input
        ref={inputRef}
        type="date"
        className={cx(
          inputTextVariants(),
          textVariants({ color: "secondary" }),
        )}
        {...props}
      />
      <Icon svg={CaretDown} size="sm" color="secondary" />
    </label>
  );
}
