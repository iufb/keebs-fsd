import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useAnimationControls,
} from "framer-motion";
import { FC, useEffect, useState } from "react";
import { Loader } from "./loader";

interface IImage extends HTMLMotionProps<"img"> {
  src: string;
  alt: string;
}
export const CustomImage: FC<IImage> = ({ className, src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimationControls();
  useEffect(() => {
    const imgSrc = new Image();
    imgSrc.onload = () => {
      new Promise((resolve) => {
        resolve(setIsLoading(false));
      }).then(() => {
        controls.start({
          width: "auto",
          height: "auto",
          opacity: 1,
          x: 0,
        });
      });
    };
    imgSrc.src = src;
  }, [src, isLoading]);
  return (
    <AnimatePresence>
      {isLoading ? (
        <div className={`rounded-md h-full w-full bg-gray-100 center`}>
          <Loader />
        </div>
      ) : (
        <motion.img
          key={src}
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          exit={{ opacity: 0, x: 100 }}
          className={className}
          src={src}
          alt={alt}
          {...props}
        />
      )}
    </AnimatePresence>
  );
};
