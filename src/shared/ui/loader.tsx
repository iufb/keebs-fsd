import clsx from "clsx";
import { FC } from "react";
interface ILoader {
  size?: 'sm' | 'md' | 'lg'
}
export const Loader: FC<ILoader> = ({ size = 'sm' }) => {
  return (
    <div className="w-full h-full flex justify-center items-start pt-20 ">
      <div
        className={clsx('inline-block mx-auto  animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]', { sm: 'h-8 w-8', md: 'h-12 w-12', lg: 'h-20 w-20' }[size])}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};
