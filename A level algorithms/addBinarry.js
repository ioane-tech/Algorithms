var addBinary = function(a, b) {
    let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
      const num1 = i >= 0 ? parseInt(a[i]) : 0;
      const num2 = j >= 0 ? parseInt(b[j]) : 0;
      const sum = num1 + num2 + carry;
      
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);

      i--;
      j--;
  }
  
  if (carry > 0) {
      result = carry + result;
  }

  return result;
}
