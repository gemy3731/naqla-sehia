import { Search } from "lucide-react";
import useAPI from "../hooks/useAPI";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { getProducts } from "../store/productSlice";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const {loading,GET} = useAPI();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);


  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedQuery.trim()) return;
      try {
        const data = await GET(`products/getbyname?name=${debouncedQuery}`);
        dispatch(getProducts(data.products));
      } catch (error) {
        console.error("Error searching products:", error);
      }
    };
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);
  return (
    <div className="relative flex-1 max-w-xl border border-(--color-border) rounded-2xl px-3 py-2 focus-within:ring-2 focus-within:ring-(--color-primary)">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        placeholder="Search products..."
        className="pl-8 w-full focus-within:ring-0 border-0 outline-none"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {loading&&<Loader />}
    </div>
  );
};

export default SearchInput;
