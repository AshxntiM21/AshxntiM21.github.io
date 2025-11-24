function Alert(){
alert("Hello, world!");
}

function Bigger(){
    document.getElementryById("text").style.fontSize = "24pt";
}

function changeStyle(){
    alert("style changed!");
    var textArea = document.getElementById("text");

    if (document.getElementById("fancyshamcy").checked){
        textArea.style.fontWeight = "bold";
    } else if (document.getElementById("boringBetty").checked){
        textArea.style.fontWeight = "normal";
    } 
}

function mooText(){
    var textArea = document.getElementById("text");
    var textIn = textArea.value;
    textIn = text.toUpperCase();
    var sentences = textIn.split(".");

    for (var i = 0; i < sentences.length; i++){
        if(sentences[i].trim() !==""){
            var words = sentences[i].trim().split(" ");
            words[words.length - 1] = words[words.length -1] + "-moo";
            sentences[i] = words.join (" ")
        }
    }

    textIn = sentences.join(".");
    textArea.value = textIn;
}
    
