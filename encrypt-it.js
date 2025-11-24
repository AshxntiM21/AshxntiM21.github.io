/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    console.log("Windo loaded!");
    let encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click", handleClick);

    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", handleReset);
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleClick(){
    console.log("Button Clicked");
    let inputText = document.getElementById("input-text");
    let resultParagraph = document.getElementById("result");
    
    let originalText = inputText.value;
    let encryptedText = shiftCipher(originalText);
    
    resultParagraph.textContent = encryptedText;
  }
  
  function handleReset(){
    let inputText = document.getElementById("input-text");
    inputText.value = "";
  }
  function shiftCipher(text){
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++){
      if (text[i] < 'a' || text[i] > 'z'){
        result += 'a';
      } else if (text[i] == 'z'){
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter
      }
    }
    return result;
  }

})();
