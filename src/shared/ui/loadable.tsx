import { motion } from "framer-motion";
import { ElementType, Suspense } from "react";
import { FullScreenLoader } from "./full-screen-loader";

export const Loadable = (Component: ElementType) => {
  return function (props: any) {
    return (
      <Suspense fallback={<FullScreenLoader />}>
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
          duration: 0.6,
          ease: 'easeInOut'
        }}>
          <Component {...props} />
        </motion.main>
      </Suspense>
    );
  };
};
