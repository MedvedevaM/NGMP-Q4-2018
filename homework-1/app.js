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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e03b5b9fd893e22a05290c51d2add33baaad1d0d
const importer = new Importer(dirwatcher);

setTimeout(() => fs.move('./test_data/fruits.csv', './data/fruits.csv'), 3000);
setTimeout(() => fs.move('./test_data/product.csv', './data/product.csv'), 6000);
setTimeout(() => fs.move('./test_data/user.csv', './data/user.csv'), 9000);

<<<<<<< HEAD
=======

=======
const importer = new Importer(dirwatcher);
>>>>>>> a4e006dd23a0a32f3751cb944af1b09c501f80e8
>>>>>>> e03b5b9fd893e22a05290c51d2add33baaad1d0d
