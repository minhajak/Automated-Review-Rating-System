# Automated Review Rating System

This is a full-stack web application that allows users to submit reviews and view them. The application features a machine learning backend that analyzes the review content.

## ✨ Features

-   **Automated Rating Prediction:** A Deep Learning (BiLSTM) model automatically predicts and assigns a star rating to a review based on its text content.
-   **Comprehensive Review Statistics:** The API provides aggregated data, including average rating, total number of reviews, and a count for each star rating.
-   **Sorting Functionality:** Retrieve reviews sorted by `newest` (default) or `oldest`.
-   **User Review Submission:** Users can write and submit their own reviews via the API.
-   **Review Feed:** Fetch a complete list of all submitted reviews and their details.
-   **REST API:** A Django REST Framework backend provides a robust API for the frontend.
-   **Modern Frontend:** A responsive and interactive user interface built with React and TypeScript.

## 📖 API Documentation

The API provides endpoints for submitting and retrieving reviews.

### 1. Post a Review

-   **Endpoint:** `/api/reviews/`
-   **Method:** `POST`
-   **Description:** Submits a new review. The `rating` is automatically predicted by the model based on the `body` text.
-   **Body (raw-JSON):**
    ```json
    {
        "author": "justin",
        "title": "comic publisher",
        "body": "in a few hundred words you learn less than you would from wikipedia skip it"
    }
    ```
-   **Success Response (201 CREATED):**
    ```json
    {
        "status": "success",
        "message": "Your review posted successfully!",
        "data": {
            "id": 9,
            "author": "justin",
            "title": "comic publisher",
            "body": "in a few hundred words you learn less than you would from wikipedia skip it",
            "rating": 1,
            "added_at": "2025-09-16T09:08:39.643548Z"
        }
    }
    ```

### 2. Retrieve All Reviews

-   **Endpoint:** `/api/reviews/`
-   **Method:** `GET`
-   **Description:** Retrieves a list of all reviews along with aggregated rating statistics.
-   **Query Parameters:**
    -   `sort`: Sorts the reviews. Can be `newest` (default) or `oldest`.
-   **Success Response (200 OK):**
    ```json
    {
        "average": 2,
        "totalRatings": 3,
        "breakdown": [
            { "stars": 3, "count": 1 },
            { "stars": 2, "count": 1 },
            { "stars": 1, "count": 1 }
        ],
        "reviews": [
            {
                "id": 12,
                "author": "justin",
                "title": "about books",
                "body": "im surprised that this novel won the national book award...",
                "rating": 3,
                "added_at": "2025-09-16T09:27:41.341503Z"
            }
        ]
    }
    ```

## 🚀 Tech Stack

### Backend

-   **Framework:** Django
-   **API:** Django REST Framework
-   **Machine Learning:** TensorFlow, Keras, Scikit-learn
-   **Database:** SQLite3 (development), supports MySQL
-   **Core Language:** Python

### Frontend

-   **Framework:** React.js
-   **Build Tool:** Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** Radix UI
-   **HTTP Client:** Axios
-   **Routing:** React Router

## 📂 File Structure

The project is organized into two main parts: a `backend` Django project and a `frontend` React application.

```
.
├── backend/
│   ├── backend/         # Django project settings
│   ├── review/          # Django app for reviews
│   │   ├── migrations/
│   │   ├── ml_models/   # ML model files
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── ml_model.py  # ML model loading and prediction logic
│   │   ├── models.py    # Django ORM models
│   │   ├── serializers.py # API serializers
│   │   ├── urls.py      # App-specific URLs
│   │   └── views.py     # API views
│   ├── manage.py        # Django management script
│   └── requirements.txt # Python dependencies
│
└── frontend/
    ├── public/
    └── src/
        ├── assets/
        ├── components/    # Reusable React components
        ├── features/      # Feature-specific logic
        ├── layouts/       # Main application layout
        ├── pages/         # Top-level page components
        ├── routes/        # Application routing setup
        ├── App.tsx        # Main App component
        └── main.tsx       # Application entry point
    ├── package.json       # Node.js dependencies
    └── vite.config.ts     # Vite configuration
```

## ⚙️ Configuration & Setup

To run this project, you will need to set up both the backend and frontend environments.

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a Python virtual environment:**
    ```bash
    python -m venv env
    source env/bin/activate  # On Windows, use `env\Scripts\activate`
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run database migrations:**
    ```bash
    python manage.py migrate
    ```

5.  **Start the development server:**
    (The server will run on `http://127.0.0.1:8000`)
    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    (The server will run on `http://localhost:5173`)
    ```bash
    npm run dev
    ```

## 📦 Deployment

### Backend

For production, it is recommended to use a production-grade WSGI server like Gunicorn or uWSGI behind a reverse proxy like Nginx. You should also switch the database from SQLite to a more robust database like PostgreSQL or MySQL.

1.  **Build the application:** There's no explicit build step for Django itself, but you'll need to configure your production server.
2.  **Serve with Gunicorn:**
    ```bash
    gunicorn backend.wsgi:application
    ```

### Frontend

1.  **Build for production:**
    This command will create a `dist` folder with optimized and minified static assets.
    ```bash
    npm run build
    ```

2.  **Serve the static files:**
    The contents of the `dist` folder can be served by any static file server (like Nginx) or integrated to be served directly by the Django backend.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
