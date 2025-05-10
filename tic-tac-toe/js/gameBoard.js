import * as THREE from 'three';

export class GameBoard {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.board = [];
        this.pieces = [];
        this.cellObjects = [];
        this.highlightedCell = null;
        this.winningCells = [];
        
        this.boardMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x3f51b5, 
            specular: 0x111111, 
            shininess: 30 
        });
        
        this.cellMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x7986cb, 
            specular: 0x222222, 
            shininess: 30,
            transparent: true,
            opacity: 0.9
        });
        
        this.highlightMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffeb3b, 
            specular: 0x222222, 
            shininess: 30,
            transparent: true,
            opacity: 0.8
        });
        
        this.winMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x4caf50, 
            specular: 0x222222, 
            shininess: 30,
            transparent: true,
            opacity: 0.8
        });
        
        this.xMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xff5252, 
            specular: 0x222222, 
            shininess: 30 
        });
        
        this.oMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x2196f3, 
            specular: 0x222222, 
            shininess: 30 
        });
        
        this.highContrastBoardMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x333333, 
            specular: 0xffffff, 
            shininess: 30 
        });
        
        this.highContrastCellMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x666666, 
            specular: 0xffffff, 
            shininess: 30,
            transparent: true,
            opacity: 0.9
        });
        
        this.highContrastXMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffffff, 
            specular: 0x222222, 
            shininess: 30 
        });
        
        this.highContrastOMaterial = new THREE.MeshPhongMaterial({ 
            color: 0xffff00, 
            specular: 0x222222, 
            shininess: 30 
        });
        
        this.createBoard();
    }
    
    createBoard() {
        const boardGeometry = new THREE.BoxGeometry(4, 0.5, 4);
        const boardMesh = new THREE.Mesh(boardGeometry, this.boardMaterial);
        boardMesh.position.set(0, -0.25, 0);
        boardMesh.receiveShadow = true;
        this.scene.add(boardMesh);
        
        const cellSize = 1;
        const cellGeometry = new THREE.BoxGeometry(cellSize, 0.1, cellSize);
        
        for (let row = 0; row < 3; row++) {
            this.board[row] = [];
            for (let col = 0; col < 3; col++) {
                const x = (col - 1) * cellSize;
                const z = (row - 1) * cellSize;
                
                const cellMesh = new THREE.Mesh(cellGeometry, this.cellMaterial);
                cellMesh.position.set(x, 0, z);
                cellMesh.receiveShadow = true;
                cellMesh.userData = { row, col, type: 'cell' };
                
                this.scene.add(cellMesh);
                this.board[row][col] = null;
                this.cellObjects.push(cellMesh);
            }
        }
    }
    
    placePiece(row, col, player) {
        if (this.board[row][col]) return false;
        
        const x = (col - 1);
        const z = (row - 1);
        
        let pieceMesh;
        
        if (player === 'X') {
            const xGroup = new THREE.Group();
            
            const cylinder1Geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16);
            const cylinder1 = new THREE.Mesh(cylinder1Geometry, this.xMaterial);
            cylinder1.rotation.z = Math.PI / 4;
            cylinder1.rotation.x = Math.PI / 2;
            xGroup.add(cylinder1);
            
            const cylinder2Geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16);
            const cylinder2 = new THREE.Mesh(cylinder2Geometry, this.xMaterial);
            cylinder2.rotation.z = -Math.PI / 4;
            cylinder2.rotation.x = Math.PI / 2;
            xGroup.add(cylinder2);
            
            pieceMesh = xGroup;
        } else {
            const torusGeometry = new THREE.TorusGeometry(0.3, 0.1, 16, 32);
            pieceMesh = new THREE.Mesh(torusGeometry, this.oMaterial);
            pieceMesh.rotation.x = Math.PI / 2;
        }
        
        pieceMesh.position.set(x, 0.3, z);
        pieceMesh.castShadow = true;
        pieceMesh.userData = { row, col, player };
        
        pieceMesh.scale.set(0.01, 0.01, 0.01);
        this.scene.add(pieceMesh);
        
        const targetScale = 1;
        const animateScale = () => {
            if (pieceMesh.scale.x < targetScale) {
                pieceMesh.scale.x += 0.1;
                pieceMesh.scale.y += 0.1;
                pieceMesh.scale.z += 0.1;
                requestAnimationFrame(animateScale);
            }
        };
        animateScale();
        
        this.board[row][col] = pieceMesh;
        this.pieces.push(pieceMesh);
        
        return true;
    }
    
    removePiece(row, col) {
        const piece = this.board[row][col];
        if (!piece) return;
        
        this.scene.remove(piece);
        this.board[row][col] = null;
        
        const index = this.pieces.indexOf(piece);
        if (index !== -1) {
            this.pieces.splice(index, 1);
        }
    }
    
    resetBoard() {
        for (const piece of this.pieces) {
            this.scene.remove(piece);
        }
        
        this.pieces = [];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                this.board[row][col] = null;
            }
        }
        
        for (const cell of this.cellObjects) {
            cell.material = this.cellMaterial;
        }
        
        this.winningCells = [];
    }
    
    highlightSelectedCell(row, col) {
        if (this.highlightedCell) {
            const prevCell = this.cellObjects.find(cell => 
                cell.userData.row === this.highlightedCell.row && 
                cell.userData.col === this.highlightedCell.col
            );
            
            if (prevCell) {
                const isWinningCell = this.winningCells.some(cell => 
                    cell.row === prevCell.userData.row && cell.col === prevCell.userData.col
                );
                
                prevCell.material = isWinningCell ? this.winMaterial : this.cellMaterial;
            }
        }
        
        const cell = this.cellObjects.find(cell => 
            cell.userData.row === row && cell.userData.col === col
        );
        
        if (cell) {
            cell.material = this.highlightMaterial;
            this.highlightedCell = { row, col };
        }
    }
    
    highlightWinningCell(row, col) {
        const cell = this.cellObjects.find(cell => 
            cell.userData.row === row && cell.userData.col === col
        );
        
        if (cell) {
            cell.material = this.winMaterial;
            this.winningCells.push({ row, col });
        }
    }
    
    setHighContrastMode(enabled) {
        for (const cell of this.cellObjects) {
            cell.material = enabled ? this.highContrastCellMaterial : this.cellMaterial;
        }
        
        for (const piece of this.pieces) {
            if (piece.userData.player === 'X') {
                if (piece.children) {
                    for (const child of piece.children) {
                        child.material = enabled ? this.highContrastXMaterial : this.xMaterial;
                    }
                }
            } else {
                piece.material = enabled ? this.highContrastOMaterial : this.oMaterial;
            }
        }
    }
    
    getCellObjects() {
        return this.cellObjects;
    }
}