import { FC, SelectHTMLAttributes } from "react";

type ISelect = {
  defaultOption: string;
  options: { type: string; name: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;
export const Select: FC<ISelect> = ({
  className,
  onChange,
  options,
  defaultOption,
}) => {
  return (
    <select
      className={`${className}  cursor-pointer w-fit bg-gray-50  text-gray-900 text-md font-bold  rounded-sm focus:ring-accent-green focus:border-accent-green block px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      onChange={onChange}
    >
      <option>{defaultOption}</option>
      {options.map((option) => (
        <option value={option.type} key={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
