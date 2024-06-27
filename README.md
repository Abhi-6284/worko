Here is a `README.md` file that provides instructions on how to set up, run, and test the application.

### README.md

```markdown
# User Management API

This project is a user management API built using Node.js, Express, MongoDB, and Mongoose. It follows the MVC architecture pattern and includes layers for controllers, services, DAOs (Data Access Objects), and DTOs (Data Transfer Objects). It supports basic CRUD operations on users with authentication and validation.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Folder Structure](#folder-structure)

## Prerequisites
- Node.js (v14.x or later)
- MongoDB (local or cloud instance)
- npm (v6.x or later)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/user-management-api.git
    cd user-management-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Environment Variables
Create a `.env` file in the root directory of the project and configure the following environment variables:
```env
DB_URI=mongodb://localhost:27017/your-db-name
PORT=3000
AUTH_USERNAME=your-username
AUTH_PASSWORD=your-password
```

## Running the Application
1. Start the MongoDB server if it's not already running:
    ```bash
    mongod
    ```

2. Run the application:
    ```bash
    npm start
    ```

3. The API will be accessible at `http://localhost:3000`.

## API Endpoints
### Authentication
The API uses Basic Authentication. Provide the `AUTH_USERNAME` and `AUTH_PASSWORD` defined in your `.env` file as the username and password.

### User Endpoints
- **GET /worko/user**: List all users
    - Request: `GET /worko/user`
    - Response:
      ```json
      [
        {
          "id": "60b6c5f5f1d1d34b6c8e4f5a",
          "email": "user@example.com",
          "name": "John Doe",
          "age": 30,
          "city": "New York",
          "zipCode": "10001"
        }
      ]
      ```

- **GET /worko/user/:userId**: Get user details
    - Request: `GET /worko/user/:userId`
    - Response:
      ```json
      {
        "id": "60b6c5f5f1d1d34b6c8e4f5a",
        "email": "user@example.com",
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "zipCode": "10001"
      }
      ```

- **POST /worko/user**: Create a new user
    - Request: `POST /worko/user`
      ```json
      {
        "email": "user@example.com",
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "zipCode": "10001"
      }
      ```
    - Response:
      ```json
      {
        "id": "60b6c5f5f1d1d34b6c8e4f5a",
        "email": "user@example.com",
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "zipCode": "10001"
      }
      ```

- **PUT /worko/user/:userId**: Update user details
    - Request: `PUT /worko/user/:userId`
      ```json
      {
        "email": "user@example.com",
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "zipCode": "10001"
      }
      ```
    - Response:
      ```json
      {
        "id": "60b6c5f5f1d1d34b6c8e4f5a",
        "email": "user@example.com",
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "zipCode": "10001"
      }
      ```

- **DELETE /worko/user/:userId**: Soft delete a user
    - Request: `DELETE /worko/user/:userId`
    - Response:
      ```json
      {
        "id": "60b6c5f5f1d1d34b6c8e4f5a",
        "email": "user@example.com",
        "name": "John Doe",
        "age": 30,
        "city": "New York",
        "zipCode": "10001"
      }
      ```

## Testing
Unit tests are written using Jest. To run the tests, use the following command:
```bash
npm test
```

## Folder Structure
```plaintext
your-app/
│
├── controllers/
│   └── userController.js
│
├── dao/
│   └── userDAO.js
│
├── dtos/
│   └── userDTO.js
│
├── models/
│   └── User.js
│
├── services/
│   └── userService.js
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   └── userRoutes.js
│
├── app.js
├── config.js
└── package.json
```

## Contributing
Feel free to open issues or submit pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
```

This `README.md` provides comprehensive instructions for setting up, running, and testing the application, as well as a clear explanation of the folder structure and API endpoints. Make sure to replace placeholders like `https://github.com/your-repo/user-management-api.git` with actual information relevant to your project.