import { ButtonHTMLAttributes, FC } from "react";
import { clsx } from "clsx";
type buttonVariantsType = "primary" | "outlined" | "icon_no_bg" | "icon";
type buttonType = {
  variant: buttonVariantsType;
  type?: "button" | "submit" | "reset";
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<buttonType> = ({
  variant,
  className,
  type = "button",
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        className,
        "  disabled:opacity-50 ",
        {
          primary:
            "w-full bg-primary rounded-md px-4 h-14 text-secondary font-bold text-lg uppercase ",
          outlined:
            "w-full bg-background px-4 rounded-md border border-gray-900 flex justify-center items-center text-xl gap-3 uppercase  h-14 text-black font-bold",
          icon_no_bg: "bg-inherit  text-xl",
          icon: " w-10 h-10 px-[10px]  rounded-full   shadow-lg bg-background  ",
        }[variant]
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
