import React ,{lazy,Suspense, useEffect,useContext,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/cart";
import Grocery from "./components/Grocery";

//chunking
//Code splitting
//Dynamic Bundling
//lazy loading
//on Demand Loading

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  
  const [userName, setUserName] = useState();
  //authentication
  useEffect(()=>{
    const data={
      name:"Akash Kumar"

    }
    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,//parent
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>
          Loading... 
        </h1>
        }><Grocery/></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element: <Cart/>
      }
      
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
