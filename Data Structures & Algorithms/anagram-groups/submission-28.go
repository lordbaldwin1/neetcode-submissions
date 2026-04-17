func groupAnagrams(strs []string) [][]string {
    res := map[[26]int][]string{}

    for _, s := range strs {
        count := [26]int{}
        for _, c := range s {
            count[c - 'a']++
        }
        res[count] = append(res[count], s)
    }

    var result [][]string
    for _, val := range res {
        result = append(result, val)
    }
    return result
}
