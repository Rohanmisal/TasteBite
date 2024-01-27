//import React, { Suspense, lazy } from "react";
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import {Outlet, createBrowserRouter} from "react-router-dom";
import RestaurantMenu from './components/cards/RestaurantMenu';
import Error from "./components/Error.jsx";
//import Profile from "./component/Profile";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";
import Cart from "./components/Cart.jsx";

function App() {

  return (
    <>
    <Provider store={store}>
      <Header/>
      <Outlet/>
      <Footer/>
      </Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
     
    ]
  }
])

export default appRouter
