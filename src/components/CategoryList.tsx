import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import type { Category } from "../models/category.model";
import { ChevronRight } from "lucide-react";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";

const CategoryList = () => {
  const { GET, loading } = useAPI();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const dispatch = useDispatch();
  const fetchCategories = async () => {
    try {
      const data = await GET("categories");
      console.log(data);
      (data.categories as Category[]).forEach((category: Category) => {
        getSubCategories(category.id);
      });
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const getSubCategories = async (categoryId: number) => {
    try {
      const data = await GET(`categories/id/${categoryId}`);
      console.log(data);
      setCategories((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const getProductsByCategory = async (categoryId: number) => {
    try {
      const data = await GET(`products/getbycat/${categoryId}`);
      console.log(data);
      dispatch(getProducts(data.products));
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };
  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategory(categoryId);
    getProductsByCategory(categoryId);
  };
  const handleSubCategoryClick = (categoryId: number) => {
    setSelectedSubCategory(categoryId);
    getProductsByCategory(categoryId);
  };
  useEffect(() => {
    fetchCategories();
    getProductsByCategory(100);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="space-y-1">
      {categories.map((category) => (
        <div key={category.id} className="space-y-1">
          <button
            onClick={() => handleCategoryClick(category.id)}
            className={`w-full flex justify-between items-center  hover:bg-(--color-primary) hover:text-white px-4 py-2 rounded-[10px] ${
              selectedCategory === category.id
                ? "custom-gradient font-semibold text-white"
                : ""
            }`}
          >
            {category.slug}
            {category.sub_categories?.length && <ChevronRight size={16} />}
          </button>

          {category.sub_categories && selectedCategory === category.id && (
            <div className="ml-4 space-y-1">
              {category.sub_categories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleSubCategoryClick(sub.id)}
                  className={`w-full flex justify-between items-center text-sm  hover:bg-(--color-primary) hover:text-white px-4 py-2 rounded-[10px] ${
                    selectedSubCategory === sub.id
                      ? "bg-(--color-primary) font-semibold text-white"
                      : ""
                  }`}
                >
                  {sub.slug}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      {loading && <Loader />}
    </div>
  );
};

export default CategoryList;
