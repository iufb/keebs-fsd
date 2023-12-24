import clsx from "clsx";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ResizablePanel } from "src/shared/ui";
import { BurgerMenu } from "src/widgets/header/ui/burger-menu";
import { BurgerButton } from "./burger-button";
import { Navbar } from "./navbar";
import { UserPanel } from "./user-panel";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();
  function toggleMenu(status: boolean) {
    setOpen(status);
    controls.start({
      height: status ? 200 : 56,
      transition: {
        ease: "easeInOut",
      },
    });
  }
  return (
    <>
      <div className="w-full h-7  bg-gradient-to-l to-accent-green from-accent-blue" />
      <header
        className={` lg:px-11 px-5 h-14  top-7 bg-white shadow-md font-roboto  w-full  pt-2 mb-10  absolute  z-50  `}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">
            <Link to="/home">Keebs.</Link>
          </h1>
          <Navbar className={clsx("lg:block hidden ")} />
          <div className="flex ">
            <UserPanel className={clsx(open && "hidden")} />
            <BurgerButton
              className="lg:hidden block"
              open={open}
              toggle={toggleMenu}
            />
          </div>
        </div>

        <ResizablePanel className="relative">{open && <BurgerMenu />} </ResizablePanel>
      </header>
    </>
  );
};
