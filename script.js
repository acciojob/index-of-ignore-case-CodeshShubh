function indexOfIgnoreCase(s1, s2) {
  // write your code here

  let lowerS1 = s1.toLowerCase();
  let lowerS2 = s2.toLowerCase();
     // find the index of s2 in s1
  let firstOccurrence = lowerS1.indexOf(lowerS2);

  // return the index
  return firstOccurrence;
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2)); 
