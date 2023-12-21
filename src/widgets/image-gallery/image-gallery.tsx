import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { IImage } from "src/entities/keyboard";
import { CustomImage } from "src/shared/ui";

const getImg = (images: string[] | IImage[], idx: number) => {
  if (typeof images[idx] === "string") {
    const src = images[idx] as string;
    return src;
  } else if (typeof images[idx] == "object") {
    const imageObj = images[idx] as IImage;
    return imageObj.image;
  } else {
    return "";
  }
};

interface IImageGallery
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: string[] | IImage[];
}

export const ImageGallery: FC<IImageGallery> = ({ images }) => {
  const [selected, setSelected] = useState(0);
  const [searchParams] = useSearchParams();
  const colorQuery = searchParams.get("color");
  const changeImage = (idx: number) => {
    setSelected(idx);
  };
  useEffect(() => {
    images.map((img, idx) => {
      if (typeof img == "object") {
        if (img.color == colorQuery) {
          setSelected(idx);
        }
      }
    });
  }, [colorQuery]);
  const baseImage = getImg(images, selected);
  return (
    <div className="grid xl:grid-cols-[80px_1fr] gap-2 grid-cols-1    ">
      <div
        className={`flex xl:flex-col gap-2 flex-row flex-wrap order-2 xl:order-1 min-h-[80px] w-full  overflow-x-scroll xl:overflow-x-visible `}
      >
        {images.map((img, idx) => {
          let i;
          if (typeof img == "string") {
            i = img;
          } else {
            i = img.image;
          }
          return (
            <div className="h-[80px] w-[80px] ">
              <CustomImage
                src={i}
                alt={`image of keyboard ${idx + 1}`}
                className="rounded-lg cursor-pointer"
                key={idx}
                onClick={() => changeImage(idx)}
              />
            </div>
          );
        })}
      </div>
      <div className="xl:relative   order-1 xl:order-2   ">
        <CustomImage
          src={baseImage}
          alt="keyboard"
          className="  rounded-lg xl:absolute h-full"
        />
      </div>
    </div>
  );
};
