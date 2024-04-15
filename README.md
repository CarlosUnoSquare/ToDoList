# ToDo Challenge

### Overview
This project is a ToDo Challenge, featuring a .NET backend and a front end built with Angular. The application allows users to manage their ToDo items, including features such as creating, updating, and deleting ToDo items. Each ToDo item consists of a title, status, and a flag indicating whether it has been deleted or not.

### Features
- User authentication: Users can log in using the credentials `todo` (username) and `todo123` (password).
- CRUD operations for ToDo items: Users can create, read, update, and delete ToDo items.
- Integration with Cypress for end-to-end testing: Run the command `npm run e2e` to open Cypress and execute end-to-end tests.
- Integration with NGRX for state management of ToDo items.

### Backend
The backend of the application is built using .NET 8 and JWT 8.

### Frontend
The frontend of the application is built using Angular v17 and integrates NGRX for state management.

### Setup
1. Clone the repository.
2. Navigate to the backend directory and install the dependencies using nuget or just run the project.
3. Navigate to the frontend directory and install the dependencies using npm.

### Running Cypress Tests
To run the Cypress end-to-end tests, execute the following command:
```
npm run e2e
```
The tests are located on `ToDoList\Frontend\ToDoList\cypress\e2e\todo\todo.cy.ts`, it must be executed using the interface of Cypress.