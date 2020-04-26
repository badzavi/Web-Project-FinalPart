import { Category} from "./category";
import { MENS_PRODUCTS, PHONES_PRODUCTS, WOMENS_PRODUCTS, LAPTOPS_PRODUCTS } from "../products/mock-products";

export const  CATEGORIES: Category[] = [
    {
        id: 1,
        name: 'Women',
        imgUrl: 'url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)',
      },
      {
        id: 2,
        name: 'Men',
        imgUrl: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80)',
      },
      {
        id: 3,
        name: 'Phones',
        imgUrl: 'url(https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)',
      },
      {
        id: 4,
        name: 'Computers',
        imgUrl: 'url(https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)',
      }
]