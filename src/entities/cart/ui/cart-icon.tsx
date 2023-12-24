import { FC, HTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ResizablePanel } from "src/shared/ui";
import { useCartCount } from "../queries/use-cart-count";
import { useCartStore } from "../store";
import { CartModal } from "./cart-modal";

const Icon: FC<HTMLAttributes<HTMLOrSVGElement>> = ({ onClick, className }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    onClick={onClick}
    viewBox="0 0 102.03 102.04"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Cart</title>
    <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="官网像素icon"
        transform="translate(-586.800000, 0.000000)"
        fill="#040000"
        fillRule="nonzero"
      >
        <g id="编组" transform="translate(586.800000, 0.000000)">
          <rect
            id="矩形"
            x="91.52"
            y="78.45"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="91.52"
            y="65.37"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="91.52"
            y="52.32"
            width="10.51"
            height="10.48"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="91.52"
            y="39.24"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="78.44"
            y="91.53"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="78.44"
            y="26.16"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="65.36"
            y="91.53"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="65.36"
            y="39.24"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="65.36"
            y="26.16"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="65.36"
            y="13.08"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="52.29"
            y="91.53"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="52.29"
            y="26.16"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="52.29"
            y="0"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="39.23"
            y="91.53"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="39.23"
            y="26.16"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="39.23"
            y="0"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="26.15"
            y="91.53"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="26.15"
            y="39.24"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="26.15"
            y="26.16"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="26.15"
            y="13.08"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="13.07"
            y="91.53"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="13.07"
            y="26.16"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="0"
            y="78.45"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="0"
            y="65.37"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="0"
            y="52.32"
            width="10.51"
            height="10.48"
            rx="5.24"
          ></rect>
          <rect
            id="矩形"
            x="0"
            y="39.24"
            width="10.51"
            height="10.51"
            rx="5.24"
          ></rect>
        </g>
      </g>
    </g>
  </svg>
);
export const CartIcon = () => {
  const { isShow, showCart } = useCartStore((state) => ({
    showCart: state.toggle,
    isShow: state.isShow,
  }));
  const isLogged = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const { productsCount, isLoading, error } = useCartCount();
  const showProductCount = (): null | JSX.Element => {
    if (error || isLoading) {
      return null;
    }
    if (!productsCount && productsCount == 0) {
      return null;
    }
    return (
      <span className="w-5 h-5 flex items-center justify-center text-sm bg-green-600 text-white rounded-full absolute -right-4 -bottom-1 font-bold ">
        {productsCount}
      </span>
    );
  };
  const showUserCart = () => {
    if (!isLogged) {
      navigate("/signin");
      return;
    }
    showCart(true);
  };
  return (
    <div className="relative cursor-pointer">
      <Icon onClick={showUserCart} /> {isShow && <ResizablePanel><CartModal /></ResizablePanel>}
      {showProductCount()}
    </div>
  );
};
