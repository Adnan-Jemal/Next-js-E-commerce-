import React from "react";
import devices from "@/public/devices.jpg";
import Gadgets from "@/public/Gadgets.jpg";
import Iot from "@/public/Iot.jpg";
import Image from "next/image";
const Categories = () => {
  return (
    <div className="flex items-center flex-col md:flex-row justify-evenly gap-8 my-20">
      <div className="relative w-72 h-72 rounded-2xl overflow-hidden group ">
        <Image
          alt="Personal Computing and Mobile Devices"
          src={devices}
          className="group:hover:scale-110"
        />
        <div className="absolute h-full w-full bg-black/60 top-0 right-0 left-0 flex items-center justify-center text-center  ">
          <h2 className="mx-6 font-bold text-4xl text-gray-50 font-sans">
            Personal Computing
          </h2>
        </div>
      </div>
      <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
        <Image alt="Personal Computing and Mobile Devices" src={Gadgets} />
        <div className="absolute h-full w-full bg-black/60 top-0 right-0 left-0 flex items-center justify-center text-center ">
          <h2 className="mx-6 font-bold text-4xl text-gray-50 font-sans">
            Consumer Electronics
          </h2>
        </div>
      </div>
      <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
        <Image alt="Personal Computing and Mobile Devices" src={Iot} />
        <div className="absolute h-full w-full bg-black/60 top-0 right-0 left-0 flex items-center justify-center text-center ">
          <h2 className="mx-6 font-bold text-4xl text-gray-50 font-sans">
            Internet Of Things
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;
