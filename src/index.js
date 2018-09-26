module.exports = function solveSudoku(matrix) {

    function solve(matrix) {
        let possibleSolution;//it will be for our recursion
        //go through each element
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] == 0) {
                    //find the correct number from 1 to 9 in cell 
                    for (let n = 1; n < 10; n++) {
                        if (check(matrix, i, j, n)) {
                            matrix[i][j] = n;
                            //make recursion or backtracking with new matrix - where m[i][j]==number;
                            possibleSolution = solve(matrix);
                            if (possibleSolution) { return true; }
                            //if with this n we could not find the solution check for next n in m[i][j]
                            matrix[i][j] = 0;
                        }
                    }
                    return false; // in no one solution was not correct 
                }
            }
        }
        return true; //hoooray we finished with correct answer!
    }

    // check for correct insert at indices
    function check(matr, i, j, numb) {
        //xB yB is our start element in block left top el-t
        let xBlock = Math.floor(i / 3) * 3;
        let yBlock = Math.floor(j / 3) * 3;
        // than we check if this number already exists in a row or col or block
        // if it exists than it will return false for this number;
        for (let k = 0; k < 9; k++) {
            if (matr[i][k] == numb || matr[k][j] == numb || matr[xBlock + Math.floor(k / 3)][yBlock + k % 3] == numb) {
                return false;
            }
            
        }
        return true;//if number match all our rules (row col block)
        
    }

    solve(matrix);
    return matrix;
}
