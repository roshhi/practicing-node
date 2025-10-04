Practicing Node

A simple Node.js project that demonstrates how to create and run a basic HTTP server.

🚀 Description

This project creates a Node.js server that listens on port 4000.
When a user visits http://localhost:4000, the browser sends an HTTP request to the server.

The Node server receives the request, checks the requested URL, and:

If it’s / → responds by sending the index.html file.

Otherwise → responds with an error message (e.g., 404 Not Found).

🛠️ How to Run
node server.js


Then open your browser and go to:

http://localhost:4000

📁 Project Structure
practicing-node/
│
├── public/
│   └── index.html
│
├── server.js
└── .gitignore

📦 Features

Serves static HTML files.

Responds based on request URL.

Uses Node’s built-in http, fs, and path modules.

Would you like me to include how to add CSS and images handling in the README too?
