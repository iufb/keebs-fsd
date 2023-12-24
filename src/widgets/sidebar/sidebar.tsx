import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Divider, Loader, ResizablePanel } from "src/shared/ui";
import { IoIosOptions } from "react-icons/io";
import clsx from "clsx";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import useMeasure from "react-use-measure";
interface ISidebar {
  title: string;
  isLoading: boolean;
  children: ReactNode;
}
export const Sidebar: FC<ISidebar> = ({ title, isLoading, children }) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((prev) => !prev);
    if (!show) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    if (window.innerWidth > 700) {
      setShow(true)
    }
  }, [])
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <section className={clsx(show && "")}>
      {isLoading && <Loader />}
      <h2 className="h2">{title}</h2>
      <Divider />
      <button
        ref={ref}
        className={clsx(
          "lg:hidden center gap-2 text-xl font-roboto rounded-md uppercase   ",
        )}
        onClick={toggle}
      >
        <IoIosOptions size={22} />
        Filter
      </button>
      <ResizablePanel className="absolute lg:relavite z-50 lg:z-0 px-5 bg-white lg:bg-inherit " >
        {show && children}
      </ResizablePanel>
    </section>
  );
};
