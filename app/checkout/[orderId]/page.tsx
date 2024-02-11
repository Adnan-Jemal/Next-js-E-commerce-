"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import CheckoutProduct from "@/components/cards/CheckoutProduct";
import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

type productType = {
  id: string;
  name: string;
  price: number;
  img: string;
};

const Page = ({ params }: { params: { orderId: string } }) => {
  const orderDoc = doc(db, "Orders", params.orderId);
  const [value, loading, error] = useDocument(orderDoc);
  const cartProducts: Array<productType> = value?.data()?.Products;
  const fullName = !loading
    ? value?.data()?.firstName + " " + value?.data()?.fatherName
    : "";
  const orderDate = !loading ? value?.data()?.Date.toDate() : "";

  return (
    <div className="max-w-6xl m-auto text-center ">
      <CheckCircle
        size={62}
        strokeWidth={3}
        className="mt-16 text-primary self-center mx-auto"
      />
      <h1 className="pt-16 text-4xl px-6 self-center font-bold text-primary">
        Order Received
      </h1>
      <h1 className="pt-8 text-xl px-6 self-center ">
        we have received your order and we'll contact you soon.
      </h1>
      <div className="flex flex-col items-center justify-center  h-fit mb-20 mt-10 mx-4 text-center gap-8 bg-primary-foreground  lg:p-10 p-3 rounded-xl shadow-md ">
        <h1 className="text-xl font-semibold mt-3">Order Information</h1>
        <div className="flex items-start  flex-col lg:flex-row justify-between  gap-5 w-full h-full text-center">
          {loading ? (
            <Skeleton className="h-96 w-full" />
          ) : (
            <div className="flex justify-center flex-col gap-6 w-full border-2 border-secondary rounded-xl py-5">
              <h1 className="font-semibold mb-10">Order Detail</h1>
              <div className="flex justify-between flex-col lg:flex-row items-center   lg:w-[80%] gap-2 w-full px-5 m-auto">
                <p className="text-muted-foreground">Orderer Name</p>
                <h2 className="md:text-lg">{fullName}</h2>
              </div>
              <div className="flex justify-between flex-col lg:flex-row items-center  lg:w-[80%] gap-2 w-full px-5 m-auto">
                <p className="text-muted-foreground">Order Date</p>
                <h2 className="text-lg">{orderDate.toLocaleString()}</h2>
              </div>
              <div className="flex justify-between flex-col lg:flex-row items-center  lg:w-[80%] gap-2 w-full px-5 m-auto ">
                <p className="text-muted-foreground">Phone Number</p>
                <h2 className="text-lg">{value?.data()?.phoneNumber}</h2>
              </div>
              <div className="flex justify-between flex-col lg:flex-row items-center  lg:w-[80%] gap-2 w-full px-5 m-auto ">
                <p className="text-muted-foreground">Email</p>
                <h2 className="text-lg">{value?.data()?.email}</h2>
              </div>
              <Separator className="w-[80%] gap-2 px-5 my-4 mx-auto" />
              <div className="flex justify-between flex-col lg:flex-row items-center  lg:w-[80%] w-full px-5 m-auto ">
                <p className="text-muted-foreground">Country</p>
                <h2 className="text-lg">{value?.data()?.country}</h2>
              </div>
              {value?.data()?.region && (
                <div className="flex justify-between flex-col lg:flex-row items-center gap-2  lg:w-[80%] w-full px-5 m-auto ">
                  <p className="text-muted-foreground">Region</p>
                  <h2 className="text-lg">{value?.data()?.region}</h2>
                </div>
              )}
              {value?.data()?.subCityOrZone && (
                <div className="flex justify-between flex-col lg:flex-row items-center  lg:w-[80%] gap-2 w-full px-5 m-auto ">
                  <p className="text-muted-foreground">Address</p>
                  <h2 className="text-lg">{value?.data()?.subCityOrZone}</h2>
                </div>
              )}
            </div>
          )}

          {loading ? (
            <Skeleton className="h-96 w-full" />
          ) : (
            <div className="flex  flex-col justify-between px-5 gap-3 border-2 border-secondary rounded-xl py-5">
              <h1 className="font-semibold mb-10">Ordered Products</h1>
              {!loading &&
                cartProducts.map((item: productType) => (
                  <CheckoutProduct
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    key={item.id}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
