import { useEffect, useState } from "react";

import BookCard from "./components/BookCard";
import LoadingCard from "./components/LoadingCard";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

import { fetchBooks } from "./services/bookApi";

function App() {
  const [query, setQuery] = useState("hobbit");
  const [books, setBooks] = useState([]);

  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadBooks(
    searchQuery = query,
    currentPage = page
  ) {
    try {
      setLoading(true);
      setError("");

      const result = await fetchBooks(
        searchQuery,
        currentPage,
        12
      );

      setBooks(result.data);
      setPagination(result.pagination);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to load books. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  function handleSearch(value) {
    setQuery(value);
    setPage(1);
    loadBooks(value, 1);
  }

  function handlePageChange(nextPage) {
    setPage(nextPage);
    loadBooks(query, nextPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black">
              BookShelf
            </span>
          </div>
        </div>
      </header>

      <section className="px-6 pb-14 pt-16">
        <div className="mx-auto max-w-7xl text-center">

          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">
            Find books worth reading.
          </h1>
          <div className="mt-8">
            <SearchBar
              initialValue={query}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-gray-400">
              SEARCH RESULTS
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Books for "{query}"
            </h2>
          </div>
        </div>

        {error && (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">
            <p className="font-semibold text-red-700">
              {error}
            </p>

            <button
              onClick={() => loadBooks()}
              className="mt-4 rounded-xl bg-red-600 px-5 py-2 text-sm font-semibold text-white"
            >
              Try again
            </button>
          </div>
        )}

        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        )}

        {!loading && !error && books.length > 0 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                />
              ))}
            </div>

            {pagination && (
              <Pagination
                page={pagination.page}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}

        {!loading &&
          !error &&
          books.length === 0 && (
            <div className="rounded-3xl bg-white p-16 text-center shadow-sm">
              <div className="text-5xl">📚</div>

              <h3 className="mt-5 text-2xl font-bold">
                No books found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching for another title or author.
              </p>
            </div>
          )}
      </main>
    </div>
  );
}

export default App;