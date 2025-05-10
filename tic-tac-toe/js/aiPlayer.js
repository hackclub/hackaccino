export class AIPlayer {
    constructor() {
        this.player = 'O';
        this.opponent = 'X';
    }
    
    getMove(board, difficulty) {
        switch (difficulty) {
            case 'easy':
                return this.getEasyMove(board);
            case 'medium':
                return this.getMediumMove(board);
            case 'hard':
                return this.getHardMove(board);
            default:
                return this.getEasyMove(board);
        }
    }
    
    getEasyMove(board) {
        const availableMoves = this.getAvailableMoves(board);
        if (availableMoves.length === 0) return null;
        
        const randomIndex = Math.floor(Math.random() * availableMoves.length);
        return availableMoves[randomIndex];
    }
    
    getMediumMove(board) {
        if (Math.random() < 0.5) {
            return this.getHardMove(board);
        } else {
            return this.getEasyMove(board);
        }
    }
    
    getHardMove(board) {
        const winningMove = this.findWinningMove(board, this.player);
        if (winningMove) return winningMove;
        
        const blockingMove = this.findWinningMove(board, this.opponent);
        if (blockingMove) return blockingMove;
        
        if (board[1][1] === null) {
            return { row: 1, col: 1 };
        }
        
        const corners = [
            { row: 0, col: 0 },
            { row: 0, col: 2 },
            { row: 2, col: 0 },
            { row: 2, col: 2 }
        ];
        
        const availableCorners = corners.filter(corner => 
            board[corner.row][corner.col] === null
        );
        
        if (availableCorners.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableCorners.length);
            return availableCorners[randomIndex];
        }
        
        const edges = [
            { row: 0, col: 1 },
            { row: 1, col: 0 },
            { row: 1, col: 2 },
            { row: 2, col: 1 }
        ];
        
        const availableEdges = edges.filter(edge => 
            board[edge.row][edge.col] === null
        );
        
        if (availableEdges.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableEdges.length);
            return availableEdges[randomIndex];
        }
        
        return this.getEasyMove(board);
    }
    
    findWinningMove(board, player) {
        const availableMoves = this.getAvailableMoves(board);
        
        for (const move of availableMoves) {
            const boardCopy = this.copyBoard(board);
            
            boardCopy[move.row][move.col] = player;
            
            if (this.checkWin(boardCopy, player)) {
                return move;
            }
        }
        
        return null;
    }
    
    checkWin(board, player) {
        for (let row = 0; row < 3; row++) {
            if (board[row][0] === player && 
                board[row][1] === player && 
                board[row][2] === player) {
                return true;
            }
        }
        
        for (let col = 0; col < 3; col++) {
            if (board[0][col] === player && 
                board[1][col] === player && 
                board[2][col] === player) {
                return true;
            }
        }
        
        if (board[0][0] === player && 
            board[1][1] === player && 
            board[2][2] === player) {
            return true;
        }
        
        if (board[0][2] === player && 
            board[1][1] === player && 
            board[2][0] === player) {
            return true;
        }
        
        return false;
    }
    
    getAvailableMoves(board) {
        const moves = [];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (board[row][col] === null) {
                    moves.push({ row, col });
                }
            }
        }
        return moves;
    }
    
    copyBoard(board) {
        const copy = [];
        for (let row = 0; row < 3; row++) {
            copy[row] = [...board[row]];
        }
        return copy;
    }
}