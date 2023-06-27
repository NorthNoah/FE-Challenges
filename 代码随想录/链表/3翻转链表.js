class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

MyLinkList.reverse = function (head) {
    let cur = head;
    let pre = LinkNode(0, null); // 空节点
    while (cur) {
        let temp = cur.next; // 保存一下节点
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre
}