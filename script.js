function firstNonRepeatedChar(str) {
  // Create an object to store character frequencies
  const charCount = {};

  // Iterate through the string and count character frequencies
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

	 // Iterate through the string again to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; // Return null if all characters are repeated
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
if (result !== null) {
  alert(`The first non-repeated character is: ${result}`);
} else {
  alert("There are no non-repeated characters in the string.");
}