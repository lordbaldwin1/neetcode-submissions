func threeSum(nums []int) [][]int {
    sort.Ints(nums)

    var res [][]int
    for i, num := range nums {
        if num > 0 { break }
        if i > 0 && num == nums[i-1] { continue }

        l := i + 1
        r := len(nums) - 1
        for l < r {
            sum := nums[l] + nums[r] + num
            if sum == 0 {
                res = append(res, []int{nums[l], nums[r], num})
                l++
                for l < r && nums[l] == nums[l - 1] {
                    l++
                }
            } else if sum < 0 {
                l++
            } else {
                r--
            }
        }
    }
    return res
}
