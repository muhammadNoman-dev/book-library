const {
  searchBooks: searchOpenLibrary,
} = require("./openLibraryService");

const {
  findBookByIsbn,
} = require("./googleBooksService");


// Get the best ISBN from Open Library
function getIsbn(book) {
  if (!book.isbn || book.isbn.length === 0) {
    return null;
  }

  // Prefer ISBN-13
  const isbn13 = book.isbn.find(
    (isbn) => isbn.length === 13
  );

  return isbn13 || book.isbn[0];
}


// Generate Open Library cover URL
function getCoverUrl(book) {
  if (!book.cover_i) {
    return null;
  }

  return `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
}


// Convert Open Library + Google Books
// data into our own format
function normalizeBook(openLibraryBook, googleBook) {
  const googleInfo = googleBook?.volumeInfo || {};

  return {
    id:
      openLibraryBook.key?.replace("/works/", "") ||
      openLibraryBook.key,

    title:
      openLibraryBook.title ||
      googleInfo.title ||
      "Unknown title",

    authors:
      openLibraryBook.author_name ||
      googleInfo.authors ||
      ["Unknown author"],

    publishedYear:
      openLibraryBook.first_publish_year || null,

    coverUrl:
      getCoverUrl(openLibraryBook) ||
      googleInfo.imageLinks?.thumbnail?.replace(
        "http://",
        "https://"
      ) ||
      null,

    rating: googleInfo.averageRating
      ? {
          average: googleInfo.averageRating,
          count: googleInfo.ratingsCount || 0,
        }
      : null,

    description:
      typeof googleInfo.description === "string"
        ? googleInfo.description
        : null,

    categories:
      googleInfo.categories || [],

    googleBooksId:
      googleBook?.id || null,
  };
}


// Main function
async function getBooks(query, page = 1, limit = 12) {
  console.log(`Fetching Open Library → ${query}`);

  // 1. Get books from Open Library
  const openLibraryData =
    await searchOpenLibrary(
      query,
      page,
      limit
    );

  const books = openLibraryData.docs || [];

  // 2. Get Google Books rating
  const enrichedBooks = [];

  for (const book of books) {
    const isbn = getIsbn(book);

    let googleBook = null;

    if (isbn) {
      googleBook =
        await findBookByIsbn(isbn);
    }

    // 3. Merge both APIs
    const normalizedBook =
      normalizeBook(
        book,
        googleBook
      );

    enrichedBooks.push(normalizedBook);
  }

  // 4. Return final response
  return {
    data: enrichedBooks,

    pagination: {
      page,
      limit,
      total:
        openLibraryData.numFound || 0,

      totalPages: Math.ceil(
        (openLibraryData.numFound || 0) /
          limit
      ),
    },
  };
}


module.exports = {
  getBooks,
};