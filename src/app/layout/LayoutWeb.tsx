import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";

const LayoutWeb = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWeb;
