import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GameBoard } from './gameBoard.js';
import { GameLogic } from './gameLogic.js';
import { AIPlayer } from './aiPlayer.js';
import { AudioManager } from './audioManager.js';

class Game {
    constructor() {
        this.currentPlayer = 'X';
        this.gameMode = 'pvp';
        this.scores = { X: 0, O: 0, draws: 0 };
        this.moveHistory = [];
        this.gameActive = true;
        this.selectedCell = { row: 0, col: 0 };
        this.highContrastMode = false;
        this.darkMode = false;
        
        this.audioManager = new AudioManager();
        this.gameLogic = new GameLogic();
        this.aiPlayer = new AIPlayer();
        
        this.setupScene();
        
        this.gameBoard = new GameBoard(this.scene, this.camera);
        
        this.setupEventListeners();
        
        this.animate();
    }
    
    updateRendererSize() {
        const container = document.getElementById('game-board');
        const width = container.clientWidth;
        const height = container.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
    
    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf0f0f0);
        
        this.camera = new THREE.PerspectiveCamera(
            45, 
            1,
            0.1, 
            1000
        );
        this.camera.position.set(0, 5, 7);
        
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        
        const container = document.getElementById('game-board');
        container.appendChild(this.renderer.domElement);
        
        this.updateRendererSize();
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 7);
        directionalLight.castShadow = true;
        directionalLight.shadow.camera.near = 0.1;
        directionalLight.shadow.camera.far = 25;
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        this.scene.add(directionalLight);
        
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 5;
        this.controls.maxDistance = 15;
        this.controls.maxPolarAngle = Math.PI / 2;
    }
    
    updateRendererSize() {
        const container = document.getElementById('game-board');
        const width = container.clientWidth;
        const height = container.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => this.updateRendererSize());
        
        this.renderer.domElement.addEventListener('click', (event) => this.handleBoardClick(event));
        
        document.getElementById('new-game-btn').addEventListener('click', () => this.resetGame());
        document.getElementById('undo-btn').addEventListener('click', () => this.undoMove());
        document.getElementById('toggle-sound').addEventListener('click', () => this.toggleSound());
        document.getElementById('toggle-contrast').addEventListener('click', () => {
            this.toggleHighContrast();
            this.audioManager.playUISound();
        });
        
        document.getElementById('toggle-dark-mode').addEventListener('click', () => {
            this.toggleDarkMode();
            this.audioManager.playUISound();
        });
        
        document.getElementById('game-mode').addEventListener('change', (e) => {
            this.gameMode = e.target.value;
            this.resetGame();
        });
        
        document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));
    }
    
    handleBoardClick(event) {
        if (!this.gameActive) return;
        
        const container = document.getElementById('game-board');
        const rect = container.getBoundingClientRect();
        const mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
        const mouseY = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
        
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera({ x: mouseX, y: mouseY }, this.camera);
        
        const intersects = raycaster.intersectObjects(this.gameBoard.getCellObjects());
        
        if (intersects.length > 0) {
            const clickedCell = intersects[0].object.userData;
            this.makeMove(clickedCell.row, clickedCell.col);
        }
    }
    
    handleKeyboardNavigation(event) {
        if (!this.gameActive) return;
        
        switch (event.key) {
            case 'ArrowUp':
                this.selectedCell.row = Math.max(0, this.selectedCell.row - 1);
                break;
            case 'ArrowDown':
                this.selectedCell.row = Math.min(2, this.selectedCell.row + 1);
                break;
            case 'ArrowLeft':
                this.selectedCell.col = Math.max(0, this.selectedCell.col - 1);
                break;
            case 'ArrowRight':
                this.selectedCell.col = Math.min(2, this.selectedCell.col + 1);
                break;
            case 'Enter':
                this.makeMove(this.selectedCell.row, this.selectedCell.col);
                break;
            default:
                return;
        }
        
        this.gameBoard.highlightSelectedCell(this.selectedCell.row, this.selectedCell.col);
    }
    
    makeMove(row, col) {
        if (!this.gameLogic.isValidMove(row, col)) {
            this.audioManager.playInvalidMove();
            return;
        }
        
        this.gameLogic.makeMove(row, col, this.currentPlayer);
        this.gameBoard.placePiece(row, col, this.currentPlayer);
        this.audioManager.playPlacePiece();
        
        this.moveHistory.push({ row, col, player: this.currentPlayer });
        
        const result = this.gameLogic.checkGameEnd();
        if (result) {
            this.handleGameEnd(result);
            return;
        }
        
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateGameStatus();
        
        if (this.gameMode !== 'pvp' && this.currentPlayer === 'O' && this.gameActive) {
            setTimeout(() => this.makeAIMove(), 500);
        }
    }
    
    makeAIMove() {
        const difficulty = this.gameMode;
        const move = this.aiPlayer.getMove(this.gameLogic.getBoard(), difficulty);
        
        if (move) {
            this.makeMove(move.row, move.col);
        }
    }
    
    handleGameEnd(result) {
        this.gameActive = false;
        
        if (result.winner) {
            this.scores[result.winner]++;
            document.getElementById(`player-${result.winner.toLowerCase()}-score`).textContent = this.scores[result.winner];
            document.getElementById('game-status').textContent = `Player ${result.winner} wins!`;
            this.audioManager.playWin();
            
            for (const cell of result.winningCells) {
                this.gameBoard.highlightWinningCell(cell.row, cell.col);
            }
            
            if (this.gameMode !== 'pvp') {
                if (result.winner === 'X') {
                    document.getElementById('win-message').textContent = 'Congratulations! You Won! 🎉';
                    document.getElementById('win-screen').style.display = 'flex';
                } else {
                    document.getElementById('lose-message').textContent = 'The AI Won This Round! 🤖';
                    document.getElementById('lose-screen').style.display = 'flex';
                }
            } else {
                document.getElementById('win-message').textContent = `Player ${result.winner} Wins! 🎉`;
                document.getElementById('win-screen').style.display = 'flex';
            }
        } else {
            this.scores.draws++;
            document.getElementById('draws').textContent = this.scores.draws;
            document.getElementById('game-status').textContent = "It's a draw!";
            this.audioManager.playDraw();
            document.getElementById('draw-screen').style.display = 'flex';
        }
    }
    
    closeModals() {
        document.getElementById('win-screen').style.display = 'none';
        document.getElementById('lose-screen').style.display = 'none';
        document.getElementById('draw-screen').style.display = 'none';
    }
    
    resetGame() {
        this.closeModals();
        this.gameLogic.resetBoard();
        this.gameBoard.resetBoard();
        this.moveHistory = [];
        this.gameActive = true;
        this.currentPlayer = 'X';
        this.updateGameStatus();
        this.audioManager.playReset();
    }
    
    undoMove() {
        if (this.moveHistory.length === 0) return;
        
        if (this.gameMode !== 'pvp') {
            const lastMove = this.moveHistory.pop();
            this.gameLogic.undoMove(lastMove.row, lastMove.col);
            this.gameBoard.removePiece(lastMove.row, lastMove.col);
            
            if (this.moveHistory.length > 0) {
                const playerMove = this.moveHistory.pop();
                this.gameLogic.undoMove(playerMove.row, playerMove.col);
                this.gameBoard.removePiece(playerMove.row, playerMove.col);
            }
            
            this.currentPlayer = 'X';
        } else {
            const lastMove = this.moveHistory.pop();
            this.gameLogic.undoMove(lastMove.row, lastMove.col);
            this.gameBoard.removePiece(lastMove.row, lastMove.col);
            this.currentPlayer = lastMove.player === 'X' ? 'X' : 'O';
        }
        
        this.gameActive = true;
        this.updateGameStatus();
        this.audioManager.playUndo();
    }
    
    updateGameStatus() {
        document.getElementById('game-status').textContent = `Player ${this.currentPlayer}'s turn`;
    }
    
    toggleSound() {
        const soundBtn = document.getElementById('toggle-sound');
        this.audioManager.toggleMute();
        soundBtn.textContent = this.audioManager.isMuted ? '🔇' : '🔊';
    }
    
    toggleHighContrast() {
        this.highContrastMode = !this.highContrastMode;
        document.body.classList.toggle('high-contrast', this.highContrastMode);
        
        if (this.highContrastMode) {
            this.scene.background = new THREE.Color(0x000000);
            this.gameBoard.setHighContrastMode(true);
        } else {
            this.scene.background = new THREE.Color(0xf0f0f0);
            this.gameBoard.setHighContrastMode(false);
        }
    }
    
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode', this.darkMode);
        
        if (this.darkMode && !this.highContrastMode) {
            this.scene.background = new THREE.Color(0x121212);
        } else if (!this.darkMode && !this.highContrastMode) {
            this.scene.background = new THREE.Color(0xf0f0f0);
        }
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const game = new Game();
    } catch (e) {
        console.error('Error initializing game:', e);
        const warning = document.createElement('div');
        warning.innerHTML = 'WebGL is not supported in this browser or an error occurred initializing the game.';
        warning.style.color = 'red';
        warning.style.padding = '20px';
        warning.style.textAlign = 'center';
        document.getElementById('game-board').appendChild(warning);
    }
});