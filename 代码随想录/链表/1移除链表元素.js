/**
 * @param {ListNode} head
 * @param {number} val
 * @returns {ListNode}
 */

class ListNode {
    val;
    next = null;
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

function deleteNode(head, val) {
    const ret = new ListNode(head);
    let cur = ret;
    console.log(cur)
    while (cur.next) {
        console.log(cur.next)
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ret.next;
}
