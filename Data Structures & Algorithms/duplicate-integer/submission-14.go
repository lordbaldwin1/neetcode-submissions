func hasDuplicate(nums []int) bool {
    presence := map[int]bool{}

    for _, num := range nums {
        _, ok := presence[num]
        if !ok {
            presence[num] = true
        } else {
            return true
        }
    }
    return false
}
