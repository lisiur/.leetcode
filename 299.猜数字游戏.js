/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const arr = new Array(10).fill(0)
  let bulls = 0
  let cows = 0
  for (let i = 0; i < secret.length; i++) {
    arr[secret[i]] += 1
  }
  for (let i =0; i < guess.length; i++) {
    arr[guess[i]] -= 1
    if (guess[i] === secret[i]) {
      bulls++
      if (arr[guess[i]] < 0) {
        cows--
      }
    } else {
      if (arr[guess[i]] >= 0) {
        cows++
      }
    }
  }
  return bulls + 'A' + cows + 'B'
};
// @lc code=end

