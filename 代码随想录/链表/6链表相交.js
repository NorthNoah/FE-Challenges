class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

function each(headA, headB) {
    let dummyANode = new LinkNode(0, headA)
    let dummyBNode = new LinkNode(0, headB)
    while (dummyANode !== dummyBNode) {
        if (dummyANode !== null) {
            dummyANode = dummyANode.next;
        } else {
            dummyANode = new LinkNode(0, headB);
        }
        if (dummyBNode !== null) {
            dummyBNode = dummyBNode.next;
        } else {
            dummyBNode = new LinkNode(0, headB);
        }
    }
    return A
}