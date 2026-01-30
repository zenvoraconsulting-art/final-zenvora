import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "../common/FloatingCTA";
import CursorFollower from "../common/CursorFollower";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorFollower />
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
