import { useContext, useEffect, useState } from "react";
import ReastaurantCard, { withPromotedLabel } from "../ReastaurantCard";
import Loader from "./Loader";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { Search, Star, UtensilsCrossed, Truck } from "lucide-react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ReastaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.4983962&lng=80.2851556&str=all%20restaurants&trackingId=494733e7-52a0-6bcc-56d8-d2634456c5b9&submitAction=ENTER&queryUniqueId=7637b030-caa2-db2e-bbda-1428ce37468d"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(userContext);

  if (onlineStatus === false)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 text-2xl">!</span>
          </div>
          <h1 className="text-xl font-semibold text-charcoal-900 mb-2">
            {"You're Offline"}
          </h1>
          <p className="text-charcoal-500">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );

  return ListOfRestaurants.length === 0 ? (
    <Loader />
  ) : (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-cream-50">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-brand-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-brand-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* Left Column */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white border border-brand-200 rounded-full px-4 py-1.5 mb-6">
                <UtensilsCrossed className="w-4 h-4 text-brand-400" />
                <span className="text-brand-500 font-medium text-sm">
                  Fresh & Delicious
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal-900 leading-tight text-balance">
                Order Food with{" "}
                <span className="text-brand-400">Lightning Fast</span> Delivery
              </h1>
            </div>

            {/* Right Column */}
            <div className="flex-1 max-w-lg">
              <p className="text-charcoal-500 text-lg leading-relaxed mb-8">
                Discover the best restaurants around you. Browse menus, read
                reviews, and order your favorite meals delivered right to your
                doorstep.
              </p>
              <Link
                to="/grocery"
                className="inline-flex bg-charcoal-900 hover:bg-charcoal-800 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Feature Cards Preview */}
          <div className="mt-16 bg-cream-200/40 rounded-3xl p-8 lg:p-12 relative">
            <div className="absolute top-8 left-8 opacity-20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <ellipse cx="60" cy="60" rx="50" ry="58" fill="#C8D5E8" />
                <ellipse cx="40" cy="30" rx="15" ry="50" fill="#C8D5E8" transform="rotate(-15 40 30)" />
                <ellipse cx="80" cy="30" rx="15" ry="50" fill="#C8D5E8" transform="rotate(15 80 30)" />
              </svg>
            </div>
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <FeatureCard
                icon={<Search className="w-5 h-5" />}
                title="Search Restaurants"
                description="Find your favorite restaurants and cuisines near you"
              />
              <FeatureCard
                icon={<Star className="w-5 h-5" />}
                title="Top Rated"
                description="Discover highly rated restaurants with the best food"
              />
              <FeatureCard
                icon={<Truck className="w-5 h-5" />}
                title="Fast Delivery"
                description="Get your food delivered quickly right to your doorstep"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1 w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400" />
            <input
              type="text"
              data-testid="searchInput"
              className="w-full pl-12 pr-4 py-3 bg-white border border-charcoal-200 rounded-xl text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent transition"
              placeholder="Search for restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const filtered = ListOfRestaurants.filter((res) =>
                    res.card.card.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filtered);
                }
              }}
            />
          </div>
          <button
            className="bg-brand-400 hover:bg-brand-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            onClick={() => {
              const filtered = ListOfRestaurants.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
          <button
            className="bg-white border border-charcoal-200 hover:border-brand-300 text-charcoal-700 font-medium px-6 py-3 rounded-xl transition-colors"
            onClick={() => {
              const filterList = ListOfRestaurants.filter(
                (res) => parseFloat(res.card.card.info.avgRating) > 4.5
              );
              setFilteredRestaurant(filterList);
            }}
          >
            Top Rated
          </button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.card?.card?.info?.id}
              to={"/restaurants/" + restaurant.card.card.info.id}
            >
              {restaurant.card.card.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant.card.card.info} />
              ) : (
                <ReastaurantCard resData={restaurant.card.card.info} />
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl border border-charcoal-100 p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-1.5 mb-1 text-charcoal-400">
      <span className="w-3 h-3 rounded-full bg-red-300" />
      <span className="w-3 h-3 rounded-full bg-brand-200" />
      <span className="w-3 h-3 rounded-full bg-teal-300" />
    </div>
    <div className="mt-4 mb-2 text-brand-400">{icon}</div>
    <h3 className="font-bold text-lg text-charcoal-900 mb-1">{title}</h3>
    <p className="text-charcoal-500 text-sm leading-relaxed">{description}</p>
  </div>
);

export default Body;
