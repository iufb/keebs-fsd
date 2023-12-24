import { motion } from "framer-motion";
import { FC } from "react";
import { Checkbox, ResizablePanel } from "src/shared/ui";
import { ArrowIcon } from "src/shared/ui/icons";
import { FilterType } from "./model";

interface IFilterItem {
  showContent: () => void;
  isShow: boolean;
  filterName: string;
  slug: string;
  values: FilterType[];
  isIn: (filterSlug: string, valueSlug: string) => boolean;
  toggle: (slug: string) => void;
}
export const FilterItem: FC<IFilterItem> = ({
  isShow,
  showContent,
  filterName,
  slug,
  isIn,
  toggle,
  values,
}) => {
  const variants = {
    initial: {
      height: 0,
      opacity: 0,
    },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="col">
      <span
        className="text-lg flex gap-4 items-center font-bold cursor-pointer mb-2"
        onClick={showContent}
      >
        {filterName}
        <motion.span>
          <ArrowIcon
            className={`${isShow ? "rotate-180" : "rotate-0"
              } transition ease-out duration-300`}
          />
        </motion.span>
      </span>
      {/* <motion.div */}
      {/*   variants={variants} */}
      {/*   layout */}
      {/*   layoutId="height" */}
      {/*   initial={isShow ? "initial" : "animate"} */}
      {/*   animate={isShow ? "initial" : "animate"} */}
      {/*   className={`overflow-hidden `} */}
      {/* > */}
      <ResizablePanel>
        {isShow && values.map((value) => {
          const checked = isIn(slug, value.slug);
          return (
            <Checkbox
              name={value.name}
              key={value.slug}
              checked={checked}
              toggle={() => toggle(value.slug)}
            />
          );
        })}
      </ResizablePanel>
      {/* </motion.div> */}
    </div>
  );
};
