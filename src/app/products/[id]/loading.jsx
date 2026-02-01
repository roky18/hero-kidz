export default function Loading() {
  return (
    <div className="animate-pulse space-y-4 p-6">
      <div className="h-64 bg-gray-200 rounded-lg"></div>
      <div className="h-6 bg-gray-200 rounded"></div>
      <div className="h-6 bg-gray-200 rounded"></div>
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
