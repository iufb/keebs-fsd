import { Link } from "react-router-dom";
import { CartIcon } from "src/entities/cart";
import { WishlistIcon } from "src/entities/wishlist";
import { PATH } from "src/shared/lib";
import { UserIcon } from "src/shared/ui/icons";

export const UserPanel = () => {
  return (
    <div className="flex lg:gap-10 gap-6">
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
