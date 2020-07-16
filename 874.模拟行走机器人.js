/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const obsXMap = new Map()
    const obsYMap = new Map()
    for (let i = 0; i < obstacles.length; i++) {
        const [x, y] = obstacles[i];
        let arrX = obsXMap.get(x) || new Set()
        let arrY = obsYMap.get(y) || new Set()
    } 
};
// @lc code=end

