document.addEventListener('DOMContentLoaded', () => {
    const inputElem = document.querySelector('input');
    const resultDiv = document.querySelector('p + div');
  
    const isPalindrome = (number) => {
      const str = number.toString();
      return str === str.split('').reverse().join('');
    };
  
    const handleInput = () => {
      const number = parseInt(inputElem.value, 10);
  
      if (isNaN(number) || number < 0) {
        resultDiv.textContent = 'Please enter a positive number.';
      } else if (isPalindrome(number)) {
        resultDiv.textContent = 'Yes, it is a palindrome.';
      } else {
        resultDiv.textContent = 'No, it is not a palindrome.';
      }
    };
  
    inputElem.addEventListener('input', handleInput);
  });
  