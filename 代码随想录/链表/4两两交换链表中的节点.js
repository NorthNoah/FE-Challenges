class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

function exChange(head) {
    let dummyNode = new LinkNode(0, head); // 头结点
    // temp = cur;
    let curNode = dummyNode;
    while (curNode && curNode.next && curNode.next.next) {
        let firstNode = curNode.next,
            secNode = curNode.next.next,
            thirdNode = curNode.next.next.next;
        curNode.next = secNode;
        secNode.next = firstNode;
        firstNode.next = thirdNode;
        curNode = firstNode;
    }
    return dummyNode.next;
}