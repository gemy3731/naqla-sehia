import CategoryList from "./CategoryList";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-(--color-border)">
      <div className="h-[calc(100vh-4rem)] relative overflow-hidden rounded-md">
        <div className="h-full w-full overflow-auto scrollbar-thin">
          <div className="p-3">
            <h2 className="mb-4 text-lg font-semibold">Categories</h2>
            <CategoryList />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
