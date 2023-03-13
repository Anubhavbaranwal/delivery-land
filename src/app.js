import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import AboutUs from "./components/Aboutus";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/login";
import Profile from "./components/Profile";
import UserContext from "./components/utils/Usercontext";
import { Provider } from "react-redux";
import Store from "./components/utils/Store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));
const AboutUs = lazy(() => import("./components/Aboutus"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Anubhav & utsav ",
    email: "Anubhavbaranwal08@gmail.com",
  });
  return (
    <Provider store={Store}>
      <UserContext.Provider value={{ user: user }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Aboutus",
        element: (
          <Suspense fallback={<h2>loading the page...</h2>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "Profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurnt/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); /* Assignment 2  */
