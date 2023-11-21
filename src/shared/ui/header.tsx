import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IHeader {
  center: ReactNode;
  right: ReactNode;
}
export const Header: FC<IHeader> = ({ center, right }) => {
  return (
    <>
      <div className="w-full h-7  bg-gradient-to-l to-accent-green from-accent-blue" />
      <header className="w-full px-11 h-14 flex justify-around items-center bg-white shadow-md font-roboto mb-10">
        <h1 className="text-3xl">
          <Link to="/home">Keebs.</Link>
        </h1>
        {center}
        {right}
      </header>
    </>
  );
};
