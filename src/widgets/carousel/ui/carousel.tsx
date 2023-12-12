import { useEffect, useState } from "react";
import { Button, Loader } from "src/shared/ui";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useHeroKeyboards } from "../queries/use-hero-keyboards";
import { CarouselItem } from "./carousel-item";

export const Carousel = () => {
  const [selected, setSelected] = useState<number>(0);
  const { items, isLoading, error } = useHeroKeyboards();
  useEffect(() => {
    const interval = setInterval(next, 10000);
    return () => clearInterval(interval);
  }, [selected]);
  const next = () => {
    if (!items) return;
    if (selected == items.length - 1) {
      setSelected(0);
    } else {
      setSelected((prev) => prev + 1);
    }
  };
  const back = () => {
    if (!items) return;
    if (selected == 0) {
      setSelected(items.length - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };
  return (
    <div className="relative rounded-md">
      {items?.map((item, index) => {
        if (isLoading) return <Loader />;
        if (error) return <div>{error}</div>;
        return (
          <CarouselItem
            id={item.id}
            hidden={index !== selected}
            img={item.img}
            name={item.name}
            desc={item.desc}
            key={item.id}
            selected={selected}
          />
        );
      })}
      <div className="flex z-40 absolute gap-5 right-[10vw] -bottom-5">
        <Button variant="icon" onClick={back} className="hover:scale-110">
          <IoChevronBack size={20} />
        </Button>
        <Button variant="icon" onClick={next} className="hover:scale-110">
          <IoChevronForward size={20} />
        </Button>
      </div>
    </div>
  );
};
