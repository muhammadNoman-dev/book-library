# 📚 Book Explorer

A full-stack web application that allows users to search and browse books and view their ratings.

# 🚀 Setup Guide

## 1. Prerequisites

Make sure the following are installed:

- Node.js 18+
- npm
- Git

Check the installed versions:

```bash
node --version
npm --version
git --version
```

---

## 2. Clone the Repository

```bash
git clone https://github.com/muhammadNoman-dev/book-library.git
cd book-library
```

---

# 🔧 Backend Setup

The backend:
1. Fetches books from Open Library.
2. Fetches ratings from Google Books.
3. Combines the data.
4. Provides a REST API for the frontend.

## Step 1: Navigate to Backend

```bash
cd backend
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Create `.env`

Inside the `backend` folder, create a file named `.env`:

```env
PORT=5000

OPEN_LIBRARY_BASE_URL=https://openlibrary.org

GOOGLE_BOOKS_BASE_URL=https://www.googleapis.com/books/v1

GOOGLE_BOOKS_API_KEY=YOUR_GOOGLE_BOOKS_API_KEY
```

Replace `YOUR_GOOGLE_BOOKS_API_KEY` with your Google Books API key.

---

# 🔑 Google Books API Key Setup

The application uses Google Books API to retrieve ratings.

1. Open Google Cloud Console.
2. Create or select a Google Cloud project.
3. Go to **APIs & Services → Library**.
4. Search for **Books API**.
5. Enable **Books API**.
6. Go to **APIs & Services → Credentials**.
7. Click **Create Credentials**.
8. Select **API Key**.
9. Copy the generated API key.
10. Add it to `backend/.env`.

Example:

```env
GOOGLE_BOOKS_API_KEY=AIzaSyxxxxxxxxxxxxxxxx
```

For security, restrict the API key to the **Books API**.

---

## Step 4: Start Backend

From the `backend` folder:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

---

## Step 5: Test Backend

Use a browser, Postman, or Thunder Client:

```text
http://localhost:5000/api/books?q=harry&page=1&limit=12
```

---

# 🎨 Frontend Setup

The frontend is responsible for:
- Displaying books
- Displaying covers
- Displaying authors
- Displaying ratings
- Searching
- Pagination
- Responsive UI

## Step 1: Open a New Terminal

Keep the backend running and open a second terminal.

```text
Terminal 1 → Backend
Terminal 2 → Frontend
```

## Step 2: Navigate to Frontend

From the project root:

```bash
cd frontend
```

If you are currently inside `backend`:

```bash
cd ..
cd frontend
```

## Step 3: Install Dependencies

```bash
npm install
```

## Step 4: Start Frontend

```bash
npm run dev
```

Vite should show:

```text
Local: http://localhost:5173/
```

Open:

```text
http://localhost:5173
```

---

# ▶️ Running the Complete Application

You need **two terminals**.

### Terminal 1 — Backend

```bash
cd book-library/backend
npm install
npm run dev
```

Backend:

```text
http://localhost:5000
```

### Terminal 2 — Frontend

```bash
cd book-library/frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Keep both terminals running while using the application.

---





