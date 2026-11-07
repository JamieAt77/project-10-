# Project-10

This project is a simple full-stack application built using Vite for the frontend and Express for the backend. The application retrieves a list of items from the backend API and displays them on the homepage.

## Project Structure

- `backend/`: Contains the Express server setup.
- `frontend/`: Contains the Vite React application.

### Backend

- `backend/server.js`: Starts the Express server.
- `backend/.env.example`: Example environment variables file.

### Frontend

- `frontend/vite.config.js`: Vite configuration file.
- `frontend/index.html`: Entry point for the Vite server.
- `frontend/src/main.jsx`: Main React component.
- `frontend/src/App.jsx`: Root component.
- `frontend/src/components/ListItems.jsx`: Component to display the list of items.
- `frontend/src/services/api.js`: API service to fetch items from the backend.

## Setup

### Backend

1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   npm start
   ```

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the Vite development server:
   ```sh
   npm run dev
   ```

## API Endpoints

- **GET /api/items**
  - Response: `{ items: [...] }`

## Usage

- The application will display a list of items retrieved from the backend API on the homepage.

## License

This project is licensed under the MIT License.
