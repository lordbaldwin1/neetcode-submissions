func topKFrequent(nums []int, k int) []int {
    // bucket sort
    // 
    //
    //
    // array of arrays
    // count -> nums
    // loop in reverse order, add k elements to result

    // start with map: num -> count
    // turn that into array of arrays
    // reverse loop over that
    count := make(map[int]int)
    freq := make([][]int, len(nums)+1)

    for _, num := range nums {
        count[num]++
    }

    for num, cnt := range count {
        freq[cnt] = append(freq[cnt], num)
    }

    // loop in reverse, add k elements to result
    var res []int
    for i := len(freq) - 1; i > 0; i-- {
        for _, num := range freq[i] {
            res = append(res, num)
            if k == len(res) {
                return res
            }
        }
    }
    return res
}
