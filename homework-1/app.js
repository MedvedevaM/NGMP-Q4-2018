import config from './config/config.json';
import { User, Product } from './models';
console.log(config.name);

let user = new User('User module');
user.logModuleName();

let product = new Product('Product module');
product.logModuleName();