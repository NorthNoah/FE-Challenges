class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

function circleNode(head) {
    if (!head || !head.next) return null;
    let slow = head.next, fast = head.next.next;
    while (fast && fast.next && fast !== slow) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (!fast || !fast.next) return null;
    slow = head;
    while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}