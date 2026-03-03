const Loader = () => {
  return (
    <div role="status" className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-brand-100" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-400 animate-spin" />
        </div>
        <span className="text-sm font-medium text-charcoal-400">Loading...</span>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
