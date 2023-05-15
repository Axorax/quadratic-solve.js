<h1 align="center"><code>quadratic-solve.js</code></h1>

<p align="center">Solve quadratic equations</p>

## ⚙️ Installation

```js
npm i quadratic-solve
```

**CDN Links:**
- https://cdn.jsdelivr.net/npm/quadratic-solve@2.0.0/quadratic-solve.js
- https://www.unpkg.com/quadratic-solve@2.0.0/quadratic-solve.js

## 📖 Usage

#### ● Import

```js
// ES6
import quadraticSolve from "quadratic-solve";

// commonjs
const quadraticSolve = require("quadratic-solve");
```

#### ● Solve

```js
const solved = quadraticSolve(1, -4, 4); // arguments - (a, b, c)
console.log(solved);                     // output - [2, 2]
```

It will return `undefined` if there is no solution.

#### ● Verify

```js
const solved = quadraticSolve(1, -4, 4);             // arguments - (a, b, c)
const verified = quadraticSolve(1, -4, 4, [2, 2]);   // arguments - (a, b, c, [root1, root2])
const incorrect = quadraticSolve(1, -4, 4, [2, 3]);
console.log(verified);                               // output - True
console.log(incorrect);                              // output - False
```

---

[Support me on Patreon](https://www.patreon.com/axorax) — 
[Check out my socials](https://github.com/axorax/socials)