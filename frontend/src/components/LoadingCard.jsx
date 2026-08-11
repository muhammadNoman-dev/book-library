function LoadingCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="h-72 bg-gray-200" />

      <div className="space-y-3 p-5">
        <div className="h-5 w-4/5 rounded bg-gray-200" />
        <div className="h-4 w-3/5 rounded bg-gray-200" />
        <div className="h-4 w-2/5 rounded bg-gray-200" />
      </div>
    </div>
  );
}

export default LoadingCard;