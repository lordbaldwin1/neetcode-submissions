class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += str(len(s)) + "#" + s
        return res

    # Input: ["neet","code","love","you"]
    # Encoded: "4#neet4#code4#love3#you"

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            n = int(s[i:j])
            sub_str = s[j+1:j+1+n]
            i = j+1+n
            res.append(sub_str)
        return res

