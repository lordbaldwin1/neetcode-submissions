func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    sHash := map[byte]int{}
    tHash := map[byte]int{}
    for i := range s {
        if _, ok := sHash[s[i]]; !ok {
            sHash[s[i]] = 1
        } else {
            sHash[s[i]] += 1
        }

        if _, ok := tHash[t[i]]; !ok {
            tHash[t[i]] = 1
        } else {
            tHash[t[i]] += 1
        }
    }

    for key, _ := range sHash {
        if sHash[key] != tHash[key] {
            return false
        }
    }
    return true
}
