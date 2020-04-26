import { Category} from "../category";
import { MENS_PRODUCTS, PHONES_PRODUCTS, WOMENS_PRODUCTS, LAPTOPS_PRODUCTS } from "../../products/mock-products";

export const  CATEGORIES: Category[] = [
    {
        id: 1,
        name: 'Women',
        imgUrl: 'url(https://cdn.shopify.com/s/files/1/0235/2617/collections/RIDEORDIE20_1024x.jpg?v=1585228846)',
      },
      {
        id: 2,
        name: 'Men',
        imgUrl: 'url(https://cdn.shopify.com/s/files/1/0289/3692/files/recycled_2_1000x.png?v=1576781583)',
      },
      {
        id: 3,
        name: 'Phones',
        imgUrl: 'url(https://cdn.pixabay.com/photo/2016/09/26/00/15/apple-watch-1694985_1280.jpg)',
      },
      {
        id: 4,
        name: 'Computers',
        imgUrl: 'url(https://cdn.pixabay.com/photo/2016/11/21/16/27/apple-1846277_1280.jpg)',
      }
]