import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { ShoppingCart, Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-charcoal-900">Your Cart</h1>
        {cartItems.length > 0 && (
          <button
            className="flex items-center gap-2 bg-white border border-red-200 hover:bg-red-50 text-red-500 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
            onClick={handleClearCart}
          >
            <Trash2 className="w-4 h-4" />
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-cream-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-brand-400" />
          </div>
          <h2 className="text-xl font-semibold text-charcoal-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-charcoal-500 mb-6">
            Add items from a restaurant to get started
          </p>
        </div>
      ) : (
        <div className="bg-white border border-charcoal-100 rounded-2xl p-6 shadow-sm">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
