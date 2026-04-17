class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for tok in tokens:
            if tok == "+":
                res = stack.pop() + stack.pop()
                stack.append(res)
            elif tok == "*":
                res = stack.pop() * stack.pop()
                stack.append(res)
            elif tok == "-":
                val1 = stack.pop()
                val2 = stack.pop()
                stack.append(val2 - val1)
            elif tok == "/":
                val1 = stack.pop()
                val2 = stack.pop()
                stack.append(int(float(val2) / val1))
            else:
                stack.append(int(tok))
        return stack[-1]