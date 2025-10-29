interface ProductCardProps {
    img: string;
    title: string;
    price: number;
    brand: string;
}
const ProductCard = ({img,title,price,brand}:ProductCardProps) => {
  return (
    <div className="rounded-lg border border-(--color-border) shadow-sm group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-square overflow-hidden">
            <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="p-4 flex flex-col gap-2">
            <h3 className="font-semibold line-clamp-2 text-sm">{title}</h3>
            <span className="text-sm text-white bg-(--color-primary) rounded-full w-fit px-2.5 py-0.5 font-semibold">{brand}</span>
        </div>
        <p className="p-4 pt-0 text-xl font-bold text-(--color-secondary) ">${price}</p>
    </div>
  );
};

export default ProductCard;
