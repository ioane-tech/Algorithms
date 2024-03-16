var tictactoe = function(moves) {
    const winConditions = [[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],    [1, 0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[1,1],[2,2]],[[0,2],[1,1],[2,0]]];
       
       let board = [[0,0,0],[0,0,0],[0,0,0]]; 
       
       for (let i = 0; i < moves.length; i++) {
           let [row, col] = moves[i];
           board[row][col] = i % 2 === 0 ? 1 : -1; 
           for (const condition of winConditions) {
               let sum = 0;
               for (const [r, c] of condition) {
                   sum += board[r][c];
               }
               if (Math.abs(sum) === 3) {
                   return sum === 3 ? 'A' : 'B';
               }
           }
       }
   
       return moves.length === 9 ? 'Draw' : 'Pending';
   }
   
   console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]))