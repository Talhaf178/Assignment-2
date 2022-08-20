// Question: Write a JavaScript function that reverse a number.

function reverseanynumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverseanynumber(32243)));

// Question: Write a JavaScript function that generates all combinations of a string Example string : 'dog'

let Combinations = (str) =>{
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   return combinations;
}
console.log(Combinations('Dog'));

// Question: Write a JavaScript function that returns a passed string with letters in alphabetical order.
function lettersInAlpha(str)
  {
return str.split('').sort().join('');
  }
console.log(lettersInAlpha("webmaster"));

// Question: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function upperCase(fox)
{
var firstarray = fox.split(' ');
var secondarray = [];
  
for(var x = 0; x < firstarray.length; x++){
    secondarray.push(firstarray[x].charAt(0).toUpperCase()+firstarray[x].slice(1));
}
return secondarray.join(' ');
}
console.log(upperCase("the quick brown fox"));

// Question: Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function LongestWord(str)
{
  var firstarray = str.match(/\w[a-z]{0,}/gi);
  var result = firstarray[0];

  for(var x = 1 ; x < firstarray.length ; x++)
  {
    if(result.length < firstarray[x].length)
    {
    result = firstarray[x];
    } 
  }
  return result;
}
console.log(LongestWord('Web Development Tutorial'));

// Question: Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(aei)
{
  var vowels = 'aeiouAEIOU';
  var vowel = 0;
  
  for(var x = 0; x < aei.length ; x++)
  {
    if (vowels.indexOf(aei[x]) !== -1)
    {
      vowel += 1;
    }
  
  }
  return vowel;
}
console.log(countVowels("The quick brown fox"));

// Question: Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function primeNumber(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(primeNumber(9));


function primeNumber(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(primeNumber(17));

// Question: Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function scndLastFirst(num)
{
  num.sort(function(x,y)
           {
           return x-y;
           });
  var arrange = [num[0]];
  var result = [];
  
  for(var j=1; j < num.length; j++)
  {
    if(num[j-1] !== num[j])
    {
      arrange.push(num[j]);
    }
  }
    result.push(arrange[1],arrange[arrange.length-2]);
  return result.join(',');
  }

console.log(scndLastFirst([1,2,3,4,5]));


