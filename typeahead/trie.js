class TrieNode {
  constructor() {
    this.keyToNodeMap = new Map(); // 'a' => Node; 'b' => Node
    this.isEndOfWord = false;
  }

  hasNode(ch) {
    return this.keyToNodeMap.has(ch);
  }

  getNode(ch) {
    return this.keyToNodeMap.get(ch);
  }

  createCharNode(ch, node) {
    return this.keyToNodeMap.set(ch, node);
  }

  setEndOfWord() {
    this.isEndOfWord = true;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.hasNode(ch)) {
        node.createCharNode(ch, new TrieNode());
      }
      node = node.getNode(ch);
    }
    node.setEndOfWord();
  }

  search(query) {
    let node = this.root;
    for (const ch of query) {
      if (!node.hasNode(ch)) return [];
      node = node.getNode(ch);
    }

    return this.recursiveSearch(node, query);
  }

  recursiveSearch(node, prefix) {
    const words = [];
    if (node.isEndOfWord) {
      words.push(prefix);
    }

    for (const [key, childNode] of node.keyToNodeMap) {
      const foundWords = this.recursiveSearch(childNode, `${prefix}${key}`);
      words.push(...foundWords);
    }

    return words;
  }
}

export default Trie;
