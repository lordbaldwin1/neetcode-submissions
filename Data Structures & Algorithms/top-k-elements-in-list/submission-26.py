class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        for num in nums:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1
        
        bucket = [[] for i in range(0, len(nums) + 1)] # ?
        for num, count in count.items():
            bucket[count].append(num)

        res = []
        for arr in reversed(bucket):
            for val in arr:
                res.append(val)
                if len(res) == k:
                    return res
        
        return res







