import { FC, SVGAttributes } from "react";

type IArrowIcon = SVGAttributes<HTMLOrSVGElement>;
export const ArrowIcon: FC<IArrowIcon> = ({ className }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className={`w-4 h-4 ${className}`}
      viewBox="0 0 28 16"
    >
      <path
        d="M1.57 1.59l12.76 12.77L27.1 1.59"
        stroke-width="2"
        stroke="#000"
        fill="none"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};
