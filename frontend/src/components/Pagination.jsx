function Pagination({
  page,
  totalPages,
  onPageChange
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-12 flex items-center justify-center gap-4">
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="rounded-xl border bg-white px-4 py-2 font-medium disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Previous
      </button>

      <span className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="rounded-xl border bg-white px-4 py-2 font-medium disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;