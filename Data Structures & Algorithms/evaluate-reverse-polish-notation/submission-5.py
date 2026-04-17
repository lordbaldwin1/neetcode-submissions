class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for tok in tokens:
            if tok == "+":
                stack.append(stack.pop() + stack.pop())
            elif tok == "*":
                stack.append(stack.pop() * stack.pop())
            elif tok == "-":
                val1 = stack.pop()
                val2 = stack.pop()
                stack.append(val2 - val1)
            elif tok == "/":
                val1 = stack.pop()
                val2 = stack.pop()
                stack.append(int(val2 / val1)) # disgusting!
            else:
                stack.append(int(tok))
        return stack[-1]