import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
    children: React.ReactNode;
}

const Page = ({ children }: Props) => {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 justify-between h-screen flex-col flex">
            <Header />
            <main className=" flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Page;    