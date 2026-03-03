import { useEffect, useState } from "react";
import { MapPin, AtSign } from "lucide-react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  useEffect(() => {});

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="bg-brand-100 text-brand-600 text-xs font-bold px-2.5 py-1 rounded-full">
          Count: {count}
        </span>
        <span className="bg-cream-200 text-charcoal-600 text-xs font-bold px-2.5 py-1 rounded-full">
          Count2: {count2}
        </span>
      </div>
      <h2 className="font-semibold text-charcoal-900 text-lg">{props.name}</h2>
      <div className="flex items-center gap-2 text-charcoal-500 text-sm">
        <MapPin className="w-4 h-4" />
        <span>Bareilly</span>
      </div>
      <div className="flex items-center gap-2 text-charcoal-500 text-sm">
        <AtSign className="w-4 h-4" />
        <span>akashkumar</span>
      </div>
    </div>
  );
};

export default User;
