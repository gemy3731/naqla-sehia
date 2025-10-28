import {  Search, ShoppingBag } from "lucide-react";
import BrandList from "./BrandList";

const Navbar = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--color-border) backdrop-blur ">
      <div className="container flex h-16 items-center justify-between gap-6 px-4 w-full">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg custom-gradient text-white">
            <ShoppingBag className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-black">ivita Store</h1>
        </div>

        <div className="flex flex-1 items-center gap-4 md:gap-10">
          <div className="relative flex-1 max-w-xl border border-(--color-border) rounded-2xl px-3 py-2 focus-within:ring-2 focus-within:ring-(--color-primary)">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products..."
              className="pl-8 w-full focus-within:ring-0 border-0 outline-none"
              // onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <BrandList />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
