import { cva, type VariantProps } from "class-variance-authority";

const IconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
    size: {
      sm: "w-4 h-auto",
      md: "w-5 h-auto",
    },
    color: {
      primary: "fill-yellow",
      secondary: "fill-gray-300",
    },
  },
  defaultVariants: {
    animate: false,
    size: "md",
    color: "primary",
  },
});

interface IconProps
  extends
    Omit<React.ComponentProps<"svg">, "color">,
    VariantProps<typeof IconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  size,
  color,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={IconVariants({ animate, size, color, className })}
      {...props}
    />
  );
}
