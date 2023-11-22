import { ElementType, Suspense } from "react";

export const Loadable = (Component: ElementType) => {
  return function (props: any) {
    return (
      <Suspense fallback={<div>loading</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};
