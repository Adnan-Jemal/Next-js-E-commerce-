import NavBar from "@/components/NavBar";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <NavBar />
      <div>page for the product with id {params.id}</div>
    </>
  );
};

export default page;
