import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Nav from "../Nav";

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div className="min-h-full">
      <div className="pb-32 bg-gray-800">
        <Nav />
        <Header />
      </div>
      <main className="-mt-32">
        <div className="px-4 pt-4 pb-12 mx-auto bg-white shadow-md rounded-xl max-w-7xl sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
