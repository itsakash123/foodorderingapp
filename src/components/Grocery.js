import { ShoppingBag } from "lucide-react";

const Grocery = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-center">
      <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <ShoppingBag className="w-10 h-10 text-brand-500" />
      </div>
      <h1 className="text-3xl font-bold text-charcoal-900 mb-3">
        Grocery Store
      </h1>
      <p className="text-charcoal-500 text-lg leading-relaxed max-w-lg mx-auto">
        Our online grocery store is coming soon. Browse through a wide range of
        fresh products delivered right to your door.
      </p>
    </div>
  );
};

export default Grocery;
