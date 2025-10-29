export interface Product {
    id: number;
    price: number;
    stock: number;
    brand_info: BrandInfo;
    imgs:Image[];
    langs:Lang[];
    categories: string[];
}
interface BrandInfo {
    slug: string;
    id: number;
}
interface Image {
    id: number;
    product_id: number;
    img: string;
}
interface Lang {
    id: number;
    product_id: number;
    name: string;
    description: string;
    short: string;
}
