import {  ShoppingBag } from "lucide-react";
import BrandList from "./BrandList";
import SearchInput from "./SearchInput";

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
          <SearchInput />
          <BrandList />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
