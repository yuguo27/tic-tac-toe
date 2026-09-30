//game console js
//plateau
let array = [];
//plateau de jeu
let GameBoard = function(array){
    this.array = array;
    let createGameBoard = function(array){
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                array[i][j] = ' ';
            }
        }
    }

    let isGameBoardFill = function(array){
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                if (array[i][j] == ' '){
                    return false; 
                }
            }
        }
        return true;
    }
}   


let createUser = function(name){
    this.id = this.id;
    const getName = () => name;
    return {name, id};
}

//objet du joueur
let createPlayer = function(name, score, token){
    const user = createUser(name);
    const getScore = () => score;
    const getToken = () => token;
    return {name, user};
}

const gameboard = new GameBoard(array);
const player1 = new createPlayer();
const player2 = new createPlayer();
//
let GameManagement = function(round, gameboard){
    
    function isWin(){
        //condition de win diagonal ou ligne ou colonne  = 3 
    }

    function currentGame(){
        while (true){
            if (gameboard.isGameBoardFill){
                return;
            }
            if (isWin()){
                //afficher le gagnant
                return;
            }
            else{

                //gerer le round player 1 player 2 
                //player 1 commence et place son piont sur le plateau pour choisir la case juste passer en argument pour l'insant


            }
        }
    }

    //démarer la game, reset le plateau gère les tours des joueurs gérer les conditions de win
}


/* déroulement de la partie :
    tour1 premier joueur:
    premier joueur
        place un X sur une case 
    tour1 fini
    tour2 deuxieme joueur:
    deuxieme joueur:
        place un O sur une case
    fin du deuxieme tour
    fin de la partie : 
        si joueur 1 ou 2 gagne (condition 3 case aligné, en diagonnal ou en colonne)
        ou si toutes les cases remplies 
*/

