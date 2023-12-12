import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { Loader } from "./loader";

interface IImage
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
  size: number;
}
export const CustomImage: FC<IImage> = ({
  className,
  size,
  src,
  alt,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const imgSrc = new Image();
    imgSrc.onload = () => {
      setIsLoading(false);
    };
    imgSrc.src = src;
  }, [src]);
  return (
    <>
      {isLoading ? (
        <div
          className={` rounded-md   bg-gray-100 center`}
          style={{
            width: size,
            height: size,
          }}
        >
          <Loader />
        </div>
      ) : (
        <img className={className} src={src} alt={alt} {...props} />
      )}
    </>
  );
};
