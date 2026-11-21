<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b1020,100:6366f1&height=170&section=header&text=Floating%20Point%20Lab&fontColor=eef2ff&fontSize=40" width="100%" alt="Floating Point Lab banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=900&color=A5B4FC&center=true&vCenter=true&width=620&lines=See+IEEE+754+bits;Understand+rounding+and+ULP" alt="Animated tagline"/>
<p><strong>Explore binary32 and binary64 representations in your browser.</strong></p>
<img src="https://img.shields.io/github/license/CyberLoop-dev/floating-point-lab?style=flat-square" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/floating-point-lab?style=flat-square" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/floating-point-lab?style=flat-square" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/floating-point-lab?style=flat-square" alt="Last commit"/>
<br/><img src="./assets/mark.svg" width="90%" alt="Sign, exponent, and fraction fields"/>
</div>

## 🧭 Overview
Floating Point Lab converts a decimal input into its IEEE 754 binary32 or binary64 bit pattern. It displays the sign, exponent, fraction, decoded value, rounding error, and local ULP spacing.

## ✨ Features
- 🔢 Inspect 32-bit and 64-bit representations.
- 🧩 Separate sign, exponent, and fraction fields.
- 📐 Compare the stored value with the original input.
- 🧮 Estimate the ULP spacing at the selected magnitude.
- 🔒 Perform all calculations locally in the browser.

## 🎬 Demo
Start the app and try 0.1, 0.2, 0.3, or 16777217 in binary32 mode to see rounding behavior.

## 🚀 Quick Start
Requires Node.js 20 or newer.

```bash
npm start
```

Open http://127.0.0.1:4175. Run checks with npm test.

## 🧰 Tech Stack
- 🟢 Node.js built-in HTTP server
- 🌐 Browser JavaScript DataView API
- 🧪 Node.js built-in test runner

## 🗂️ Folder Structure
```text
public/       Bit inspector interface and conversion logic
test/         Representation tests
assets/       Original SVG artwork
.github/      CI workflow
server.js     Dependency-free static server
```

## 🛣️ Roadmap
- [ ] Add hexadecimal and binary input modes.
- [ ] Visualize neighboring representable values.
- [ ] Add special-value examples for infinities and NaN.

## 🤝 Contributing
Contributions are welcome. Keep conversions based on IEEE 754 primitives and add tests for normal, subnormal, and boundary values.

## 📄 License
MIT. See LICENSE.

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366f1,100:0b1020&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>
