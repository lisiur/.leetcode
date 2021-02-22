/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    function checkInclusionFrom(map, index, cnt) {
        let n = map.get(s2[index])
        if (!n) {
            return false
        } else {
            map.set(s2[index], n - 1)
            cnt--
            if (cnt === 0) {
                return true
            } else {
                return checkInclusionFrom(map, index + 1, cnt)
            }
        }
    }
    for (let i = 0; i <= s2.length - s1.length; i++) {
        if (checkInclusionFrom(consMap(s1), i, s1.length)) {
            return true
        }
    }
    return false
};

function consMap(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    return map
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map()
    // 记录无效字符累计个数
    let totalCnt = 0
    let activeCnt = 0
    let nagetiveCnt = 0
    for (let i = 0; i < s1.length; i++) {
        if (map.has(s1[i])) {
            map.set(s1[i], map.get(s1[i]) + 1)
        } else {
            activeCnt++
            map.set(s1[i], 1)
        }
    }
    for (let i = 0; i< s1.length; i++) {
        if (!map.has(s2[i])) {
            totalCnt++
        } else {
            map.set(s2[i], map.get(s2[i]) - 1)
            if (map.get(s2[i]) === 0) {
                activeCnt--
            } else if (map.get(s2[i]) === -1) {
                nagetiveCnt++
            }
        }
    }
    if (totalCnt === 0 && activeCnt === 0 && nagetiveCnt === 0) return true

    let p = s1.length
    while (p < s2.length) {
        let r = s2[p]
        let rv = map.get(r)
        if (!map.has(r)) {
            totalCnt++
        } else {
            map.set(r, rv - 1)
            if (rv === 1) {
                activeCnt--
            } else if (rv === 0) {
                nagetiveCnt++
            }
        }

        let l = s2[p - s1.length]
        let lv = map.get(l)
        if (!map.has(l)) {
            totalCnt--
        } else {
            map.set(l, lv + 1)
            if (lv === 0) {
                activeCnt++
            } else if (lv === -1) {
                nagetiveCnt--
            }
        }
        if (totalCnt === 0 && activeCnt === 0 && nagetiveCnt === 0) return true
        p++
    }

    return false
}


// @lc code=end


// @after-stub-for-debug-begin
module.exports = checkInclusion;
// @after-stub-for-debug-end