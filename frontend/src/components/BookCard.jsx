import Rating from "./Rating";

function BookCard({ book }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden bg-gray-100">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Cover
          </div>
        )}

      </div>

      <div className="p-5">
        <h2 className="line-clamp-2 text-lg font-bold text-gray-900">
          {book.title}
        </h2>

        <p className="mt-2 line-clamp-1 text-sm text-gray-500">
          {book.authors.join(", ")}
        </p>

        <div className="mt-4">
          <Rating rating={book.rating} />
        </div>
      </div>
    </article>
  );
}

export default BookCard;