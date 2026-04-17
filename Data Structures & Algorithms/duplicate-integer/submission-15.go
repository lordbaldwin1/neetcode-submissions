func hasDuplicate(nums []int) bool {
    presence := map[int]bool{}

    for _, num := range nums {
        if _, ok := presence[num]; ok {
            return true
        }
        presence[num] = true
    }
    return false
}
