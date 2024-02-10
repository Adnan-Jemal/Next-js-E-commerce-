import Loading from "@/app/shop/loading";
import { db } from "@/firebase";
import { collection, query } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import ProductCard from "../cards/productCard";

type propTypes = {
  excludeId?: string;
};

const SimilarProductsList = ({ excludeId }: propTypes) => {
  const q = query(collection(db, "Products"));
  const [value, loading] = useCollection(q);
  const Products = value?.docs
    .sort(() => 0.5 - Math.random())
    .filter((item) => excludeId !== item.id)
    .slice(0, 4);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        Products?.map((doc) => (
          <ProductCard
            id={doc.id}
            img={doc.data().Image}
            name={doc.data().Name}
            price={doc.data().Price}
            key={doc.id}
          />
        ))
      )}
    </>
  );
};

export default SimilarProductsList;
