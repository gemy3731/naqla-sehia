import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import Loader from "./Loader";
import Modal from "./Modal";
import type { Product } from "../models/product.model";

interface ProductDetailsProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number | null;
}
const ProductDetails = ({ setOpenModal, id }: ProductDetailsProps) => {
  const { loading, GET } = useAPI();
  const [product, setProduct] = useState<Product | null>(null);
  const getProductDetails = async () => {
    try {
      if (id === null) return;
      const response = await GET(`products/id/${id}`);
      setProduct(response);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
  useEffect(() => {
    getProductDetails();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <Modal setIsOpen={setOpenModal}>
      <div className="p-5">
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="font-semibold tracking-tight text-2xl">
            {product?.langs[0].name}
          </h2>
          <span className="text-sm text-white bg-(--color-primary) rounded-full w-fit px-2.5 py-0.5 font-semibold">
            {product?.brand_info.slug}
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product?.imgs[0].img}
              alt={product?.langs[0].name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold text-(--color-secondary)">
              ${product?.price}
            </p>
            <div>
              <h3 className="mb-2 font-semibold">Description</h3>
              <p className="text-sm text-gray-500">
                <div dangerouslySetInnerHTML={{ __html: product?.langs[0].short || "" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </Modal>
  );
};

export default ProductDetails;
