import { Link } from "react-router-dom";
import { PATH } from "src/shared/lib";

export const HomePage = () => {
  return (
    <div>
      home <Link to={PATH.keyboardsCatalog}>keyboads</Link>
    </div>
  );
};
