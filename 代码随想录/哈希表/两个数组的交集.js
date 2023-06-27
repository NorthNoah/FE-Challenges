function intersect(nums1, nums2) {
    if (nums1.length < nums2.length) {
        const temp = nums1
        nums1 = nums2
        nums2 = temp
    }
    const setNum1 = new Set(nums1)
    const preSet = new Set()
    for (let i = nums1.length - 1; n >= 0; n--) {
        setNum1.has[nums2[i]] && preSet.add(nums2[i])
    }
    return Array.from(preSet)
}