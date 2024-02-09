"use client";
import { db } from "@/firebase";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import ProductCard from "../cards/productCard";
import Loading from "@/app/shop/loading";

type propType = {
  excludeId?: string;
  showOnlyFour?: boolean;
};
const ProductList = ({ excludeId, showOnlyFour = false }: propType) => {
  const q = query(collection(db, "Products"));
  const [value, loading, error] = useCollection(q);
  const Products = value?.docs.filter((item) => excludeId !== item.id);
  const randomNumFrom1to4 = Math.floor(Math.random() * 11) + 1;

  const SimilarProducts = Products?.splice(4);
  const productList = !showOnlyFour ? SimilarProducts : Products;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        productList?.map((doc) => (
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

export default ProductList;
