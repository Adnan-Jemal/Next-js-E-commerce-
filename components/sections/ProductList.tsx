"use client";
import { db } from "@/firebase";
import { getFirestore, collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import ProductCard from "../cards/productCard";
import Loading from "@/app/shop/loading";

type propType={
  excludeId?:string,
}
const ProductList = ({excludeId}:propType) => {
  const q = query(collection(db, "Products"));
  const [value, loading, error] = useCollection(q);
  const similarProducts= value?.docs.filter((item)=>excludeId!==item.id)

  return (
    <> 
        
      {loading?<Loading/>:similarProducts?.map((doc) => (
        <ProductCard
          id={doc.id}
          img={doc.data().Image}
          name={doc.data().Name}
          price={doc.data().Price}
          key={doc.id}
        />
      ))}
    </>
  );
};

export default ProductList;
