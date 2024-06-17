# jubilant-octo-system

Issue Tracker
This is a simple Issue Tracker application demonstrating basic CRUD (Create, Read, Update, Delete) operations using a REST API server built with Node.js and Express, and a client-side application built with Vite and React.

Table of Contents
Technology Choices
Installation
Running the Application
API Design
Client Operations
Improvements
License
Technology Choices
Server: Node.js with Express
Client: Vite and React
HTTP Requests: Axios
Middleware: body-parser for JSON parsing, cors for handling cross-origin requests
Installation
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Server Setup
Clone the repository:


Copy code
git clone <repository-url>
cd issue-tracker/issue-tracker-server
Install server dependencies:


Copy code
npm install
Start the server:


Copy code
node server.js
Client Setup
Navigate to the client directory:


Copy code
cd ../issue-tracker-client
Install client dependencies:

Copy code
npm install
Start the Vite development server:


Copy code
npm run dev
Running the Application
Ensure the server is running on http://localhost:5001.
Open your browser and navigate to http://localhost:3000 to access the client application.
API Design
The API is designed with extensibility in mind, following REST principles. It includes the following endpoints:

POST /issues: Creates a new issue. Expects a JSON object and logs it.
GET /issues: Returns a static JSON object containing all issues.
PUT /issues/
: Updates an existing issue by ID. Expects a JSON object and logs it.
DELETE /issues/
: Deletes an issue by ID and logs the action.
Client Operations
The client application supports the following operations:

Create:

Enter a description for a new issue and click the "Create" button.
Sends a POST request to the server to create a new issue.
Read:

On load, the client fetches and displays the list of issues.
Sends a GET request to the server to retrieve issues.
Update:

Click the "Update" button next to an issue, edit the description, and save it.
Sends a PUT request to the server to update the issue.
Delete:

Click the "Delete" button next to an issue to remove it.
Sends a DELETE request to the server to delete the issue.
Improvements
While the application is functional, several improvements can be made:

Validation: Add validation on the server to ensure issue descriptions are not empty.
Persistent Storage: Integrate a database like MongoDB to store issues persistently.
Error Handling: Improve error handling in both the server and client to provide better feedback to users.
UI/UX Enhancements: Enhance the UI with better styling and add features like filtering and sorting issues.
License
This project is licensed under the MIT License. See the LICENSE file for details.

