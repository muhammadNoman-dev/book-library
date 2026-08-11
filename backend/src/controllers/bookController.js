const bookService = require("../services/bookService");

async function getBooks(req, res) {
  try {
    const query = req.query.q || "fiction";

    const page = Math.max(
      parseInt(req.query.page, 10) || 1,
      1
    );

    const limit = Math.min(
      Math.max(parseInt(req.query.limit, 10) || 12, 1),
      24
    );

    const result = await bookService.getBooks(
      query,
      page,
      limit
    );

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch books",
      error: "BOOK_FETCH_FAILED"
    });
  }
}

module.exports = {
  getBooks
};