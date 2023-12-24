import { AnimatePresence, delay, HTMLMotionProps, motion } from "framer-motion"
import { FC, ReactNode } from "react"
import useMeasure from "react-use-measure"
const duration = 1
interface IResizablePanel extends HTMLMotionProps<'div'> {
  children: ReactNode
  height?: number
}
export const ResizablePanel: FC<IResizablePanel> = ({ children, height, className }) => {
  const [ref, { height: autoHeight }] = useMeasure()
  return (
    <motion.div animate={{ height: autoHeight || 'auto' }} className={`${className}  w-full overflow-hidden`}>
      <AnimatePresence initial={false}>
        <motion.div initial={{ opacity: 0 }} animate={{
          opacity: 1, transition: {
            duration: duration / 4,
          }
        }} exit={{
          opacity: 0, transition: {
            duration: duration / 6,
          }
        }} key={JSON.stringify(children, ignoreCircularReferences())}>
          <div ref={ref} className={`${autoHeight ? 'absolute' : 'relative'} w-full`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
const ignoreCircularReferences = () => {
  const seen = new WeakMap()
  return (key: any, value: any) => {
    if (key.startsWith('_')) return;
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return;
      seen.set(value, 'value')
    }
    return value
  }
}
