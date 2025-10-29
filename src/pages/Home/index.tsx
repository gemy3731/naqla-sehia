import { useSelector } from "react-redux";
import ProductGrid from "../../components/ProductGrid";
import Layout from "../../layouts";
import type { Product } from "../../models/product.model";

export interface RootState {
   products: {
     products: Product[];
   };
 }
const Home = () => {

  const products = useSelector((state: RootState) => state.products.products);
  return (
    <Layout>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">All Products</h2>
        <p className="text-gray-500">{products.length} products found</p>
      </div>
      <ProductGrid products={products} />
    </Layout>
  );
};

export default Home;
