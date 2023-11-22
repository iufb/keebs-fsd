import { Link } from "react-router-dom";
import { PATH } from "src/shared/lib";
import { UserIcon } from "src/shared/ui/icons";

export const UserPanel = () => {
  return (
    <div className="flex gap-2">
      <Link to={PATH.account}>
        <UserIcon />
      </Link>
    </div>
  );
};
