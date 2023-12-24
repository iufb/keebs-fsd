import { navlinks } from "src/shared/lib";
import { Navlink } from "./navlink";

export const BurgerMenu = () => {
  return (
    <div className="w-full h-full    flex justify-center pt-5 ">
      <div className=" w-full px-4 rounded-md gap-y-1 h-fit py-2 bg-gray-100 col">
        {navlinks.map(({ path, name }) => (
          <Navlink to={path} name={name} variant="burger" key={path} />
        ))}
      </div>
    </div>
  );
};
