import * as React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className="flex justify-center text-black dark:text-white bg-white dark:bg-black mt-2 mb-4">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;