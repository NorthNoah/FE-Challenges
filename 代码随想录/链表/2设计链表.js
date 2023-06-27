/**
 * @param {number[]} arr
 * @param {val}
 */

class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkList {
    constructor() {
        this.size = 0;
        this.tail = null;
        this.head = null;
    }
}

// 获取第index个结点
MyLinkList.getNode = function (index) {
    if (index < 0 || index >= this.size) return null;
    // 创建虚拟头结点
    let cur = new LinkNode(0, this.head)   // 第一个参数是值， 第二个参数是下一个节点的位置
    while (index > 0) {
        cur = cur.next
        index--
    }
    return cur.val
}

// 在链表的第一个元素之前添加一个值为val的节点，插入后，新节点将成为链表的第一个节点
MyLinkList.addAtHead = function (val) {
    // 虚拟头结点
    let cur = new LinkNode(0, this.head);

    // 添加的结点
    let valNode = new LinkNode(val, this.head);

    // 在链表为空的情况下，头结点也是尾结点
    if (!this.tail) {
        this.head = valNode;
    }
    this.size++
}

// 在链表的最后面插入一个节点
MyLinkList.addAtTail = function (val) {
    // 虚拟头结点
    let cur = new LinkNode(0, this.head);

    // 要添加的节点
    let valNode = new LinkNode(val, null);

    // 判断是否到最后一位节点
    while (cur.next) {
        cur = cur.next;
    }

    // 进行插入操作
    cur.next = valNode
    this.size++
}

// 在链表的第index个节点之前添加值为val的节点。如果index等于链表的长度，则该节点将附加到链表的末尾。如果index大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点
MyLinkList.addAtIndex = function (index, val) {
    if (index > this.size) {
        return null;
    }

    let cur = new LinkNode(0, this.head);

    if (index === this.size) {
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = valNode;
    }

    if (index < 0) {
        cur.next = valNode;
    }

    const node = this.getNode(index - 1);
    node.next = new LinkNode(val, node.next);
    this.size++;
}