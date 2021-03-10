/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    if (s.startsWith('-')) {
        s = '0' + s
    }
    let stack = []
    let expr = []
    let i = 0
    let token = ''
    while(i < s.length) {
        if (s[i] === ' ') {
            i++
        } else if (s[i] === '(') {
            stack.push(s[i])
            i++
        } else if (s[i] === ')') {
            while (stack[stack.length - 1] !== '(') {
                expr.push(stack.pop())
            }
            stack.pop()
            i++
        } else if ('+-'.indexOf(s[i]) !== -1) {
            if (stack.length > 0) {
                if (stack[stack.length - 1] !== '(') {
                    expr.push(stack.pop())
                }
            }
            stack.push(s[i])
            i++
        } else {
            token = s[i]
            while (i + 1 < s.length && /\d/.test(s[i + 1])) {
                token += s[i+1]
                i++
            }
            expr.push(+token)
            i++
        }
    }
    while (stack.length > 0) {
        let op = stack.pop()
        if (op !== '(' && op !== ')') {
            expr.push(op)
        }
    }
    stack = []
    expr.forEach(it => {
        if ('+' === it) {
            stack.push(stack.pop() + stack.pop())
        } else if ('-' === it) {
            stack.push(-stack.pop() + stack.pop())
        } else {
            stack.push(it)
        }
    })
    return stack[0]
};
// @lc code=end
