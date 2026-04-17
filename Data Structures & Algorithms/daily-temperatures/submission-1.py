class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = [] # [temp, idx]
        
        for i, t in enumerate(temperatures):
            # we need to compare the current
            # temp with temp at top of stack!
            # so, we can't add to stack yet!
            while stack and t > stack[-1][0]:
                stack_temp, stack_idx = stack.pop()
                res[stack_idx] = i - stack_idx
            stack.append([t, i])
        return res