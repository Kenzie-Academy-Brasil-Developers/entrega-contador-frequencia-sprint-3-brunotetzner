
const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
let typedText = document.getElementById("textInput").value;
    const letterCounts = { };
    const wordsCounts ={ };

    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 

for (let i = 0; i < typedText.length; i++) {
    let currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }
 }

 for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
   const letters = document.getElementById("lettersDiv");
   
     letters.appendChild(span); 
  }

 /*Palavras*/

  words = typedText.split(/\s/);
 for (let i = 0; i < words.length; i++) {
   let currentWords = words[i];
    if (wordsCounts[currentWords] === undefined) {
       wordsCounts[currentWords] = 1; 
    } else { 
       wordsCounts[currentWords]++; 
     } 
 }
 console.log(wordsCounts)
 for (let word in wordsCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${word}": ${wordsCounts[word]}, `;
    span.innerText = textContent; 
    const words = document.getElementById("wordsDiv");
   
    words.appendChild(span); 
 }
 
 });