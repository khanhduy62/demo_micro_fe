import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

productsMount(document.getElementById("my-products"))
cartMount(document.getElementById("my-cart"))
console.log('Container! ');

