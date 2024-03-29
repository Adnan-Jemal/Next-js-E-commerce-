
import { db } from "@/firebase";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import ProductCard from "../cards/productCard";
import Loading from "@/app/shop/loading";

const ProductList = () => {
  const q = query(collection(db, "Products"));
  const [value, loading, error] = useCollection(q);
  const Products = value?.docs


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

export default ProductList;
