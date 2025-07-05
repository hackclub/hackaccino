# The Sparkling World

An immersive 3D web experience that lets you explore a beautiful universe filled with floating geometric objects, dynamic lighting, and interactive elements. Built with Three.js for smooth performance and stunning visuals.

## Live Demo

**[Experience The Sparkling World](https://tareq-khalil.github.io/The-Sparkling-World/)**

## Features

### Full 360° Navigation
- **Free Look Mode**: Click to enable pointer lock for complete mouse control
- **First-Person Movement**: Move naturally in any direction you're facing
- **Smooth Controls**: Intuitive WASD movement with adjustable speed
- **Vertical Movement**: Fly up and down with Q/Space and E/Shift keys

### Visual Effects
- **Starfield Background**: Thousands of twinkling stars create a cosmic atmosphere
- **Floating Objects**: 50+ animated geometric shapes in vibrant colors
- **Dynamic Lighting**: Moving colored lights that illuminate the world
- **Particle Systems**: Animated particles that respond to your movement
- **Interactive Explosions**: Click to create colorful explosion effects

### Interactive Elements
- **Real-time Lighting**: Point lights that move and change the scene atmosphere
- **Responsive Objects**: Geometric shapes that rotate and float organically
- **Click Effects**: Create explosion effects wherever you click
- **Adaptive Performance**: Smooth 60fps experience across devices

## Controls

### Navigation
- **Click anywhere** → Enter free look mode
- **Mouse movement** → Look around 360°
- **WASD** or **Arrow Keys** → Move forward/backward/left/right
- **Q** or **Space** → Move up
- **E** or **Shift** → Move down
- **Mouse wheel** → Adjust movement speed
- **ESC** → Exit free look mode

## Technology Stack

- **Three.js (r128)** - 3D graphics library
- **WebGL** - Hardware-accelerated 3D rendering
- **Pointer Lock API** - Full mouse control for 360° movement
- **Vanilla JavaScript** - Pure JS for optimal performance
- **CSS3** - Modern styling and animations
- **HTML5** - Semantic markup and canvas support

## Getting Started

### Prerequisites
- A modern web browser with WebGL support
- Internet connection (for Three.js CDN)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tareq-Khalil/The-Sparkling-World.git
cd The-Sparkling-World
```

2. Open `index.html` in your browser or serve it with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers with WebGL support

## Project Structure

```
The-Sparkling-World/
├── index.html          # Main HTML file with embedded JS/CSS
├── README.md           # This file
```

## Customization

### Adding New Objects
```javascript
const geometries = [
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.SphereGeometry(1.5, 32, 32),
    // Add your custom geometry here
    new THREE.TorusGeometry(1, 0.4, 16, 100),
    new THREE.CylinderGeometry(1, 1, 2, 32)
];
```

### Modifying Colors
```javascript
const colors = [
    0x00ffff, 0xff00ff, 0xffff00, 0x00ff00, 
    0xff0000, 0x0000ff, 0xff6600, 0x6600ff
    // Add your custom colors here
];
```

### Adjusting Performance
```javascript
for (let i = 0; i < 25; i++) { // Reduced from 50
    // Object creation code
}
// Reduce particle count
for (let i = 0; i < 500; i++) { // Reduced from 1000
    // Particle creation code
}
```

## Performance Optimization

### Recommended Settings
- **Object Count**: 25-50 objects for optimal performance
- **Particle Count**: 500-1000 particles depending on device
- **Light Count**: 2-4 dynamic lights for balanced visuals

### Mobile Optimization
The project automatically adjusts for mobile devices, but you can further optimize by:
- Reducing object complexity
- Lowering particle counts
- Using simpler materials
- Implementing level-of-detail (LOD) systems


## Repository Information

- **Repository**: [https://github.com/Tareq-Khalil/The-Sparkling-World.git](https://github.com/Tareq-Khalil/The-Sparkling-World.git)
- **Live Demo**: [https://tareq-khalil.github.io/The-Sparkling-World/](https://tareq-khalil.github.io/The-Sparkling-World/)
- **Author**: Tareq Khalil
- **Version**: 1.0.0
- **Last Updated**: 2025

