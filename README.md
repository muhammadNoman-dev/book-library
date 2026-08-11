# 📚 Book Explorer

A full-stack web application that allows users to search and browse books and view their ratings.

The application integrates two external APIs:

- **Open Library API** — provides book information such as title, author, ISBN, cover, and publication year.
- **Google Books API** — provides book ratings and rating counts.

The Node.js backend acts as an **API aggregator**, combining data from both services into a single API response for the React frontend.

---

## ✨ Features

- Search books by title, author, or keyword
- Browse books from Open Library
- Display book covers
- Display authors and publication year
- Display Google Books ratings
- Display rating count
- Pagination
- Responsive design
- Graceful handling when ratings are unavailable
- Backend API aggregation
- Environment-based configuration

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- Axios
- CSS

### Backend

- Node.js
- Express.js
- Axios
- dotenv

### External APIs

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
│   │   │
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── app.js
│   │
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
│   │
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
