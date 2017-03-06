/**
 * @fileoverview 规则测试文件，列举项目中常见的错误
 * @authors liyifei
 * @date 2017/02
 */

/* 强制错误类 */
// 禁止出现未使用过的变量（不检查参数）- no-unused-vars
// /qiandao-platform/app/js/mods/mobile/qiandao.js
var foo = 1;
var timer = setInterval(function() {
    // test
}, 100);

// 禁止在嵌套的块中出现变量声明或 function 声明 - no-inner-declarations
// /qiandao-platform/app/js/mods/mobile/newList.js
if (li.length > 3) {
    var li0 = li.eq(0).clone();
    var li1 = li.eq(1).clone();
    var li2 = li.eq(2).clone();
}

// 禁止在 else 前有 return - no-else-return
// /m_usercenter/domestic/personal-info/js/mokjs/mods/accountSet/personInfo.js
function formatDate(d) {
    if (Number(d) < 10) {
        return "0" + d
    } else {
        return d
    }
}

// 禁止使用前导和末尾小数点 - no-floating-decimal
var foo = .5;
foo = -.5;

// 禁止在返回语句中赋值 - no-return-assign
function doSomething() {
    return foo = bar + 2;
}

// 禁用隐式的eval() - no-implied-eval
setTimeout("alert('Hi!');", 100);
setInterval("alert('Hi!');", 100);

// 语句大括号规则，所有语句不能省略大括号 - curly
if (foo) foo++;

// 强制在语句末尾使用分号（主观）- semi
// /qiandao-platform/app/js/mods/mobile/newList.js
NewList.prototype.init = function(data) {}

// 禁止 if 语句作为唯一语句出现在 else 语句块中（主观）- no-lonely-if（重逻辑？）
// /pc_usercenter_v2/app/js/comp/util/handle-page.js
if (n <= 11) {
    // ...
} else {
    if (cur - 5 <= 0) {
        // ...
    } else if (cur + 5 >= n) {
        // ...
    } else {
        // ...
    }
}

// 禁止使用拖尾逗号（主观）- comma-dangle
// /qiandao-platform/app/js/mods/mobile/qiandao.js
var res = [{
    username: '杨志航1',
    prize: '手机1S',
}]

// 限制函数定义中最大参数个数，最多3个，超出要用 object 实现（主观）- max-params（个数？）
// /m_usercenter/domestic/personal-info/js/mokjs/mods/daping/safe.js
function keyEvent(dir, rows, cols, selector) {
    // ...
}

/* 警告类 */
// 禁止多次声明同一变量 - no-redeclare
var foo = 1;
var foo = 2;

// 禁止不必要的分号 - no-extra-semi
// /qiandao-platform/app/js/mods/mobile/recommendList
function RecommendListObj() {
    // ...
};

// var 语句应该在块级作用域范围之内 - block-scoped-var
// /m_usercenter/domestic/personal-info/js/mokjs/mods/daping/pintu/index.js
if ($rule_layer.css("display") == "block") {
    var scrollTop = $("#rule_div").scrollTop();
    var rule_height = $("#rule_div").height();
    var rule_content = $("#rule_content").height();
}

// 禁止变量定义前使用 - no-use-before-define
alert(a);
var a = 10;

f();

function f() {
    // ...
}

// 禁止对函数参数再赋值（重要）- no-param-reassign
$.ajax({
    success: function(data) {
        var data = data.info;
    }
});
