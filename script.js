
const rows = 3;
const cols= 3;
let board = [];

//stocker le tableau à l'interieur de l'objet qui gere le plateau 
let GameBoard = function(board){
    this.board = board;
//let board = Array.from({length: rows}, () => new Array(cols).fill(' '));
    //tableau 2D pour le plateau + initialisation
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = ' ';
        }
    }
}

let gameboard = new GameBoard(board);


//stocker les joueurs dans un objets
let Player = function(token){
    this.token = token;
    this.id = crypto.randomUUID();
    //création d'une méthode de mise en place des jetons 
    this.dropToken = function(board, row, col){
        board[row][col] = token;
    }
}

let player1 = new Player('X');
let player2 = new Player('O');

//objet pour gérer le déroulement du jeu
let GameManager = function(){
    //gestion des conditions de remplissage
    this.isFulled = function(board){
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (board[i][j] == ' '){
                    return false;
                }
            }
        }
        return true;
    }
    //gestion des conditions de win
    //verification des wins des lignes
    this.isWinRow = function(board, cols){
        for (let icol = 0; icol<cols; icol++){
            if (
                (board[0][icol] == board[1][icol] &&
                board[1][icol] == board[2][icol]) && 
                board[0][icol] != ' '
            ){
                return true;
            }
        }
        return false;
    }
    //verifications des wins des colonnes
    this.isWinColumn = function(board, rows){
        for (let irow = 0; irow<rows; irow++){
            if (
                board[irow][0] == board[irow][1] &&
                board[irow][1] == board[irow][0] &&
                board[irow][0] != ' '
            ){
                return true;
            }
        }
        return false;
    }
    //verification de la win de la premiere diagonale
    this.isWinDiagonal = function(board, rows, cols){

    }
    //verification de la win de la deuxieme diagonale
    this.isWinInverseDiagonal = function(board, rows, cols){

    }
  

    //idee du déroulement de la partie pour plus tard 
    /*this.game = function(board, player){
        let count = 0;
        while (!this.isFulled(board) || 
            !this.isWinColumn(board, 3) ||
             this.isWinRown(board, 3)
        ){
            player.dropToken(board, count, 2);
            console.log(board);
            console.log(this.isWinColumn, this.isWinRown);
            count++;
        }
        
    }*/
}

let gameManager = new GameManager();
player1.dropToken(board, 0, 2);
console.log(gameManager.isWinColumn(board, 3) ,gameManager.isWinRow(board, 3))
player1.dropToken(board, 1, 2);
player1.dropToken(board, 2, 2);
console.log(gameManager.isWinColumn(board, 3) ,gameManager.isWinRow(board, 3))



