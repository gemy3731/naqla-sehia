import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import type { Brand } from "../models/brand.model";

const BrandList = () => {
  const [isBrandListopen, setIsBrandListOpen] = useState<boolean>(false);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("All Brands");
  const { GET } = useAPI();
  const handleClick = () => {
    setIsBrandListOpen(!isBrandListopen);
  };
  const handleSelect = (brand: string) => {
    setSelectedBrand(brand);
    setIsBrandListOpen(false);
  };
  const fetchBrands = async () => {
    try {
      const response = await GET("brands/get");
      console.log(response);
      setBrands(response.brands || []);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };
  useEffect(() => {
    fetchBrands();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-between gap-2 px-4 py-2 border border-(--color-border) rounded-2xl"
      >
        {selectedBrand} <ChevronDown size={16} />
      </button>
      {isBrandListopen && (
        <div className="absolute top-12 left-0 w-[200px] bg-white border border-(--color-border) rounded-2xl z-10">
          <ul className="flex flex-wrap items-center p-1 gap-1">
            {brands ? (
              <>
                <li
                  onClick={() => handleSelect("All Brands")}
                  className="px-4 py-2 hover:bg-(--color-primary) hover:text-white rounded-lg border border-(--color-border)"
                >
                  All Brands
                </li>
                {brands.map((brand) => (
                  <li
                    key={brand.id}
                    onClick={() => handleSelect(brand.slug)}
                    className="px-4 py-2 hover:bg-(--color-primary) hover:text-white rounded-lg border border-(--color-border)"
                  >
                    {brand.slug}
                  </li>
                ))}
              </>
            ) : (
              <li className="px-4 py-2 hover:bg-(--color-primary) hover:text-white rounded-lg">
                No Brands Available
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrandList;
