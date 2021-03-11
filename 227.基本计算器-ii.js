/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = []
    let expression = []
    for (let i =  0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue
        } else if (s[i] === '(') {
            stack.push(s[i])
        } else if (s[i] === ')') {
            while (stack[stack.length - 1] !== '(') {
                expression.push(stack.pop())
            }
            stack.pop()
        } else if ('+-*/'.includes(s[i])) {
            while (stack.length > 0 && priority(s[i]) <= priority(stack[stack.length - 1])) {
                expression.push(stack.pop())
            }
            stack.push(s[i])
        } else {
            let num = s[i]
            while (i + 1 < s.length && !' +-*/()'.includes(s[i+1])) {
                num += s[i+1]
                i++
            }
            expression.push(+num)

        }
    }
    while (stack.length > 0) {
        let op = stack.pop()
        if (!'()'.includes(op)) {
            expression.push(op)
        }
    }
    stack = []
    expression.forEach(it => {
        if ('+' === it) {
            let [b, a] = [stack.pop(), stack.pop()]
            stack.push(a + b)
        } else if ('-' === it) {
            let [b, a] = [stack.pop(), stack.pop()]
            stack.push(a - b)
        } else if ('*' === it) {
            let [b, a] = [stack.pop(), stack.pop()]
            stack.push(a * b)
        } else if ('/' === it) {
            let [b, a] = [stack.pop(), stack.pop()]
            stack.push(Math.floor(a / b))
        } else {
            stack.push(it)
        }
    })
    return stack[0]
};

function priority(c) {
    if (c === '(') return 3
    if (c === ')') return 3
    if (c === '*') return 2
    if (c === '/') return 2
    if (c === '+') return 1
    if (c === '-') return 1
}
// @lc code=end

console.log(calculate("1*2-3/4+5*6-7*8+9/10"))
