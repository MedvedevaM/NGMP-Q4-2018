import path from 'path';
import config from './config/config.json';
import { User, Product } from './models';
import { DirWatcher, Importer } from './modules';
import fs from 'fs-extra';
console.log(config.name);

let user = new User('User module');
user.logModuleName();

let product = new Product('Product module');
product.logModuleName();

const dirwatcher = new DirWatcher();
dirwatcher.watch('./data', 1000);
const importer = new Importer(dirwatcher);

setTimeout(() => fs.move('./test_data/fruits.csv', './data/fruits.csv'), 3000);
setTimeout(() => fs.move('./test_data/product.csv', './data/product.csv'), 6000);
setTimeout(() => fs.move('./test_data/user.csv', './data/user.csv'), 9000);
