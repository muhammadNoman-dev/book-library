# 📚 Book Library

A full-stack web application that allows users to search and browse books with ratings.

The application uses:

- **Open Library API** for book information
- **Google Books API** for book ratings
- **Node.js + Express** as the backend API aggregator
- **React** for the frontend UI

The backend combines data from both external APIs into a single clean API response consumed by the React application.

---

## ✨ Features

- 🔍 Search books by title, author, or keyword
- 📚 Browse books from Open Library
- ⭐ Display Google Books ratings and rating counts
- 🖼️ Display book covers
- 👤 Display authors
- 📅 Display publication year
- 📄 Pagination support
- 📱 Responsive UI
- 🔗 Backend API aggregation
- ⚠️ Graceful handling of unavailable ratings
- 🔐 API keys stored using environment variables

---

## 🏗️ Architecture

```text
                    ┌──────────────────┐
                    │      React       │
                    │    Frontend      │
                    └────────┬─────────┘
                             │
                             │ HTTP Request
                             ▼
                    ┌──────────────────┐
                    │  Node.js /       │
                    │  Express API     │
                    └────────┬─────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
        ┌─────────────────┐     ┌─────────────────┐
        │  Open Library   │     │  Google Books   │
        │      API        │     │      API        │
        │                 │     │                 │
        │ Book information│     │ Ratings         │
        │ Authors         │     │ Rating count    │
        │ ISBN            │     │ Book metadata   │
        │ Covers          │     │                 │
        └────────┬────────┘     └────────┬────────┘
                 │                       │
                 └───────────┬───────────┘
                             ▼
                    ┌──────────────────┐
                    │  Data Aggregator │
                    │  & Normalization │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Clean JSON API  │
                    └──────────────────┘
