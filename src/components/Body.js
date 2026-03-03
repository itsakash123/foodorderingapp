import { useContext, useEffect, useState } from "react";
import ReastaurantCard, { withPromotedLabel } from "../ReastaurantCard";
import Loader from "./Loader";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";


const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(ReastaurantCard);
  // console.log("body rendered",ListOfRestaurants)
  //Normal JS variables
  // let ListOfRestaurants = []
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=26.4983962&lng=80.2851556&str=all%20restaurants&trackingId=494733e7-52a0-6bcc-56d8-d2634456c5b9&submitAction=ENTER&queryUniqueId=7637b030-caa2-db2e-bbda-1428ce37468d"
    );

    const json = await data.json();

    //optional chaining
    setListOfRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );
  //conditional rendering->rendering acc to condition

  const { loggedInUser, setUserName } = useContext(userContext);
  return ListOfRestaurants.length === 0 ? (
    
    <Loader/>
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid ="searchInput"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter restaurant

              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) 
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-3 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterList = ListOfRestaurants.filter(
                (res) => parseFloat(res.card.card.info.avgRating) > 4.5
              );
              //console.log("Filtered Top Rated:", filterList);

              setFilteredRestaurant(filterList); // ✅ Updating filteredRestaurant, NOT ListOfRestaurants
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName: </label>
          <input
            className="border border-black px-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map(
          (
            restaurant // you have to always give a key during mapping so that it will not render every restaurant card
          ) => (
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
          )
        )}
      </div>
    </div>
  );
};
export default Body;
