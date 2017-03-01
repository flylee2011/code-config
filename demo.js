/**
 * @fileoverview 规则测试文件
 * @authors liyifei
 * @date 2017/02
 */

// 禁止出现未使用过的变量（不检查参数）
// good
var foo = 1;
function doSomething() {
    return foo;
}
doSomething();
// bad
// var foo = 1;
// function doSomething() {}

// 禁止在嵌套的块中出现变量声明或 function 声明
