import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "Farhan" }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },

  // Another way to handle 404 - page not found
  // {
  //   path: '/*',
  //   element: <PageNotFound/>
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// const Title = () => {
//     return ( <div>
//         <h1>Namaste React - Ep 3</h1>
//         <span>Test</span>
//         {/* <HeadingComponent/> */}
//     </div>
//      );
// }

// export default Title;

// const num = 210;

// // React Functional Component:
// const HeadingComponent = ()=>{
//     return (
//         <div className="container">
//             {/* Component composition */}
//             <Title/>
//             {Title()}
//             {num}
//             <h1>Namaste React Functional Component</h1>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Rendering Functional Components

// JSX - HTML/XML like syntax - JSX => React.createElement => JS Object => HTMLElement(render) // Babel does this

// const heading = React.createElement("h1", { id: "heading" }, "Hello, React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading); // object

// // Creating a nested element in react

// const parent = React.createElement(

//   "div",
//   { id: "parent", 'data-parent':'par' },
//   React.createElement(
//     "div",
//     { id: "child" },
//    [ React.createElement("h1", { id: "h1-heading" }, "I am an h1 hehe tag"),  React.createElement("h2", { id: "h2-heading" }, "I am an h2 tag")]
//   )
// );

// root.render(parent);
