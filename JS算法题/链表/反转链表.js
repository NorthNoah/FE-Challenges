var reverseList = function(head) {
  if (!head) return null
  let pre = null
  let cur = head
  let temp = null
  while(cur !== null) {
    temp = cur.next
    cur.next = pre
    
    // 移动指针
    pre = cur
    cur = temp
  }
  return pre
};