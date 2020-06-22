/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function(pattern, value) {
    if (!pattern.length) {
        return value.length === 0
    }
    if (!value.length) {
        return new Set(Array.from(pattern)).size <= 1
    }
    const pMap = new Map()
    const vMap = new Map()
    function match(pi, vi) {
        if (pi >= pattern.length && vi >= value.length) {
            return true
        }
        if (pi >= pattern.length) {
            return false
        }

        let hasToken = pMap.has(pattern[pi])
        if (hasToken) { // 已经存在该pattern的映射
            const token = pMap.get(pattern[pi])
            if (value.slice(vi, vi + token.length).startsWith(token)) { // value 亦符合 pattern 的映射
                return match(pi + 1, vi + token.length)
            } else { // value 不符合映射，此时应回溯
                return false
            }
        } else {
            let token = ''
            for (let i = vi; i <= value.length; i++) {
                if (!vMap.has(token)) {
                    pMap.set(pattern[pi], token)
                    vMap.set(token, pattern[pi])
                    if (!match(pi + 1, i)) {
                        pMap.delete(pattern[pi])
                        vMap.delete(token)
                    } else {
                        return true
                    }
                }
                if (i < value.length) {
                    token = token + value[i]
                }
            }
            return false
        }
    }
    return match(0, 0)
};

console.log(patternMatching("aaa",""))