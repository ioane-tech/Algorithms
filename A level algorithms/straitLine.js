var checkStraightLine = function(coordinates) {
    if (coordinates.length <= 2) return true; 
     
 
     const xValues = coordinates.map(point => point[0]);
     const allXEqual = xValues.every(x => x === xValues[0]);
 
     const yValues = coordinates.map(point => point[1]);
     const allYEqual = yValues.every(y => y === yValues[0]);
     
     if (allXEqual || allYEqual) {
         return true; 
     }
 
     const [x0, y0] = coordinates[0];
     const [x1, y1] = coordinates[1];
     const initialSlope = (y1 - y0) / (x1 - x0);
 
     for (let i = 2; i < coordinates.length; i++) {
         const [x, y] = coordinates[i];
 
         const slope = (y - y0) / (x - x0);
 
         if (slope !== initialSlope) {
             return false;
         }
     }
   
     return true;
 
 }
 
 
 const coordinates1 = [[0,0],[0,1],[0,-1]];
 console.log(checkStraightLine(coordinates1)); 