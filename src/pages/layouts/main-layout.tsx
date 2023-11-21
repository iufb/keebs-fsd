import { Outlet } from "react-router-dom";
import { Footer, Header } from "src/shared/ui";
import { Navbar } from "src/widgets/navigation/navbar";

export const MainLayout = () => {
  return (
    <section className="flex flex-col justify-start mx-auto items-center min-h-screen">
      <Header center={<Navbar />} right={<div>users</div>} />
      <main className={`max-w-[1600px] flex-1   w-full  h-full`}>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};
