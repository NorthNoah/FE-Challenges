function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createListByArr(arr) {
  if (!arr.length) return;
  const head = new ListNode(arr[0]);
  let temp = head;
  for(let i = 1; i<arr.length; i++){
    const curNode = new ListNode(arr[i]);
    temp.next = curNode;
    temp = curNode
  }
  return head;
}
 /** 
 * @param list ListNode
 */
 function revertList(list){
  // 哨兵节点？
  let preHead = null
  preHead.next = head
  let curNode = head
  head = null
  let nextNode = curNode.next
  // head.next = head

  // head.next.next = head.next
 }

