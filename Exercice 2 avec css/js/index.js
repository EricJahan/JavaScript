let randomNumber = Math.floor(Math.random()*9)+1; // J'initie la génération d'un nombre aléatoire entre 0 et 10

let guesses = document.querySelector('.guesses'); //variable pour stocker une entrée
let lastResult = document.querySelector('.lastResult'); // variable pour stocker la derniere entrée
let lowOrHi = document.querySelector('.lowOrHi'); // variable pour stocker et dire si la derniere entrée utilisée est plus haute ou plus basse que le nombre caché

let guessSubmit = document.querySelector('.guessSubmit'); //bouton pour submit la proposition entré
let guessField = document.querySelector('.guessField'); // zone d'entrée de la proposition

let guessCount = 1; //
let resetButton;


function checkGuess () {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) { // Si le nombre de tentative est a 1 
        guesses.textContent = 'Dernier chiffre utilisé : '; //dereniere proposition possible
    }
    guesses.textContent += userGuess + ' / '; // affiche la valeur courante
    
    if (userGuess === randomNumber) // Si la proposition "est strictement égale à" nombre généré aléatoirement
    {
        lastResult.textContent = 'Bravo ! C\'était ça !'; //bravo etc..
        lastResult.style.backgroundColor = 'green'; // écrire en vert le bravo..
        lowOrHi.textContent = ''; 
        setGameOver(); // restart
    }
    else if (guessCount === 3) // limite du nombre de propositions possible
    {
        lastResult.textContent = '!!! PERDU !!!'; // perdu..
        setGameOver();// initialise la fonction "gameover"
        randomNumber.textContent = 'La réponse était :'; // affiche le chiffre qui était attendu .
    }
    else
        {
            lastResult.textContent = 'Faux !'; // dernier résultat faux 
            lastResult.style.backgroundColor = 'red'; // Couleur "Faux !" en rouge
            if (userGuess < randomNumber)
                {
                    lowOrHi.textContent = 'Le nombre saisi est trop faible !';
                }
            else if (userGuess > randomNumber)
                {
                    lowOrHi.textContent = 'Le nombre saisi est trop élevé !'
                }
        }
    
    guessCount++; // Ajoute 1 tour de jeu dans le compteur 
    guessField.value = ' '; // valeur dans le champ de proposition
    guessField.focus(); // ?? focus sur le champ de proposition => retourne tout seul dedans ??
}
guessSubmit.addEventListener('click', checkGuess); // écouteur d'évenement : cliquer sur valider => agir


let name = 'Bingo !';
name;

let hello = 'dit bonjour !';
hello;

let greeting = name + hello;
greeting;


function setGameOver() 
{
    guessField.diabled = true; //texte
    guessSubmit.disabled = true; // bouton submit
    resetButton = document.createElement('button'); //création d'un bouton 
    resetButton.textContent = 'Start New Game'; // bouton start new game
    document.body.appendChild(resetButton); // bouton reset
    resetButton.addEventListener('click', resetGame); // appelle la fonction reset 
}


// réinitialisation de tout !!!
function resetGame()
{
    guessCount = 1; // remet le compteur guess a 1
    
    let resetParas = document.querySelectorAll('.resultParas p'); //selectionne tous les paragraphes d'information
    for (let i = 0 ; i < resetParas.lenght ; i++)
        {
            resetParas[i].textContent = ''; //supprime toutes les infos
        }
    resetButton.parentNode.removeChild(resetButton);
    
    
    //réinitialise les boutons 
    guessField.diabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white'; // supprime la couleur du "dernier résultat"
    
    randomNumber = Math.floor(Math.random()*9)+1; // génère un nouveau nombre aléatoire
}
























