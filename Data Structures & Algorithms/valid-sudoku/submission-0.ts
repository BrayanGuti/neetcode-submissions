class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const sudokuMetaData = new Set()


        const rowStr = (row: number, num: string) => `row_value${row}-${num}`
        const columnStr = (column: number, num: string) => `column_value${column}-${num}`
        const treeXtreeStr = (i: number, j: number, num: string) => {
            let icuandrante = ''
            let jcuandrante = ''

            if(i < 3) {
                icuandrante = '0'
            } else if (i < 6){
                icuandrante = '3'
            } else{
                icuandrante = '6'
            }

            if(j < 3) {
                jcuandrante = '0'
            } else if (j < 6){
                jcuandrante = '3'
            } else{
                jcuandrante = '6'
            }
            
            return `3x3_value${icuandrante}-${jcuandrante}-${num}`
        }

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] === "."){
                    continue
                }

                const rowName = rowStr(i, board[i][j])
                const columnName = columnStr(j, board[i][j])
                const treeXtreeName = treeXtreeStr(i, j, board[i][j])

                if(
                    sudokuMetaData.has(rowName) 
                    || sudokuMetaData.has(columnName) 
                    || sudokuMetaData.has(treeXtreeName))
                {
                    return false
                }

                sudokuMetaData.add(rowName)
                sudokuMetaData.add(columnName)
                sudokuMetaData.add(treeXtreeName)

            }
        }

        return true
    }
}
