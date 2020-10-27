var name = '小明';
var age = 18;
var flag = true;
var address = '珠海市';

function  sum(num1, num2) {
    return num1 + num2;
}

if(flag) {
    console.log(sum(20, 30));
}

// 导出方式一
export {
    flag, sum
}

// 导出方式二
export var num = 1000;
export var height = 1.88;
export class Person {
    run() {
        console.log("run()");
    }

}

export default address;
