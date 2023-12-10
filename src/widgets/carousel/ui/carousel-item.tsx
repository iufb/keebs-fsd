import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "src/shared/ui";
interface ICarouselItem {
  id: string;
  img: string;
  name: string;
  desc: string;
  hidden: boolean;
}
export const CarouselItem: FC<ICarouselItem> = ({
  img,
  name,
  desc,
  id,
  hidden,
}) => (
  <Link className={`${hidden ? "hidden" : "block"}`} to={`/keyboards/${id}`}>
    <img src={img} alt={name} className="rounded-lg" />
    <div className="flex flex-col justify-center gap-4 items-center absolute -translate-x-1/2 left-1/2 top-1/2 text-white">
      <h2 className="text-4xl">{name}</h2>
      <p className="text-lg">{desc}</p>
      <Button variant="outlined">SHOP NOW</Button>
    </div>
  </Link>
);
