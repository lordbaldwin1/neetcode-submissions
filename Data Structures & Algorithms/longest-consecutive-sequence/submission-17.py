class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hashmap = {}
        for num in nums:
            hashmap[num] = True
        
        longest = 0
        for key in hashmap.keys():
            if key - 1 not in hashmap:
                streak = 0
                while key + streak in hashmap:
                    streak += 1
                longest = max(streak, longest)
        return longest

