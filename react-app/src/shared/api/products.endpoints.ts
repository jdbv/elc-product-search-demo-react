import axios from "axios";
import { Product } from "../apiModels/products.model";

const productsApi = axios.create({
  baseURL: 'http://localhost:3400/products'
});

export default {
  getAllProducts: async (): Promise<Array<Product>>  => {
    const products = await productsApi.get('').then(productsResponse => productsResponse.data);
    return products;
  },
  // getProductById: async (id: string) => {
  //   const products = await productsApi.get(`/${id}`).then(product => product);
  //   console.log('products loaded: ', products);
  //   return products;
  // },
  getFilteredProductsByName: async (name: string): Promise<Array<Product>> => {
    const products = await productsApi.get('').then(productsResponse => productsResponse.data as Array<Product>);
    const filterProducts = products.filter(product => product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));

    return filterProducts;
  }
};