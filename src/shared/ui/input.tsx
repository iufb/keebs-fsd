import { ChangeEvent, FC, HTMLAttributes, useId } from "react";

type inputType = {
  label: string;
  value: string;
  required?: boolean;
  type?: "email" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputProps: HTMLAttributes<HTMLInputElement>;
};
export const Input: FC<inputType> = ({
  label,
  value,
  type,
  required,
  onChange,
  inputProps,
}) => {
  const id = useId();
  return (
    <div className={`flex flex-col gap-2 `}>
      <label htmlFor={id} className="font-bold text-lg">
        {label}
      </label>
      <input
        type={type}
        required={required}
        id={id}
        name={label.toLowerCase()}
        className="px-4 py-2 bg-gray-200"
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
};
