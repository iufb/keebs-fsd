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
    return images[idx];
  } else if (typeof images[idx] === "object") {
    return images[idx].image;
  } else {
    return null;
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
    <div className="grid grid-cols-imageGallery gap-x-5 w-fit h-full ">
      <div className="col grow-0 gap-2 w-20 max-w-full max-h-fit ">
        {images.map((img, idx) => {
          let i;
          if (typeof img == "string") {
            i = img;
          } else {
            i = img.image;
          }
          return (
            <CustomImage
              size={80}
              src={i}
              alt={`image of keyboard ${idx + 1}`}
              className="rounded-lg cursor-pointer"
              key={idx}
              onClick={() => changeImage(idx)}
            />
          );
        })}
      </div>
      <CustomImage
        size={920}
        src={baseImage}
        alt="keyboard"
        className="rounded-lg"
      />
    </div>
  );
};
