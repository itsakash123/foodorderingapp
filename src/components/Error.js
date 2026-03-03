import { useRouteError, Link } from "react-router";
import { AlertTriangle, Home } from "lucide-react";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>
        <h1 className="text-4xl font-bold text-charcoal-900 mb-2">Oops!</h1>
        <h2 className="text-lg text-charcoal-500 mb-4">
          Something went wrong
        </h2>
        {err && (
          <p className="text-charcoal-400 mb-6 bg-cream-100 rounded-xl px-4 py-3 text-sm">
            {err.status}: {err.statusText}
          </p>
        )}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
