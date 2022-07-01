playername1= localStorage.getItem("player1");
playername2= localStorage.getItem("player2");
document.getElementById("player").innerHTML= playername1 + ": ";
document.getElementById("player1").innerHTML= playername2 + ": ";
playerscore1= 0;
playerscore2= 0;
document.getElementById("score").innerHTML= playerscore1;
document.getElementById("score1").innerHTML= playerscore2;
document.getElementById("word").innerHTML= "Turno de pergunta: " + playername1;
document.getElementById("answer").innerHTML= "Turno de resposta: " + playername2;
function send() {
    word= document.getElementById("choose_word").value;
    wordLowercase= word.toLowerCase();
    char1= wordLowercase.charAt(1);
    half= Math.floor(wordLowercase.lenght/2);
    char2= wordLowercase.charAt(half);
    lengthChar= wordLowercase.lenght - 1;
    char3= wordLowercase.charAt(lenghtChar);
    removeChar1= word.replace(char1, "_");
    removeChar2= removeChar1.replace(char2, "_");
    removeChar3= removeChar2.replace(char3, "_");
    questionWord= "<h4 id='wordDisplay'>Palavra: " + removeChar3 + "</h4>";
    inputBox= "<br>Resposta: <input type='text' id='inputCheckbox'>";
    checkButton= "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row= questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML= row;
    document.getElementById("choose_word").value= "";
}