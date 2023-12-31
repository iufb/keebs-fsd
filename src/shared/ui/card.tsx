import { FC, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { CustomImage } from "./img";

interface ICard extends LinkProps {
  name: string;
  img: string;
  price: number;
  colors?: {
    name: string;
    hex: string;
  }[];
  buttons: ReactNode;
}
export const Card: FC<ICard> = ({
  name,
  img,
  price,
  className,
  colors,
  buttons,
  ...props
}) => {
  return (
    <div className="relative group ">
      <Link className={`${className} w-full h-full col gap-2  `} {...props}>
        <CustomImage src={img} alt={name} className="rounded-lg" />
        {colors && colors.length > 0 && (
          <div className="flex gap-2 justify-end -mt-10 mb-4 pr-2">
            {colors.map((color) => (
              <span
                key={color.hex}
                style={{ backgroundColor: color.hex }}
                className="w-4 h-4 rounded-md border "
              />
            ))}
          </div>
        )}

        <h2 className="font-bold">{name}</h2>
        <span className="block">${price}</span>
      </Link>
      <div className="hidden gap-2 absolute right-3 top-3 group-hover:col group-hover:delay-150 group-hover:transition-all">
        {buttons}
      </div>
    </div>
  );
};
