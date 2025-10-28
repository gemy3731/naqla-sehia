export interface Category {
    id: number;
    slug: string;
    sub_categories?: Sub_categories[];
}
interface Sub_categories{
    id: number;
    slug: string;
}