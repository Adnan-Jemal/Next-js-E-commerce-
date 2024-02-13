"use client";
import OrderCard from "@/components/cards/OrderCard";
import { productType } from "@/components/cards/productCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import Link from "next/link";

import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";

const OrderPage = ({ params }: { params: { UID: string } }) => {
  const q = query(collection(db, "Orders"), where("UID", "==", params.UID));
  const [values, loading, error] = useCollection(q);
  const orders = values?.docs || [];
  const noOrders = !loading && orders.length == 0;

  return (
    <div className="max-w-6xl   mx-auto ">
      <h1 className="py-16 text-4xl px-6 self-center ">Your Orders</h1>
      <div
        className={` ${
          !noOrders && "hidden"
        } flex flex-col items-center justify-center  h-full my-10 mx-6  text-center gap-8 bg-primary-foreground md:p-20 p-10 rounded-xl shadow-sm `}
      >
        <h1 className="lg:text-3xl text-xl">
          You have not ordered any products yet. Please order some products, and
          your orders will be displayed here.
        </h1>
        <Link href={"/shop"}>
          <Button className="text-white lg:text-lg text-base" size={"lg"}>
            Continue Shopping
          </Button>
        </Link>
      </div>
      <div className={`${noOrders && "hidden"}`}>
        <div className="w-[85%] m-auto grid md:grid-cols-7 grid-cols-4 px-5 py-4 items-center justify-center text-center gap-4">
          <h2 className="col-span-1 font-semibold ">Date</h2>
          <h2 className="col-span-2 hidden md:block font-semibold">Orderer</h2>
          <h2 className="self-center font-semibold">Status</h2>
          <h2 className="hidden md:block font-semibold">Items</h2>
          <h2 className="font-semibold self-start text-start col-span-2 pl-3 md:pl-4">
            Total &#40;ብር&#41;
          </h2>
        </div>
        <div className="md:w-[85%] w-[95%] h-auto shadow-lg dark:border-primary-foreground border-gray-50 dark:border-4 border-2 rounded-lg md:px-5 px-2 py-10 mx-auto  mb-44 flex flex-col items-center justify-center gap-4">
          {!loading ? (
            orders.map((order) => {
              let total = 0;
              order
                .data()
                .Products.map(
                  (product: productType) => (total += product.price)
                );

              return (
                <OrderCard
                  key={order.id}
                  date={order.data().Date}
                  fatherName={order.data().fatherName}
                  firstName={order.data().firstName}
                  items={order.data().Products.length}
                  total={total}
                  orderId={order.id}
                />
              );
            })
          ) : (
            <>
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
