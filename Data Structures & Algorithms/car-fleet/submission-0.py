class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = [[p, s] for p, s in zip(position, speed)]
        pair.sort()
        stack = []

        for car in reversed(pair):
            if stack:
                curr_time = (target - car[0])/car[1]
                stack_time = (target - stack[-1][0])/stack[-1][1]
                if curr_time > stack_time:
                    stack.append(car)
            else:
                stack.append(car)
        return len(stack)
