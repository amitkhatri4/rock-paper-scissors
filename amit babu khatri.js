const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
  
    
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');  //selects html element with class rock and asigin to rockbtn
        const paperBtn = document.querySelector('.paper');  //selects html element with class rock and asigin to paperbtn
        const scissorBtn = document.querySelector('.scissor'); //selects html element with class scissor and asigin to scissorbtn
        const playerOptions = [rockBtn,paperBtn,scissorBtn];  //creates an array playeroptions that contains three buttons for player
        const computerOptions = ['rock','paper','scissors']   //creates an array computeroptions that contains three buttons for computer
          
        // Function to start playing game
        playerOptions.forEach(option => {   //iterates over each element in player option array and attcahes an event listner
            option.addEventListener('click',function(){ //this adds a click event listener to each button in player option and defines anonymous function
  
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`; //update the text content of movesleft element to display the number of moves left 
                  
  
                const choiceNumber = Math.floor(Math.random()*3); //this code generates a random integer between 0 and 2 (inclusive) and stores it in the variable choiceNumber 
                const computerChoice = computerOptions[choiceNumber]; //The code multiplies the random value by 3 because the desired range of random integers is from 0 to 2, inclusive.
  
                // Function to check who wins
                winner(this.innerText,computerChoice)
                  
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
          
    }
  
    // Function to decide winner
    const winner = (player,computer) => { // this defines winner in the function which determine winner based on computer and player choice
        const result = document.querySelector('.result');  //selects html element with class result and asigin to const result
        const playerScoreBoard = document.querySelector('.p-count'); //selects html element with p count and asigin to palerscoredboard
        const computerScoreBoard = document.querySelector('.c-count'); //selects html element with c count and asigin to computerscoredboard
        player = player.toLowerCase(); //This converts the player's choice to lowercase for case-insensitive comparison.
        computer = computer.toLowerCase(); //This converts the computer choice to lowercase for case-insensitive comparison.
        if(player === computer){
            result.textContent = 'Tie' //This checks if the player's choice is the same as the computer's choice.
        }
        else if(player == 'rock'){ //This checks if the player's choice is "rock".
            if(computer == 'paper'){ //If the condition is true, it checks if the computer's choice is "paper".
                result.textContent = 'Computer Won'; //If the condition is true, it sets the text content of the result element to "Computer Won".
                computerScore++;
                computerScoreBoard.textContent = computerScore; //It updates the text content of the computerScoreBoard element with the new value of computerScore
  
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
  
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
  
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
  
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
  
    
        chooseMove.innerText = 'Game Over!!' //innerText property represents the visible text content of an element. In this case, it is being used to display the message "Game Over!!" in the element.
        movesLeft.style.display = 'none'; //display to "none" hides the element from the page, making it invisible. This line sets the CSS display property of an element with the id movesLeft to "none".
        //The style property allows you to modify the inline CSS of an element, and display is a CSS property that determines how an element is displayed on the page
        if(playerScore > computerScore){
            result.style.fontSize = '2rem'; 
            //changes the font size of the text displayed in the result element to 2 rem (root em) units. This controls the size of the text.
            result.innerText = 'You Won The Game'  //updates the text content of the result element to display the message "You Won The Game".
            //displayed in the result element to a shade of green. The color value '#308D46' represents a specific color in hexadecimal format.
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        //This line sets the innerText property of an element with the id reloadBtn to the string value "Restart". It updates the visible text content of the reloadBtn element to display the text "Restart".
        reloadBtn.style.display = 'flex' //flex, which means it will be displayed as a flex container. This can be useful for layout and positioning purposes.
        reloadBtn.addEventListener('click',() => {
            //When the button is clicked, the callback function () => { window.location.reload(); } is executed.
            window.location.reload();
            //This method is used to reload the current page. When the button is clicked, the window.location.reload() method reloads the page, effectively restarting the game.
        })
    }
  
  
    // Calling playGame function inside game
    playGame();
      
}
  
// Calling the game function
game();