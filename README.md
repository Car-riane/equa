# Equa

A clean, minimal calculator built with vanilla HTML, CSS, and JavaScript. No frameworks, no libraries — just the fundamentals.

## Live Demo

> https://car-riane.github.io/equa/

---

## Features

- ➕ Addition, subtraction, multiplication, and division
- 🔢 Decimal number support (with duplicate decimal prevention)
- 🔗 Chained operations — calculate on the fly without pressing equals
- 📟 Two-line display showing current input and previous operation history
- ⚠️ Graceful error handling — division by zero and invalid inputs show `Error` instead of crashing
- 🔄 AC button resets the calculator to a clean state
- 🎯 Floating point precision handled up to 8 decimal places

---

## How to Run

No installation needed. Just open `index.html` in your browser:

```bash
# Clone the repo
git clone https://github.com/Car-riane/equa.git
cd equa

# Open in browser
open index.html       # macOS
start index.html      # Windows
xdg-open index.html   # Linux
```

---

## Project Structure

```
equa/
├── index.html   # Calculator layout and button structure
├── style.css    # Styling and layout
└── calc.js      # All calculator logic and event listeners
```

---

## How It Works

The calculator logic lives entirely in `calc.js` and is built around three pieces of state:

- `firstOperand` — the first number entered before an operator is pressed
- `operator` — the currently selected operator (`+`, `-`, `*`, `/`)
- `shouldResetDisplay` — a flag that controls whether the next number input starts fresh or appends

When an operator is pressed mid-calculation, the result is computed immediately and chained into the next operation. The `operate()` function wraps `calculate()` and rounds results to 8 decimal places to avoid floating point issues like `0.1 + 0.2 = 0.30000000000000004`.

---

## What I Learned

- Managing UI state with plain JavaScript (no frameworks)
- Handling edge cases like repeated decimals, division by zero, and chained operations
- Using `querySelectorAll` with `forEach` to attach events to multiple buttons efficiently
- Separating pure calculation logic (`calculate`) from display/state logic
- Floating point arithmetic quirks and how to work around them with rounding

---

## Built With

- HTML5
- CSS3
- Vanilla JavaScript

---

## Future Improvements

- Add keyboard support for number and operator input
- Add a backspace/delete button
- Add percentage (`%`) operator
- Write Jest tests for the `calculate` and `operate` functions
