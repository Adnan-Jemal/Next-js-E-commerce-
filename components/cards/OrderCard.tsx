import React from "react";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Timestamp } from "firebase/firestore";
import { Span } from "next/dist/trace";

import Link from "next/link";

type propTypes = {
  items: number;
  firstName: string;
  fatherName: string;
  date: Timestamp;
  total: number;
  orderId: string;
};

const OrderCard = ({
  items,
  firstName,
  fatherName,
  date,
  total,
  orderId,
}: propTypes) => {
  return (
    <div className="bg-secondary/50  w-full h-full  grid md:grid-cols-7 grid-cols-4 items-center justify-center text-center py-4 rounded-xl px-1 m-auto gap-2">
      <h2 className="col-span-1 ">{format(date.toDate(), "MMM dd, yyyy")}</h2>
      <h2 className="col-span-2 hidden md:block">
        {firstName + " " + fatherName}
      </h2>
      <div className="bg-primary/30 rounded-md text-gray-700 dark:text-gray-300 border-2 border-primary text-sm mx-1 flex items-center justify-center">
        pending
      </div>
      <h2 className="hidden md:block">{items}</h2>
      <h2>{total.toFixed(1)}</h2>
      <div className="md:px-2 px-0 ">
        <Link href={`/orders/${orderId}`}>
          <Button size={"sm"} className="mx-1 text-white">
            View
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;
