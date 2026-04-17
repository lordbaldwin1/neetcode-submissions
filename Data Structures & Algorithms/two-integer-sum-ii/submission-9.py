class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums) - 1

        while l < r:
            two_sum = nums[l] + nums[r]
            if two_sum == target:
                return [l+1, r+1]
            elif two_sum < target:
                l += 1
            else:
                r -= 1
        return "WHAT THE FUCK!"
        