func groupAnagrams(strs []string) [][]string {
    // intuition: [key] -> [vals]
    // loop over strs, make key (charcodes combined)
    res := map[[26]int][]string{}

    for _, s := range strs {
        count := [26]int{}
        for _, c := range s {
            count[c - 'a']++
        }
        res[count] = append(res[count], s)
    }

    result := [][]string{}
    for _, group := range res {
        result = append(result, group)
    }

    return result
}
