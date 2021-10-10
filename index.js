const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Input: ', name => palindrome(name));

  const palindrome = name => {
    let word = name.split(', ').join('')
    let reverse = word.split('').reverse().join('')
    console.log('Output: ' + word + reverse)
    readline.close()
  }