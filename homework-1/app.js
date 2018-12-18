import config from './config/config.json';
import { User, Product } from './models';
import { DirWatcher, Importer } from './modules';
console.log(config.name);

let user = new User('User module');
user.logModuleName();

let product = new Product('Product module');
product.logModuleName();

const dirwatcher = new DirWatcher();
dirwatcher.watch('./data', 1000);
const importer = new Importer(dirwatcher);