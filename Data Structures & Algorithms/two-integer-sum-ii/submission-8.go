func twoSum(nums []int, target int) []int {
    l := 0
    r := len(nums) - 1

    for l < r {
        sum := nums[l] + nums[r]
        if sum == target {
            return []int{l+1, r+1}
        } else if sum < target {
            l++
        } else {
            r--
        }
    }
    return []int{}
}
