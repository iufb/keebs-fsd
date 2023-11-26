import { FC, ReactNode } from "react";
import { Divider } from "src/shared/ui";
interface ISidebar {
  title: string;
  isLoading: boolean;
  children: ReactNode;
}
export const Sidebar: FC<ISidebar> = ({ title, isLoading, children }) => {
  return (
    <section>
      {/* TODO:loafding */}
      {isLoading && <div>loading..</div>}
      <h2 className="h2">{title}</h2>
      <Divider />
      <div className="col gap-4">{children}</div>
    </section>
  );
};
