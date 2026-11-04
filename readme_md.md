# Blockly Controller (YouTube Edition)

A lightweight, block-based visual programming interface built with [Google Blockly](https://developers.google.com/blockly) and the YouTube Iframe API. This application allows users to create logic flows for playing, pausing, adjusting volume, and optimizing performance for YouTube videos using a Scratch-like block interface.

![Version](https://img.shields.io/badge/version-1.0.0--beta-orange.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🌟 Key Features

- **Block-Based YouTube Control:** Seamlessly load, play, pause, and set the volume of YouTube videos using intuitive visual blocks.
- **Asynchronous Execution:** Support for `await`-style delay blocks (`Wait X seconds`), allowing custom sequencing of player commands.
- **Performance Optimization:** Automatically defaults video playback quality to low (`small`) to optimize network usage and system resources.
- **Real-Time Resource Monitoring:** Integrated status bar tracking browser memory consumption (on supported browsers) and video buffering percentages.
- **Modular Architecture:** Split into clean, decoupled files (`index.html` for UI/Blockly logic and `youtube-player.js` for lightweight player handling).

---

## 📁 File Structure

```text
.
├── index.html         # Main entry point: Layout, Blockly configuration, custom blocks
└── youtube-player.js  # Dedicated YouTube controller & performance monitoring helper
```

---

## 🚀 Getting Started

### Prerequisites

- A modern Web Browser (Google Chrome, Microsoft Edge, Safari, or Firefox).
- No server build steps are required. Live Server (VS Code Extension) or direct file opening works out-of-the-box.

### Installation & Usage

1. **Clone or Download the Repository:**
   Save both `index.html` and `youtube-player.js` into the same directory.

2. **Run via Live Server (Recommended):**
   - Open the directory in **Visual Studio Code**.
   - Click **Go Live** at the bottom right corner (ensure your browser is set to Chrome for full `performance.memory` metric support).

3. **Or Open Directly:**
   - Double-click `index.html` or drag-and-drop it into your preferred web browser.

---

## 🧩 Available Blocks

| Category | Block Name | Description |
| :--- | :--- | :--- |
| **Events & Control** | `🚩 When Start Clicked` | The execution trigger block for the block chain. |
| | `Wait [N] seconds` | Pauses workflow execution for a specified number of seconds. |
| **YouTube Operations** | `Play YouTube URL: [URL]` | Parses a YouTube URL/ID and initiates playback. |
| | `Pause YouTube Video` | Pauses the currently playing YouTube video. |
| | `Set Volume to [0-100]%` | Adjusts the player volume in real-time. |

---

## 💻 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Visual Programming Engine:** Google Blockly Core & JS Generator (via CDN)
- **Video Player Integration:** YouTube Iframe API

---

## 📋 Release Status & Roadmap

Current Status: **`v1.0.0-beta`**

### Upcoming Enhancements (v1.1.0 Roadmap)
- [ ] Seek functionality (jump to specific time `MM:SS`).
- [ ] Dynamic playback speed control (0.5x, 1.0x, 2.0x).
- [ ] Loop & Conditional logic blocks (If/Else depending on buffer status).
- [ ] Dark theme UI switch.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).