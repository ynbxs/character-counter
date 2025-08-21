# ✏️ Character Counter (Stimulus Utility)

A reusable character counter component built with **StimulusJS** and **Bootstrap 5**.  
Perfect for textareas and inputs that require a live count and character limit feedback.

## 🚀 Live Demo
[View it on GitHub Pages](https://ynbxs.github.io/character-counter/)

## 🔧 Features
- Real-time character count
- Character limit
- Red alert style when limit exceeded
- Reusable Stimulus controller (utility component)
- Bootstrap 5 styling

## 🧩 Structure
- `index.html` – UI structure & Stimulus bindings
- `style.css` – Optional styles (e.g., red alert class)
- `lib/controllers/character_count_controller.js` – Stimulus logic
- `lib/index.js` – Stimulus setup

## 💡 How it Works
- A `textarea` input triggers `keyup->character-count#updateCounter`
- The controller updates a counter target with the current character count
- If the count exceeds 140, the counter turns red and displays the exceeded amount

## 📦 Technologies
- [StimulusJS](https://stimulus.hotwired.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- HTML5 & JavaScript (ES6)
