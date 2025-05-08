# Todo List React UI

A modern, responsive React frontend for a Todo List application. This project works in conjunction with a Flask backend API to provide a complete Todo List solution.

## Features

- Create, read, update, and delete todos
- Mark todos as completed
- Add detailed descriptions to your todos
- Clean and intuitive user interface
- Responsive design that works on mobile and desktop

## Screenshots

![Todo List App Screenshot](https://via.placeholder.com/800x450.png?text=Todo+List+App)

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Backend API server (Flask)

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/franakol/react-todo-ui.git
cd react-todo-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure API endpoint

By default, the application is configured to connect to a backend API at `http://localhost:8000`. If your backend is running on a different URL, update the `API_URL` in `src/services/api.js`.

### 4. Start the development server

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

## Backend Setup

This frontend is designed to work with a Flask backend API. To set up the backend:

1. Clone the backend repository (if separate) or navigate to the backend directory
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Start the server: `python main.py`

The backend API will be available at [http://localhost:8000](http://localhost:8000).

## Project Structure

```
src/
├── assets/        # Static assets like images
├── components/    # React components
│   ├── TodoForm.jsx   # Form for adding new todos
│   ├── TodoItem.jsx   # Individual todo item component
│   └── TodoList.jsx   # List of all todos
├── services/      # API service functions
│   └── api.js         # Axios configuration and API calls
├── App.jsx        # Main application component
├── App.css        # Application-specific styles
├── index.css      # Global styles
└── main.jsx       # Application entry point
```

## API Endpoints

The application interacts with the following API endpoints:

- `GET /todos/` - Fetch all todos
- `GET /todos/{id}` - Fetch a specific todo
- `POST /todos/` - Create a new todo
- `PUT /todos/{id}` - Update a todo
- `DELETE /todos/{id}` - Delete a todo

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

The built application can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, or AWS S3.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
