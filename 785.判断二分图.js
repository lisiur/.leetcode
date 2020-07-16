/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const visited = []
    const queue = []
    for (let i = 0; i < graph.length; ++i) {
        if (visited[i]) continue
        queue.push(i)
        visited[i] = 1
        while (queue.length) {
            const x = queue.shift()
            for (let j = 0; j < graph[x].length; ++j) {
                if (!visited[graph[x][j]]) {
                    visited[graph[x][j]] = -visited[x]
                    queue.push(graph[x][j])
                } else {
                    if (visited[graph[x][j]] === visited[x]) {
                        return false
                    }
                }
            }
        }
    }
    return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isBipartite;
// @after-stub-for-debug-end