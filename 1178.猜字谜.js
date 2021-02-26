/*
 * @lc app=leetcode.cn id=1178 lang=javascript
 *
 * [1178] 猜字谜
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const wordsState = new Map()
    words.forEach(word => {
        let key = getBit(word)
        if (wordsState.has(key)) {
            wordsState.set(key, wordsState.get(key) + 1)
        } else {
            wordsState.set(key, 1)
        }
    })

    const rst = new Array(puzzles.length).fill(0)
    puzzles.forEach((puzzle, i) => {
        const set = new Set()
        const subsets = subset(puzzle.slice(1))
        subsets.forEach(sub => {
            set.add(getBit(puzzle[0]+sub))
        })
        for (let sub of set) {
            rst[i] += wordsState.get(sub) || 0
        }
    })
    return rst
};

/**
 * 
 * @param {string} str 
 */
function subset(str) {
    let ret = []
    function func(i, tmp) {
        if (i === str.length) {
            ret.push(tmp)
            return
        }
        func(i+1, tmp)
        func(i+1, [...tmp, str[i]])
    }
    func(0, [])
    return ret
}

/**
 * 
 * @param {string} str 
 */
function getBit(str) {
    let array = new Array(26).fill(0)
    for (let c of str) {
        array[c.charCodeAt(0) - 'a'.charCodeAt(0)] = 1
    }
    return array.join('')
}
// @lc code=end

