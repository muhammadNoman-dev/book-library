const axios = require("axios");
require("dotenv").config();

const googleBooksClient = axios.create({
  baseURL: process.env.GOOGLE_BOOKS_BASE_URL,
  timeout: 10000,
});

async function findBookByIsbn(isbn) {
  if (!isbn) {
    return null;
  }

  try {
    console.log(`Google Books API → ${isbn}`);

    const response = await googleBooksClient.get("/volumes", {
      params: {
        q: `isbn:${isbn}`,
        maxResults: 1,
        key: process.env.GOOGLE_BOOKS_API_KEY,
      },
    });

    const book = response.data.items?.[0];

    if (!book) {
      console.log(`No Google Books result → ${isbn}`);
      return null;
    }

    console.log("Google Books result:", {
      title: book.volumeInfo?.title,
      rating: book.volumeInfo?.averageRating,
      ratingsCount: book.volumeInfo?.ratingsCount,
    });

    return book;
  } catch (error) {
    console.error(
      `Google Books error → ${isbn}:`,
      error.response?.status,
      error.response?.data?.error?.message || error.message
    );

    return null;
  }
}

module.exports = {
  findBookByIsbn,
};