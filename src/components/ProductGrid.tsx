import { useState } from "react";
import type { Product } from "../models/product.model";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const handleProductClick = (id: number) => {
    setSelectedProductId(id);
    setOpenModal(true);
  };
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product.id)} >
          <ProductCard
            img={product.imgs[0].img}
            title={product.langs[0].name}
            price={product.price}
            brand={product.brand_info.slug}
          />
        </div>
      ))}
      {openModal && <ProductDetails setOpenModal={setOpenModal} id={selectedProductId} />}
    </div>
  );
};

export default ProductGrid;
