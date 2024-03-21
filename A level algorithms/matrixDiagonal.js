var diagonalSum = function(mat) {
    let sum = 0;
    const n = mat.length;

    for (let i = 0; i < n; i++) {
        sum += mat[i][i]; // Primary diagonal
        sum += mat[i][n - 1 - i]; // Secondary diagonal
        
        // If the element lies on both diagonals, subtract one occurrence
        if (i === n - 1 - i) {
            sum -= mat[i][i];
        }
    }

    return sum;
};

console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))