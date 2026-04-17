class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            if not self.isAlpha(s[l]):
                l += 1
            elif not self.isAlpha(s[r]):
                r -= 1
            else:
                if s[l].lower() != s[r].lower():
                    return False
                l += 1
                r -= 1
        return True

    def isAlpha(self, c):
        return (c >= 'A' and c <= 'Z'
            or c >= 'a' and c <= 'z'
            or c >= '0' and c <= '9')
        