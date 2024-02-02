import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import computer from "@/public/computer.jpeg";
import AddToCartBtn from "@/components/AddtoCartBtn";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <NavBar />
      <div className="max-w-6xl m-auto my-20">
        <div className="flex flex-col lg:flex-row justify-center items-center mx-6 gap-10">
          <Image
            alt="product Image"
            src={computer}
            className="rounded-2xl shadow-md"
            height={500}
            width={500}
          />
          <div className="w-full  flex flex-col lg:justify-between text-center lg:text-start lg:gap-8 gap-5">
            <h1 className="lg:text-5xl text-3xl">
              Appel Mack book Computer laptop
            </h1>
            <h1 className="text-4xl font-bold ">
              <span className="text-lg text-secondary-foreground/80 font-normal">
                Price:
              </span>
              <span className="text-primary"> 900 ብር </span>
              <span className="line-through text-base text-secondary-foreground ">
                300 ብር
              </span>
            </h1>
            <p className="text-sm lg:text-lg">
              Experience seamless performance and captivating visuals with the
              Apple Mack Book Computer Laptop. Crafted with sleek, minimalist
              design and packed with cutting-edge technology, this laptop
              empowers you to tackle any task with effortless grace.
            </p>
            <AddToCartBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
