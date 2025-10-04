# 🧠 Practicing Node

A simple Node.js project that demonstrates how to create and run a basic HTTP server.

## 🚀 Description
This project creates a **Node.js server** that listens on **port 4000**.  
When a user visits `http://localhost:4000`, the browser sends an HTTP request to the server.

The server:
- ✅ Serves `index.html` when the URL is `/`
- ❌ Returns a 404 error otherwise

## 🛠️ How to Run

```bash
node server.js
Then open:

arduino
Copy code
http://localhost:4000
📁 Folder Structure
pgsql
Copy code
practicing-node/
│
├── public/
│   └── index.html
│
├── server.js
└── .gitignore
📦 Features
Serves static HTML files

Handles different routes

Uses Node core modules (http, fs, path)

markdown
Copy code

---

### 🧠 **Markdown Syntax Quick Guide**

| Element | Syntax | Example |
|---------|--------|----------|
| Heading | `#`, `##`, `###` | `# Title` |
| Bold | `**text**` | **bold** |
| Italic | `*text*` | *italic* |
| Code (inline) | `` `code` `` | `node server.js` |
| Code block | ``` ```lang ... ``` ``` | ```js console.log('hi') ``` |
| List | `- item` or `1. item` | - first item |
| Blockquote | `> text` | > This is a quote |
| Link | `[text](url)` | [GitHub](https://github.com) |
| Image | `![alt](url)` | ![logo](image.png) |
| Horizontal line | `---` | --- |

---
