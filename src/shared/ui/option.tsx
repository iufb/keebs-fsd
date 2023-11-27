import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

type IOption = {
  name: string;
  selected: boolean;
} & HTMLAttributes<HTMLDivElement>;
export const Option: FC<IOption> = ({ name, selected, onClick }) => {
  return (
    <div
      className={clsx(
        "px-2 py-3 rounded-lg text-start truncate cursor-pointer ",
        selected
          ? "border-accent-green border-2 bg-select text-gray-900"
          : "border  border-gray-500 bg-white ",
      )}
      onClick={onClick}
    >
      {name}
    </div>
  );
};
