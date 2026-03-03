import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-brand-500" />
        </div>
        <h1 className="font-bold text-3xl text-charcoal-900 mb-2">
          Contact Us
        </h1>
        <p className="text-charcoal-500">
          {"We'd love to hear from you. Send us a message!"}
        </p>
      </div>

      <form className="bg-white border border-charcoal-100 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
              Message
            </label>
            <textarea
              className="w-full border border-charcoal-200 rounded-xl px-4 py-3 text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition min-h-32 resize-y"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
