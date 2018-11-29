import config from './config/config.json';
import { User, Product } from './models';
console.log(config.name);

let user = new User();
user.logModuleName();

let product = new Product();
product.logModuleName();