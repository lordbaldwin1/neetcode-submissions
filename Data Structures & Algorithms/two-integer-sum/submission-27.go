func twoSum(nums []int, target int) []int {
    // intuition: target - nums[i] = num that we want to exist
    // map: num -> index
    hash := map[int]int{}

    // iterate nums, calc diff, check if diff exists,
    // if it does, return [diffIdx, curIdx],
    // else add num -> idx to map
    for i, num := range nums {
        diff := target - num
        if _, ok := hash[diff]; ok {
            return []int{hash[diff], i}
        }

        hash[num] = i
    }
    return []int{}
}
