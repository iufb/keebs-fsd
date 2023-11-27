import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { CheckIcon } from "./icons";

type IRadio = {
  name: string;
  price: string;
  selected: boolean;
} & HTMLAttributes<HTMLDivElement>;
export const Radio: FC<IRadio> = ({ name, price, selected, onClick }) => {
  return (
    <div
      className={clsx(
        "p-4 border-2 cursor-pointer rounded-md flex gap-2 items-center",
        selected ? "border-accent-green bg-select" : "border-gray-900 bg-white",
      )}
      onClick={onClick}
    >
      <input type="radio" checked={selected} className="w-0" />
      <span
        className={clsx(
          "checkbox w-5 h-5 border   rounded-md  flex justify-center items-center ",
          selected ? "border-none bg-accent-green" : "border-black bg-white",
        )}
      >
        <CheckIcon className="text-white" />
      </span>

      <span>{name}</span>
      <span>{price}</span>
    </div>
  );
};
