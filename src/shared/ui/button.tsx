import { FC, HTMLAttributes } from "react";
import { clsx } from "clsx";
type buttonVariantsType = "primary" | "outlined" | "icon";
type buttonType = {
  variant: buttonVariantsType;
  type?: "button" | "submit" | "reset";
} & HTMLAttributes<HTMLButtonElement>;
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
        "w-full rounded-md",
        {
          primary: "bg-primary px-4 h-14 text-secondary font-bold text-lg ",
          //TODO: outlined btn
          outlined: "bg-background px-4 h-10 text-black font-bold",
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
