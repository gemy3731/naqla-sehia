import type { Product } from "../models/product.model";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          img={product.imgs[0].img}
          title={product.langs[0].name}
          price={product.price}
          brand={product.brand_info.slug}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
