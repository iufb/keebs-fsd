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
        "w-full rounded-md disabled:opacity-50 ",
        {
          primary:
            "bg-primary px-4 h-14 text-secondary font-bold text-lg uppercase ",
          //TODO: outlined btn
          outlined:
            "bg-background px-4 border border-gray-900 flex justify-center items-center gap-3 uppercase  h-14 text-black font-bold",
          icon_no_bg: "bg-inherit  text-xl",
          icon: "w-10 h-10 rounded-full shadow-lg bg-background flex justify-center items-center ",
        }[variant],
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
