function removeString(nums, val) {
    let speed = 0;
    let man = 0;
    for (speed; speed < nums.length; speed++) {
        if (nums[speed] !== val) {
            nums[man] = nums[speed];
            man++;
        }
    }
    nums.length = man;
    return man;
}