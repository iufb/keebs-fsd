import { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { CustomImage } from "./img";

interface ICard extends LinkProps {
  name: string;
  img: string;
  rating: number;
  reviewCount: number;
  price: number;
}
export const Card: FC<ICard> = ({
  name,
  img,
  rating,
  reviewCount,
  price,
  className,
  ...props
}) => {
  return (
    <Link className={`${className} w-full h-full col gap-2`} {...props}>
      <CustomImage size={400} src={img} alt={name} className="rounded-lg" />
      {/* <img src={img} alt={name} className="rounded-lg" /> */}
      {/* {colors.length > 0 && ( */}
      {/*   <div className="flex gap-2 justify-end -mt-10 mb-4 pr-2"> */}
      {/*     {colors.map((color) => ( */}
      {/*       <span */}
      {/*         style={{ backgroundColor: color.hex }} */}
      {/*         className="w-4 h-4 rounded-md border border-accent-green" */}
      {/*       /> */}
      {/*     ))} */}
      {/*   </div> */}
      {/* )} */}

      <h2 className="font-bold">{name}</h2>
      <div className="flex gap-2">
        <span>{rating} Rating</span>
        <span>{reviewCount} Reviews</span>
      </div>
      <span className="block">${price}</span>
    </Link>
  );
};
