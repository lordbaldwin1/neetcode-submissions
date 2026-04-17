class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = [[p, s] for p, s in zip(position, speed)]
        stack = []

        for p, s in sorted(pair)[::-1]:
            if stack:
                curr_time = (target - p)/s
                stack_time = (target - stack[-1][0])/stack[-1][1]
                if curr_time > stack_time:
                    stack.append([p, s])
            else:
                stack.append([p, s])
        return len(stack)
