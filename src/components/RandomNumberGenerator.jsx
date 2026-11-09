import React, { useState } from 'react';
import './RandomNumberGenerator.css';

/**
 * RandomNumberGenerator Component
 * Demonstrates:
 * 1. State management using useState hook
 * 2. Event handling on button click
 * 3. Conditional rendering (initial placeholder vs generated number)
 * 4. Dynamic UI updates and range configuration
 */
function RandomNumberGenerator() {
  // State 1: Store the generated random number (null initially before any click)
  const [randomNumber, setRandomNumber] = useState(null);

  // State 2: Configurable range (default: 1 to 100 as specified in requirements)
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(100);

  // State 3: History of recently generated numbers
  const [history, setHistory] = useState([]);

  // State 4: Quick trigger state to drive punchy CSS pop animation
  const [isAnimating, setIsAnimating] = useState(false);

  // Event Handler: Generates a random integer within [minRange, maxRange]
  const handleGenerate = () => {
    const min = parseInt(minRange, 10);
    const max = parseInt(maxRange, 10);

    if (isNaN(min) || isNaN(max)) {
      alert('Please enter valid numeric values for min and max range.');
      return;
    }

    if (min > max) {
      alert('Minimum range cannot be greater than Maximum range.');
      return;
    }

    // Formula: Math.floor(Math.random() * (max - min + 1)) + min
    const generated = Math.floor(Math.random() * (max - min + 1)) + min;

    // Trigger animation
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    // Update state dynamically
    setRandomNumber(generated);
    setHistory((prev) => [generated, ...prev.slice(0, 7)]);
  };

  // Event Handler: Reset generator state to initial
  const handleReset = () => {
    setRandomNumber(null);
    setHistory([]);
  };

  return (
    <div className="card-container">
      {/* Header */}
      <header className="card-header">
        <span className="badge">Project 2 • State & Conditional Rendering</span>
        <h1 className="title">Random Number Generator</h1>
        <p className="subtitle">
          Generate dynamic numbers within your desired range
        </p>
      </header>

      {/* Range Settings */}
      <section className="range-section">
        <div className="range-inputs">
          <div className="input-group">
            <label htmlFor="min-range">Min Range</label>
            <input
              id="min-range"
              type="number"
              value={minRange}
              onChange={(e) => setMinRange(e.target.value)}
              className="range-input"
            />
          </div>
          <span className="range-divider">to</span>
          <div className="input-group">
            <label htmlFor="max-range">Max Range</label>
            <input
              id="max-range"
              type="number"
              value={maxRange}
              onChange={(e) => setMaxRange(e.target.value)}
              className="range-input"
            />
          </div>
        </div>

        {/* Quick Range Presets */}
        <div className="preset-buttons">
          <button
            type="button"
            className={`preset-btn ${minRange == 1 && maxRange == 10 ? 'active' : ''}`}
            onClick={() => { setMinRange(1); setMaxRange(10); }}
          >
            1 – 10
          </button>
          <button
            type="button"
            className={`preset-btn ${minRange == 1 && maxRange == 50 ? 'active' : ''}`}
            onClick={() => { setMinRange(1); setMaxRange(50); }}
          >
            1 – 50
          </button>
          <button
            type="button"
            className={`preset-btn ${minRange == 1 && maxRange == 100 ? 'active' : ''}`}
            onClick={() => { setMinRange(1); setMaxRange(100); }}
          >
            1 – 100 (Default)
          </button>
          <button
            type="button"
            className={`preset-btn ${minRange == 1 && maxRange == 1000 ? 'active' : ''}`}
            onClick={() => { setMinRange(1); setMaxRange(1000); }}
          >
            1 – 1000
          </button>
        </div>
      </section>

      {/* Display Box with Conditional Rendering */}
      <section className="display-box" aria-live="polite">
        {randomNumber === null ? (
          // Case 1: Initial state before any number has been generated
          <div className="placeholder-state">
            <div className="dice-icon" aria-hidden="true">🎲</div>
            <p className="placeholder-message">No number generated yet</p>
            <span className="placeholder-subtext">Click the button below to pick a number</span>
          </div>
        ) : (
          // Case 2: Dynamic state when a number has been generated
          <div className={`number-result ${isAnimating ? 'animate-pop' : ''}`}>
            <span className="result-caption">Generated Number</span>
            <div className="result-value">{randomNumber}</div>
            <div className="result-tags">
              <span className={`tag ${randomNumber % 2 === 0 ? 'tag-even' : 'tag-odd'}`}>
                {randomNumber % 2 === 0 ? 'Even' : 'Odd'}
              </span>
              <span className="tag tag-range">
                Range: [{minRange} – {maxRange}]
              </span>
            </div>
          </div>
        )}
      </section>

      {/* Control Actions */}
      <section className="button-group">
        <button
          type="button"
          onClick={handleGenerate}
          className="btn-generate"
          id="generate-button"
        >
          <span className="btn-icon">⚡</span>
          Generate Random Number
        </button>

        {/* Reset button conditionally rendered when a number has been generated */}
        {randomNumber !== null && (
          <button
            type="button"
            onClick={handleReset}
            className="btn-reset"
            title="Reset to initial state"
          >
            ↺ Reset
          </button>
        )}
      </section>

      {/* Recent History Section */}
      {history.length > 0 && (
        <section className="history-section">
          <div className="history-title">Recent Numbers</div>
          <div className="history-chips">
            {history.map((num, index) => (
              <span key={`${num}-${index}`} className="history-chip">
                {num}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default RandomNumberGenerator;

