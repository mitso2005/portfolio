const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-500 border-t-transparent"></div>
      <p className="mt-4 text-gray-600 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
