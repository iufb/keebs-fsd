import { FC } from "react";

interface ICheckbox {
  name: string;
  checked: boolean;
  toggle: () => void;
}
export const Checkbox: FC<ICheckbox> = ({ name, toggle, checked }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer" onClick={toggle}>
      <span className="checkbox w-5 h-5 border border-black rounded-sm  flex justify-center items-center ">
        <span
          className={`${checked && "block bg-black w-3 h-3 rounded-sm "}`}
        ></span>
      </span>
      <span className={`${checked && "underline font-bold"}`}>{name}</span>
    </div>
  );
};
