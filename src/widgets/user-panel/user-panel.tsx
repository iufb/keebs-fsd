import { Link } from "react-router-dom";
import { WishlistIcon } from "src/entities/wishlist";
import { PATH } from "src/shared/lib";
import { UserIcon } from "src/shared/ui/icons";

export const UserPanel = () => {
  return (
    <div className="flex gap-10">
      <Link to={PATH.account}>
        <UserIcon />
      </Link>
      <Link to={PATH.wishlist}>
        <WishlistIcon />
      </Link>
    </div>
  );
};
