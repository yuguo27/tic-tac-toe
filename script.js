
const rows = 3;
const cols= 3;
let board = [];

//stocker le tableau à l'interieur de l'objet qui gere le plateau 
let GameBoard = function(board){
    this.board = board;
    //tableau 2D pour le plateau + initialisation
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < cols; j++) {
            board[i][j] = ' ';
        }
    }
    this.isEmpty = function(row, col){
        return this.board[row][col] === ' ';
    }
}
//créer l'objet gameboard
let gameboard = new GameBoard(board);

//stocker les joueurs dans un objets
let Player = function(token, number){
    this.number  = number
    this.token = token;
    this.id = crypto.randomUUID();
    
    //création d'une méthode de mise en place des jetons 
    this.dropToken = function(board, row, col){
        if (row<3 && col<3 && row>=0 && col>=0){
            board[row][col] = token;
        }
    }
}
//déclaration des players
let player1 = new Player('X', 1);
let player2 = new Player('O', 2); 

//objet pour gérer le déroulement du jeu
let GameManager = function(gameboard){
    let currentPlayer = player1;
    this.getCurrentPlayer = () => currentPlayer;
    this.gameboard = gameboard;
    let gameOver = false;
    
    //gestion des conditions de remplissage
    this.isFulled = function(){
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (this.gameboard.board[i][j] == ' '){
                    return false;
                }
            }
        }
        return true;
    }

    //gestion des conditions de win
    this.isWin = function(){
        let count = 0;
        //verification de la row
        for(let irow=0; irow<3; irow++){
            count = 0;
            for(let icol=0; icol<3; icol++){
                if (icol<2 && 
                    this.gameboard.board[irow][icol] == this.gameboard.board[irow][icol+1]&&
                    !this.gameboard.isEmpty(irow, icol)
                ){
                    count++;
                    if (count ==2){
                        return true;
                    }
                }
            }
        }
        //verification de la colonne
        for(let icol=0; icol<3; icol++){
            count = 0;
            for(let irow=0; irow<3; irow++){
                if (irow<2 && 
                    this.gameboard.board[irow][icol] == this.gameboard.board[irow+1][icol] &&
                    !this.gameboard.isEmpty(irow, icol)
                ){
                    count++;
                    if (count ==2){
                        return true;
                    }
                }
            }
        }
        // diagonale descendante
        if (
            this.gameboard.board[0][0] !== ' ' &&
            this.gameboard.board[0][0] === this.gameboard.board[1][1] &&
            this.gameboard.board[1][1] === this.gameboard.board[2][2]
        ) {
            return true;
        }

        // diagonale montante
        if (
            this.gameboard.board[0][2] !== ' ' &&
            this.gameboard.board[0][2] === this.gameboard.board[1][1] &&
            this.gameboard.board[1][1] === this.gameboard.board[2][0]
        ) {
            return true;
        }

        return false;
    }
    //déroulement de la partie 
    this.game = function(row, col){
        //gérer si la partie est terminé pour pas faire de nouveau coup
        if (gameOver) {
            alert("La partie est terminée !");
            return;
        }
        if (!this.gameboard.isEmpty(row, col)) {
            alert("Cette case est déjà occupée !");
            return;
        }
        this.getCurrentPlayer().dropToken(
        this.gameboard.board,
            row,
            col
        );
        
        if (this.isWin()){
            alert(`le joueur ${this.getCurrentPlayer().number} a gagné`);
            gameOver = true;
            return;
        }
        if (this.isFulled()){
            console.log("égalité entre les deux jouers");
            gameOver = true;
            return;
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
}

let gameManager = new GameManager(gameboard);

//ajout de la logique DOM 
let Display = function(gameManager){
    this.gameManager = gameManager
    const container = document.querySelector(".container");
    //let button = document.createElement("button");
    for (let i=0; i<9; i++){
        const button = document.createElement("button");
        button.textContent = ' ';
        button.addEventListener("click", () => {
            //obtenir la ligne grace à la division entiere
            const row = Math.floor(i/3);
            //obtenir la colonne grace au reste
            const col = i%3;
            gameManager.game(row, col);
            button.textContent = gameManager.gameboard.board[row][col];
            
        })
        container.appendChild(button);

        
    }

}

let display = new Display(gameManager);




