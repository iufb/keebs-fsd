import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
interface IBurgetButton
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  open: boolean;
  toggle: (status: boolean) => void;
}

export const BurgerButton: FC<IBurgetButton> = ({
  className,
  open,
  toggle,
  ...props
}) => {
  const close = () => {
    toggle(false);
  };
  return (
    <button className={`${className}`} {...props}>
      {open ? (
        <button onClick={close} className="center gap-2  ">
          <span className="font-roboto text-xl">Close</span>
          <IoMdClose size={20} />
        </button>
      ) : (
        <RxHamburgerMenu
          size={22}
          onClick={() => toggle(true)}
          className="ml-5"
        />
      )}
    </button>
  );
};
