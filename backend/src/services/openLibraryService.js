const axios = require("axios");
require("dotenv").config();

const openLibraryClient = axios.create({
  baseURL: process.env.OPEN_LIBRARY_BASE_URL,
  timeout: 10000,

  headers: {
    "User-Agent": `${process.env.APP_NAME} (${process.env.CONTACT_EMAIL})`,
  },
});

async function searchBooks(query, page = 1, limit = 12) {
  const response = await openLibraryClient.get("/search.json", {
    params: {
      q: query,
      page,
      limit,
      fields: [
        "key",
        "title",
        "author_name",
        "first_publish_year",
        "cover_i",
        "isbn",
      ].join(","),
    },
  });

  return response.data;
}

module.exports = {
  searchBooks,
};