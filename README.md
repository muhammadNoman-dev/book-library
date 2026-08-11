# 📚 Book Explorer

A full-stack web application that allows users to search and browse books and view their ratings.

The application uses:
- **Open Library API** for book information
- **Google Books API** for book ratings
- **Node.js + Express.js** as the backend API aggregator
- **React** for the frontend

---

## ✨ Features

- 🔍 Search books by title, author, or keyword
- 📚 Browse books from Open Library
- ⭐ Display Google Books ratings
- 📊 Display rating count
- 🖼️ Display book covers
- 👤 Display authors
- 📅 Display publication year
- 📄 Pagination
- 📱 Responsive UI
- ⚠️ Graceful handling of unavailable ratings
- 🔐 Environment variable configuration
- 🔗 Backend API aggregation

---

# 🛠️ Tech Stack

## Frontend
- React
- JavaScript
- Axios
- CSS

## Backend
- Node.js
- Express.js
- Axios
- dotenv

## External APIs
- Open Library API
- Google Books API

---

# 📁 Project Structure

```text
book-explorer/
│
├── backend/
│   ├── src/
│   │   ├── services/
│   │   │   ├── bookService.js
│   │   │   ├── googleBooksService.js
│   │   │   └── openLibraryService.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── app.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

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

**Important:** Never commit `.env` to GitHub because it contains your API key.

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

# 🔄 Application Flow

```text
User
 │
 │ Search "Harry Potter"
 ▼
React Frontend
 │
 │ GET /api/books?q=harry
 ▼
Node.js + Express Backend
 │
 ├──────────────────┐
 │                  │
 ▼                  ▼
Open Library      Google Books
 │                  │
 │ Book data        │ Ratings
 │ Authors          │ Rating count
 │ ISBN             │
 │ Cover            │
 └────────┬─────────┘
          │
          ▼
    Data Aggregation
          │
          ▼
    Clean JSON Response
          │
          ▼
    React Frontend
          │
          ▼
       Book Cards
```

---

# 🔗 Backend API

## Search Books

```http
GET /api/books
```

### Query Parameters

| Parameter | Required | Default | Description |
|---|---|---:|---|
| `q` | Yes | - | Search keyword |
| `page` | No | 1 | Page number |
| `limit` | No | 12 | Number of books per page |

Example:

```text
http://localhost:5000/api/books?q=harry&page=1&limit=12
```

---

# ⭐ Rating Logic

The backend uses the ISBN received from Open Library to search Google Books.

Google Books provides:
- Average rating
- Number of ratings

Example:

```json
{
  "rating": {
    "average": 4.7,
    "count": 15432
  }
}
```

If Google Books does not have a rating:

```json
{
  "rating": null
}
```

The frontend displays:

```text
No ratings yet
```

---

# ⚠️ Error Handling

If Google Books is temporarily unavailable:

```text
Open Library
      ↓
Books retrieved successfully
      ↓
Google Books
      ↓
Temporary API error
      ↓
rating = null
      ↓
Book is still displayed
```

A failure from Google Books does not prevent users from browsing books retrieved from Open Library.

---

# 🔐 Security

The Google Books API key is stored in backend environment variables:

```env
GOOGLE_BOOKS_API_KEY=YOUR_API_KEY
```

The `.env` file is excluded from Git using `.gitignore`.

Never commit your real API key to GitHub.

The repository should contain `.env.example` instead of the actual `.env` file.

---

# 📄 Environment Variables

```env
PORT=5000

OPEN_LIBRARY_BASE_URL=https://openlibrary.org

GOOGLE_BOOKS_BASE_URL=https://www.googleapis.com/books/v1

GOOGLE_BOOKS_API_KEY=your_google_books_api_key
```

---

# 🧪 Testing

The backend API can be tested using:
- Browser
- Postman
- Thunder Client

Example:

```text
http://localhost:5000/api/books?q=harry&page=1&limit=12
```

---

# 🐛 Troubleshooting

## `npm install` fails

Check Node.js:

```bash
node --version
```

Then:

```bash
npm install
```

## Backend does not start

```bash
cd backend
npm install
npm run dev
```

## Frontend does not start

```bash
cd frontend
npm install
npm run dev
```

## Google Books returns 429

A `429` response means the Google Books API quota has been exceeded.

Check:
- Google Cloud project
- Books API
- API key
- API quota

## Google Books returns 503

A `503 Service Unavailable` response means Google Books is temporarily unavailable.

The application handles this gracefully and can continue displaying books without ratings.

## Ratings are not displayed

Check:
1. Books API is enabled in Google Cloud.
2. The API key is valid.
3. `GOOGLE_BOOKS_API_KEY` exists in `backend/.env`.
4. The backend was restarted after changing `.env`.
5. The requested book has ratings available in Google Books.
6. The backend API response contains a `rating` object.

---

# 🚧 Future Improvements

- Book details page
- Search debouncing
- Advanced filters
- Sort by rating
- Sort by publication date
- Favorites/bookmarks
- Loading skeletons
- Automated tests
- API rate limiting
- Server-side caching
- Docker support
- CI/CD pipeline

---

# 👨‍💻 Author

**Muhammad Noman**

Full-Stack Software Engineer

---

## 📄 License

This project was created as a technical assignment.
