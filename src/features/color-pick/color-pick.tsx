import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IKeyboardColor } from "src/entities/keyboard";

interface IColorPick
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  colors: IKeyboardColor[];
}
export const ColorPick: FC<IColorPick> = ({ colors }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(
    searchParams.get("color") ?? colors[0].name,
  );
  const changeColor = (colorName: string) => {
    setSelected(colorName);
    setSearchParams(`color=${colorName}`);
  };
  return (
    <>
      <div>Color : {selected}</div>
      <div className="flex gap-5">
        {colors.map((color, idx) => {
          return (
            <span
              key={idx}
              className={` rounded-full p-1 border-[3px] 
${selected == color.name ? "border-accent-green" : "border-white"}
              `}
            >
              <span
                style={{
                  backgroundColor: color.hex,
                }}
                className={` block  cursor-pointer w-10 h-10 rounded-full `}
                onClick={() => changeColor(color.name)}
              />
            </span>
          );
        })}
      </div>
    </>
  );
};
