// add.js

function add(a, b) {
    return a + b;
}

module.exports = add;

// 测试代码
console.log(add(2, 3)); // 应该输出 5
console.log(add(-1, 5)); // 应该输出 4
console.log(add(0, 0)); // 应该输出 0
