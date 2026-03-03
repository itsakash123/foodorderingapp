import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (resId) fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      console.log("[v0] Fetching menu for resId:", resId);
      console.log("[v0] URL:", MENU_API + resId);
      const data = await fetch(MENU_API + resId);
      console.log("[v0] Response status:", data.status);
      const json = await data.json();
      console.log("[v0] Menu data received:", json?.data ? "yes" : "no");
      setResInfo(json.data);
    } catch (err) {
      console.log("[v0] Menu fetch error:", err.message);
      setError(err.message);
    }
  };

  return { resInfo, error };
};
export default useRestaurantMenu;
