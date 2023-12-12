import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, CustomImage } from "src/shared/ui";
import { motion } from "framer-motion";
interface ICarouselItem {
  id: string;
  img: string;
  name: string;
  selected: number;
  desc: string;
  hidden: boolean;
}
export const CarouselItem: FC<ICarouselItem> = ({
  img,
  name,
  desc,
  id,
  selected,
  hidden,
}) => {
  const navigate = useNavigate();
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.2,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "tween",
      },
    },
  };
  const textVariants = {
    enter: (height: number) => ({
      y: height,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "tween",
      },
    },
  };
  return (
    <div className={`${hidden ? "hidden" : "flex"}  overflow-hidden`}>
      <motion.div
        key={selected}
        variants={imageVariants}
        initial="enter"
        animate="center"
        className="rounded-lg overflow-hidden relative 2xl:max-h-[615px] xl:max-h-[575px] lg:max-h-[500px] md:max-h-[450px] sm:max-h-[390px] max-h-[350px] w-full"
      >
        <div className="bg-black h-full absolute z-20 top-0 left-0 w-full opacity-40" />
        <img src={img} alt={name} />
      </motion.div>
      <div className="flex flex-col z-30 justify-center gap-4 items-center absolute -translate-x-1/2 left-1/2 top-1/2 text-white ">
        <motion.h2
          variants={textVariants}
          initial="enter"
          animate="center"
          custom={-100}
          className="text-7xl font-bold"
        >
          {name}
        </motion.h2>

        <motion.p
          variants={textVariants}
          initial="enter"
          animate="center"
          custom={-40}
          className="text-lg center col gap-4 "
        >
          {desc}
          <Button
            variant="outlined"
            className="max-w-fit"
            onClick={() => navigate(`/keyboards/${id}`)}
          >
            SHOP NOW
          </Button>
        </motion.p>
      </div>
    </div>
  );
};
