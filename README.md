# Sentinent Extension

A Chrome extension that intelligently processes and analyzes web content using custom model parameters and IDF weighting, all while respecting your privacy.

---

## 🚀 Features

- **Real-Time Content Analysis:** Instantly processes web pages as you browse.
- **Custom Model Parameters:** Easily adjustable to fit your needs.
- **IDF Weighting:** Smarter content evaluation using Inverse Document Frequency.
- **Privacy-Focused:** All processing happens locally in your browser.

---

## 📦 Installation

1. **Clone or Download** this repository:
    ```bash
    https://github.com/08-Aryan/Sentiment_extension.git
    ```
2. Open **Google Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked**.
5. Select the folder where you cloned/downloaded this repository.

---

## 🛠️ Usage

- Once installed, the extension automatically processes and analyzes content on supported web pages.
- No additional configuration is needed. The extension uses the provided `model_params.json` and `idf_weights.json` for its analysis.

---

## 📁 File Structure

```
sentinent_extension/
├── background.js         # Handles background tasks and extension events
├── content.js            # Injected into web pages for content processing
├── idf_weights.json      # Stores IDF weights for analysis
├── model_params.json     # Contains custom model parameters
├── manifest.json         # Extension metadata and permissions
├── icons/                # Extension icons (if present)
└── README.md             # Project documentation
```

---

## 🤝 Contributing

Contributions are welcome!  






