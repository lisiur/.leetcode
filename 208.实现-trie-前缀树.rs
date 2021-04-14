/*
 * @lc app=leetcode.cn id=208 lang=rust
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
use std::collections::HashMap;

#[derive(Default)]
struct Trie {
    next: Option<HashMap<char, Trie>>,
    done: bool,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Trie {

    /** Initialize your data structure here. */
    fn new() -> Self {
        Trie::default()
    }

    /** Inserts a word into the trie. */
    fn insert(&mut self, word: String) {
        let mut node = self;
        for char in word.chars() {
            let hashmap = node.next.get_or_insert(HashMap::new());
            let child_node = hashmap.entry(char).or_insert(Trie::new());
            node = child_node;
        }
        node.done = true;
    }

    fn get_node(&self, word: &str) -> Option<&Trie> {
        let mut node = self;
        for char in word.chars() {
            match node.next.as_ref().map_or(None, |hashmap| {
                hashmap.get(&char)
            }) {
                Some(trie) => {
                    node = trie
                }
                None => return None
            }
        }
        return Some(node);
    }

    /** Returns if the word is in the trie. */
    fn search(&self, word: String) -> bool {
        self.get_node(&word).map_or(false, |node| node.done)
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    fn starts_with(&self, prefix: String) -> bool {
        self.get_node(&prefix).is_some()
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * let obj = Trie::new();
 * obj.insert(word);
 * let ret_2: bool = obj.search(word);
 * let ret_3: bool = obj.starts_with(prefix);
 */
// fn main() {
//     let mut obj = Trie::new();
//     obj.insert("Hello".to_string());
//     let ret_2 = obj.search("Hello".to_string());
//     let ret_3 = obj.starts_with("Hel".to_string());
//     let ret_4 = obj.starts_with("Helo".to_string());
//     dbg!(ret_2);
//     dbg!(ret_3);
//     dbg!(ret_4);
// }

