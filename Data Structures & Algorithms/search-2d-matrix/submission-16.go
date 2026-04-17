func searchMatrix(matrix [][]int, target int) bool {
    ROWMAX := len(matrix)
    COLMAX := len(matrix[0])
    top, bot := 0, ROWMAX - 1

    for top <= bot {
        m := (top + bot) / 2
        if matrix[m][COLMAX-1] < target {
            top = m + 1
        } else if matrix[m][0] > target {
            bot = m - 1
        } else {
            break
        }
    }

    if !(top <= bot) { return false }

    row := (top + bot) / 2
    l := 0
    r := COLMAX - 1
    for l <= r {
        m := (l + r) / 2
        if matrix[row][m] < target {
            l = m + 1
        } else if matrix[row][m] > target {
            r = m - 1
        } else {
            return true
        }
    }
    return false
}
