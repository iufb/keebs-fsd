import { ElementType, Suspense } from "react";
import { Loader } from "./loader";

export const Loadable = (Component: ElementType) => {
  return function (props: any) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
