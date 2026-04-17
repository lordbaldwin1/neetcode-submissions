class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix) - 1
        cols = len(matrix[0]) - 1

        l, r = 0, rows
        while l <= r:
            m = l + ((r - l) // 2)
            if matrix[m][cols] < target:
                l = m + 1
            elif matrix[m][0] > target:
                r = m - 1
            else:
                break
        
        if l > r:
            return False
        
        row = m
        l, r = 0, cols
        while l <= r:
            m = l + ((r - l) // 2)
            if matrix[row][m] < target:
                l = m + 1
            elif matrix[row][m] > target:
                r = m -1
            else:
                return True
        return False






