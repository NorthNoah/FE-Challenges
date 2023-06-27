class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

// 双指针法
function remove(head, n) {
    let hummyNode = new LinkNode(0, head);  // 虚拟头结点
    let fixNode = hummyNode
    // let curNode = new LinkNode(0, null);
    for (let i = 0; i < n + 1; i++) {
        // curNode.next = hummyNode.next;
        hummyNode = hummyNode.next
    }
    let realCurNode = new LinkNode(0, head);
    // 出来之后, hummyNode则为后面
    while (curNode.next) {
        hummyNode = hummyNode.next
        realCurNode = realCurNode.next
    }
    realCurNode.next = realCurNode.next.next
    return fixNode.next
}