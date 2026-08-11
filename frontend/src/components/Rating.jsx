function Rating({ rating }) {
  if (!rating) {
    return (
      <div className="text-sm text-gray-400">
        No ratings yet
      </div>
    );
  }

  const stars = Math.round(rating.average);

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-amber-400">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= stars ? "★" : "☆"}
          </span>
        ))}
      </div>

      <span className="text-sm font-semibold text-gray-700">
        {rating.average.toFixed(1)}
      </span>

      <span className="text-xs text-gray-400">
        ({rating.count.toLocaleString()})
      </span>
    </div>
  );
}

export default Rating;