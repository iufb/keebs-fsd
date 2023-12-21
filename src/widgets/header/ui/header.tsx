import clsx from "clsx";
import { motion, useAnimationControls, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "src/widgets/header/ui/burger-menu";
import { BurgerButton } from "./burger-button";
import { Navbar } from "./navbar";
import { UserPanel } from "./user-panel";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();
  const [scrolled, setScrolled] = useState(false);
  function toggleMenu(status: boolean) {
    setOpen(status);
    controls.start({
      height: status ? 200 : 56,
      transition: {
        ease: "easeInOut",
      },
    });
  }
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        if (window.scrollY != 0) {
          ref.current.style.top = "0";
        } else {
          ref.current.style.top = "28px";
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="w-full h-7  bg-gradient-to-l to-accent-green from-accent-blue" />
      <motion.header
        ref={ref}
        initial={{ height: 56 }}
        exit={{ height: 56 }}
        animate={controls}
        className={` lg:px-11 px-5  bg-white shadow-md font-roboto  w-full  pt-2 mb-10 fixed  z-50  overflow-hidden  `}
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

        {open && <BurgerMenu close={() => toggleMenu(false)} />}
      </motion.header>
    </>
  );
};
