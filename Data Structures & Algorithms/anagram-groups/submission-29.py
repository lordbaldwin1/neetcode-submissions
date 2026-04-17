class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = defaultdict(list) # makes a hashmap where values are lists, so we don't need to check and initialize
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            hashmap[tuple(count)].append(s)
        return list(hashmap.values())