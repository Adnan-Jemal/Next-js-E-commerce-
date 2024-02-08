"use client";
import Image from "next/image";
import AddToCartBtn from "@/components/buttons/AddtoCartBtn";
import { doc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import ProductList from "@/components/sections/ProductList";
import Loading from "./loading";


const page = ({ params }: { params: { id: string } }) => {

  

  const productDoc = doc(db, "Products", params.id);
  const [value, loading, error] = useDocument(productDoc);
  error&&console.error(error)

  return (
    <>{loading?<Loading/>:
      <div className="max-w-6xl m-auto my-20 flex gap-20 flex-col">
        <div className="flex flex-col lg:flex-row justify-center items-center mx-6 gap-10">
          <Image
            alt="product Image"
            src={value?.data()?.Image}
            className="rounded-2xl shadow-md h-96  "
            height={500}
            width={500}
          />
          <div className="w-full  flex flex-col lg:justify-between text-center lg:text-start lg:gap-8 gap-5">
            <h1 className="lg:text-5xl text-3xl">{value?.data()?.Name}</h1>
            <h1 className="text-4xl font-bold ">
              <span className="text-lg text-secondary-foreground/80 font-normal">
                Price:
              </span>
              <span className="text-primary"> {value?.data()?.Price} ብር </span>
              <span className="line-through text-base text-secondary-foreground ">
                {value?.data()?.DiscountedPrice} ብር
              </span>
            </h1>
            <p className="text-sm lg:text-lg">{value?.data()?.Description}</p>
            <AddToCartBtn id={params.id} img={value?.data()?.Image} name={value?.data()?.Name} price={value?.data()?.Price} />
          </div>
        </div>
        <div>
          <h1 className="text-4xl mb-9 ml-3">Similar Products</h1>
          <div className="flex">
            <div className="flex lg:justify-start justify-center flex-wrap gap-10 ">
              <ProductList excludeId={value?.id}  />
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default page;
