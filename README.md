# Project 2: Random Number Generator

A React application demonstrating **state management with `useState`**, **event handling**, and **conditional rendering**.

## Features & Requirements Met

- **Functional React Component**: Built using standard React functional components with hooks (`RandomNumberGenerator.jsx`).
- **`useState` Hook**:
  - `randomNumber`: Stores the current generated random number (initially `null`).
  - `minRange` & `maxRange`: Stores the customizable range boundaries (defaults to `1` and `100`).
  - `history`: Tracks recently generated numbers
- **Generate Random Number Button**: Generates a new random number on every click.
- **Specified Range (1 to 100 default)**: Supports default 1–100 range with customizable min/max inputs and quick preset chips (1–10, 1–50, 1–100, 1–1000).
- **Conditional Rendering**:
  - Displays **"No number generated yet"** with an engaging placeholder icon prior to the first click.
  - Dynamically switches to render the generated number badge, even/odd indicator, and range metadata after generation.
  - Dynamically displays a "Reset" button to revert to the initial placeholder state.
- **Responsive & Modern Styling**: Card-based modern design with gradient accents, smooth pop animations, accessible contrasts, and dark mode support.

## How to Run the Project

1. Install dependenci
   ```ba
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

