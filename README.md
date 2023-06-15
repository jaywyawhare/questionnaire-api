# Questionnaire API

The Questionnaire API is a RESTful API built with Node.js, Express, and MongoDB. It provides endpoints to manage user authentication, test submission, and other related operations for a questionnaire application.

## Features:
- User authentication (signup, login)
- Edit user phone number
- Submit tests
- Ensure one response per user for each test

## Major Requirements:
- Node.js
- MongoDB

## Getting Started:
1. Clone the repository:
   ```bash
   git clone https://github.com/jaywyawhare/questionnaire-api.git
    ```
    
2. Install dependencies:
   ```bash
   cd questionnaire-api
   ```

3. Set up the environment variables:
   - Create a .env file in the root directory
   - Add the following environment variables to the file:
     DB_URI=<your-mongodb-connection-string>

4. Seed the test data:
   ```bash
   node seed.js
   ```

5. Start the server:
   ```
   docker build -t questionnaire-api .
   docker run -p 3000:3000 -d questionnaire-api
   ```
   The server will run on http://localhost:3000 by default.

6. Run tests:
   ```bash
   npm test
   ```

## API Endpoints:
- POST /api/signup - User signup
- POST /api/login - User login
- PUT /api/edit/phonenumber - Edit user phone number
- POST /submit-test - Submit a test response

## Contributing:
Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.

## License:
MIT
