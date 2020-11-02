const {add, mul} = require('./js/mathUtil.js');
import * as info from './js/info';

console.log(add(20, 30));
console.log(mul(20, 30));
console.log(info.name);
console.log(info.age);
console.log(info.height);

// 3.依赖css文件
require('./css/normal.css');