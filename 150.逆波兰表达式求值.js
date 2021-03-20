/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let ret = []
    for (let item of tokens) {
        if ("+-*/".includes(item)) {
            let b = ret.pop()
            let a = ret.pop()
            switch (item) {
                case '+':
                    ret.push(a + b)
                    break
                case '-':
                    ret.push(a - b)
                    break
                case '*':
                    ret.push(a * b)
                    break
                case '/':
                    ret.push(chu(a, b))
                    break
            }
        } else {
            ret.push(+item)
        }
    }
    return ret[0]
};
function chu(a, b) {
    let r = a / b
    if (r >= 0) return Math.floor(r)
    else return Math.ceil(r)
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = evalRPN;
// @after-stub-for-debug-end