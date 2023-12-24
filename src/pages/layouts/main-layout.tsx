import { Outlet } from "react-router-dom";
import { Footer } from "src/shared/ui";
import { Header } from "src/widgets/header";

export const MainLayout = () => {
  return (
    <section className="flex flex-col justify-start mx-auto items-center min-h-screen">
      <Header />
      <main className={`max-w-[1600px] flex-1   w-full  h-full mt-20`}>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};
