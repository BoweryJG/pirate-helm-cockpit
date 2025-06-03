# Pirate Helm Cockpit

An immersive 3D visualization of a pirate ship helm with retrofitted digital instrumentation, blending 200-year-old maritime aesthetics with luxury automotive gauges.

## Features

- First-person perspective from behind a weathered pirate ship helm
- Digital compass with iridescent aquamarine display
- Vintage performance gauges inspired by 1960s Shelby GT500 and Cartier design
- Dynamic environmental effects (mist, ship sway, atmospheric lighting)
- Interactive helm wheel rotation
- Real-time compass bearing updates
- Post-processing effects for cinematic quality

## Quick Start

### Simple Version
Open `helm-cockpit-3d.html` directly in your browser for the basic Three.js implementation.

### Advanced Version
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

## Project Structure

- `pirate-helm-concept.md` - Detailed design document
- `helm-cockpit-3d.html` - Standalone Three.js demo
- `src/main.js` - Advanced Three.js scene with post-processing
- `src/style.css` - HUD and UI styling

## Controls

- **Mouse drag** - Rotate camera view
- **Mouse wheel** - Zoom in/out
- **Click and drag on helm** - Rotate the ship's wheel

## Technologies

- Three.js for 3D graphics
- GSAP for smooth animations
- Vite for development bundling
- Custom shaders for atmospheric effects