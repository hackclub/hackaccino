export class AudioManager {
    constructor() {
        this.isMuted = false;
        this.sounds = {};
        
        this.initSounds();
    }
    
    initSounds() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
        } catch (e) {
            console.warn('Web Audio API is not supported in this browser');
            return;
        }
        
        this.createSoundEffects();
    }
    
    createSoundEffects() {
        this.sounds.placePiece = () => {
            if (this.isMuted || !this.audioContext) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + 0.1);
        };
        
        this.sounds.invalidMove = () => {
            if (this.isMuted || !this.audioContext) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + 0.3);
        };
        
        this.sounds.win = () => {
            if (this.isMuted || !this.audioContext) return;
            
            const playNote = (freq, start, duration, type = 'sine', gain = 0.2) => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.type = type;
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + start);
                
                gainNode.gain.setValueAtTime(gain, this.audioContext.currentTime + start);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + start + duration);
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.start(this.audioContext.currentTime + start);
                oscillator.stop(this.audioContext.currentTime + start + duration);
            };
            
            playNote(523.25, 0, 0.2);
            playNote(659.25, 0.2, 0.2);
            playNote(783.99, 0.4, 0.4);
        };
        
        this.sounds.draw = () => {
            if (this.isMuted || !this.audioContext) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime);
            oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + 0.4);
        };
        
        this.sounds.reset = () => {
            if (this.isMuted || !this.audioContext) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(1200, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + 0.3);
        };
        
        this.sounds.undo = () => {
            if (this.isMuted || !this.audioContext) return;
            
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(500, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + 0.1);
        };
    }
    
    playPlacePiece() {
        if (this.sounds.placePiece) this.sounds.placePiece();
    }
    
    playInvalidMove() {
        if (this.sounds.invalidMove) this.sounds.invalidMove();
    }
    
    playWin() {
        if (this.sounds.win) this.sounds.win();
    }
    
    playDraw() {
        if (this.sounds.draw) this.sounds.draw();
    }
    
    playReset() {
        if (this.sounds.reset) this.sounds.reset();
    }
    
    playUndo() {
        if (this.sounds.undo) this.sounds.undo();
    }
    
    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }
}