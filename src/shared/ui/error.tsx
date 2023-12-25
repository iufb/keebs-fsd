import { FC } from "react";

interface IError {
  message?: string;
}
export const Error: FC<IError> = ({ message }) => {
  return <div className="flex col w-full gap-2 text-red-600">
    <span>Something went wrong... {message} </span>

  </div >
}
