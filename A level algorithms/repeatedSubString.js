var repeatedSubstringPattern = function(s) {
    const n = s.length;
   for (let i = 1; i <= Math.floor(n / 2); i++) {
       if (n % i === 0) {
           const substring = s.slice(0, i);
           let repeatedString = '';
           for (let j = 0; j < n / i; j++) {
               repeatedString += substring;
           }
           if (repeatedString === s) {
               return true;
           }
       }
   }
   return false;   
};