export class GameLogic {
    constructor() {
        this.resetBoard();
    }
    
    resetBoard() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.moveCount = 0;
    }
    
    getBoard() {
        return this.board;
    }
    
    isValidMove(row, col) {
        return row >= 0 && row < 3 && col >= 0 && col < 3 && this.board[row][col] === null;
    }
    
    makeMove(row, col, player) {
        if (!this.isValidMove(row, col)) return false;
        
        this.board[row][col] = player;
        this.moveCount++;
        return true;
    }
    
    undoMove(row, col) {
        if (row >= 0 && row < 3 && col >= 0 && col < 3 && this.board[row][col] !== null) {
            this.board[row][col] = null;
            this.moveCount--;
            return true;
        }
        return false;
    }
    
    checkGameEnd() {
        for (let row = 0; row < 3; row++) {
            if (this.board[row][0] && 
                this.board[row][0] === this.board[row][1] && 
                this.board[row][0] === this.board[row][2]) {
                return {
                    winner: this.board[row][0],
                    winningCells: [
                        { row, col: 0 },
                        { row, col: 1 },
                        { row, col: 2 }
                    ]
                };
            }
        }
        
        for (let col = 0; col < 3; col++) {
            if (this.board[0][col] && 
                this.board[0][col] === this.board[1][col] && 
                this.board[0][col] === this.board[2][col]) {
                return {
                    winner: this.board[0][col],
                    winningCells: [
                        { row: 0, col },
                        { row: 1, col },
                        { row: 2, col }
                    ]
                };
            }
        }
        
        if (this.board[0][0] && 
            this.board[0][0] === this.board[1][1] && 
            this.board[0][0] === this.board[2][2]) {
            return {
                winner: this.board[0][0],
                winningCells: [
                    { row: 0, col: 0 },
                    { row: 1, col: 1 },
                    { row: 2, col: 2 }
                ]
            };
        }
        
        if (this.board[0][2] && 
            this.board[0][2] === this.board[1][1] && 
            this.board[0][2] === this.board[2][0]) {
            return {
                winner: this.board[0][2],
                winningCells: [
                    { row: 0, col: 2 },
                    { row: 1, col: 1 },
                    { row: 2, col: 0 }
                ]
            };
        }
        
        if (this.moveCount === 9) {
            return { winner: null };
        }
        
        return null;
    }
    
    getAvailableMoves() {
        const moves = [];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.board[row][col] === null) {
                    moves.push({ row, col });
                }
            }
        }
        return moves;
    }
}