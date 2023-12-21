import clsx from "clsx";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "src/entities/cart";
import { WishlistIcon } from "src/entities/wishlist";
import { PATH } from "src/shared/lib";
import { UserIcon } from "src/shared/ui/icons";
interface IUserPanel
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const UserPanel: FC<IUserPanel> = ({ className, ...props }) => {
  return (
    <div className={clsx("flex lg:gap-10 gap-6", className)} {...props}>
      <Link to={PATH.account}>
        <UserIcon />
      </Link>
      <Link to={PATH.wishlist}>
        <WishlistIcon />
      </Link>
      <CartIcon />
    </div>
  );
};
