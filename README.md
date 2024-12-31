## React: 🚀

### Introduction to React

#### What is React?

React is a JavaScript library for building user interfaces. It's used for creating reusable UI components and managing
state changes in the application.

## Episode - 1 | Inception 🚀

_React DOM_ - Bridges the gap between react and browser to manipulate DOM.

# Basic React - hello world code Example

    const heading = React.createElement('h1', {}, 'Hello, React!');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);

_React Element_ is created using createElement(heading), it is an object (_not an html element_)

We cannot create tags like this as it is painful and takes time, hence we have an easier way known as \*_JSX_

_Root.render_ - replaces everything inside the root if there is any element.

## Episode - 2 | Igniting our App 🚀

_npm_ - A repo for all the packages (a.k.a dependencies).

_package.json_ - A configuration for our app npm.

_bundler_ - Bundling(html/css/JS) - cleaned, chunking, compressed, minified - basically bundles our app eg: _webpack, parcel, vite_

# To install parcel

    - npm install -D parcel (Here -D means dev dependency, there is another normal version too for production)
    -  "parcel": "^2.12.0" (here, caret - ^ means upgrade to a minor version if there is any) - *Recommended*
    -  "parcel": "~2.12.0" (here, tilde - ~ means upgrade to a major version if there is any).

_package-lock.json_ - keeps a track of the exact version of all the dependencies.

_node_modules_ - like a database for our dependencies.

_transitive dependencies_ - parcel can have its own dependencies too (_babel_), and in turn those dependencies can have dependencies too and hence this is known as transitive dependencies.

_npm vs npx_ - installing a package vs executing a package without installing.

_React via CDN_ - Bad practice, heavy network calls, version issues since URL is hardcoded with a version number that would be required to change whenever there is a latest version of react.

_React as a package via node_modules_ - Easier, available at your fingertips, no network calls, version is managed by package.json

_parcel_ - A _bundler_ -
It does -> _Dev builld_ - _local server_, - _HMR_ (Hot Module Replacement) -> Refreshes when we use update any file and uses file watching algorithms to implement this. - _Caching_ - Faster Builds - _Image optimizaton_ - _Minification_ - _Compressing_ - _Consistent Hashing_ - _Code Splitting_ - _Differential Bundling_ - to support older browsers - _Diagnostics_ - _Error handling_ - _HTTPS_ - _Tree Shaking_ - remove unused codes. - _Different dev and production bundles_

## Episode - 3 | Laying the Foundation 🚀

_npm run start === npm start_ - setting start and build command within parcel.
_React vs JSX_ - Both are different - React elements can be created without _JSX_
_JSX_ - A syntax extension for JavaScript, syntax sugar for React.createElement() - _JS_ - It looks like HTML but its not. - It is transpiled so that the JS engine in the browser can understand with normal core JS using _babel & parcel_ - Attributes in JSX should be in camelCase. - JSX also saves us from Cross-site scripting attack by sanitizing data.
_Babel_ - Converts JSX to native JS code - Powerful package - Transpiler - Also translates modern ES6+ JS code for unsupported older browsers

_React Component_ - Anything can be a component - a button, header, footer, cards etc.
Two types of Components -> _Class Based & Function based_

_Functional Components_ - A function that returns _JSX_ (React Element)
_Component Composition_ - Composing two or more components together.
_Expressions in JSX_ - With just _{}_ and anything within this is an expression.
_Calling functions in JSX_ - It is possible -> {Title()} since functional components are functions in the end.

## Episode - 4 | Talk is Cheap, Show Me the Code 🚀

- App designing....

_Props_ - Just like normal function arguments  
 - When you want to pass the dynamic data to the components - Say hello to _Props_

_Config Driven UI_ - A website UI driven by Data
_using Map_ - to loop re-usable components
_passing keys_ - to uniquely identifying looping elements if not given, react always re-renders everything (like humans forget password, type all over again) - Not recommended to use index from the map/forEach as it messes up the re-ordering issues.

## Episode - 5 | Let's Get Hooked 🚀

_Why React?_ - Makes your developer experience easier and faster (DOM Manipulation, Virtual DOM, Diff Algo, Reconciliation) - Write less code - Optimization

_Folder Structure_ - React has no opinions on folder structure, but best to follow industry standards. -  

_Two types of Export/Import_
_Unnamed/Default Export/import_  -> <Recommended for components> - Exporting components at once - export default Component;
import component from "<path>";
_named Export/import_ - Exporting all components from a single file. - export const Component;
import {component} from "<path>";
**NOTE** - Combination of both unnamed and named export/import is also possible.

_Event Handlers_ - <button
className="filter-btn"
onClick={()=> {
console.log("Clicked");
}} >Filter</button> - Using arrow function to pass the event handler function to the component.

_React Hooks_ - A normal JS utility function given by **React** with super-powers.
_useState()_ - To create and store the _state_ variable in functional components to maintain the state. - Whenever state is updated/changed in react, it re-renders that component - To keep the state/Data Layer in sync with the UI Layer

_Reconciliation Algorithm_

- React creates a copy of DOM known as - **Virtual DOM(Representation of an actual DOM)**
  _Virtual DOM (Object representation in JavaScript)_
  - All JSX (html like syntax) which is a react element inside which is an object in the Virtual DOM.
    _Diff Algorithm_
  - Once there is a change in the state, it finds the difference between the old virtual DOM and the updated Virtual DOM.
  - And based on this difference, it updates the **ACTUAL DOM**

_React Fiber_ - React Fiber is the re-implementation of React’s core algorithm introduced in React 16. It allows React to break down rendering work into smaller units, enabling better control over rendering and the ability to pause, resume, or abort work. - It provides a more flexible, incremental rendering mechanism.

## Episode - 6 | Exploring the World 🚀

_Monolith vs Microservices_

- Monolith: All the services(auth, api, db, sms) are bundled together in a single application.
- Microservices: Each service is a separate application and communicates with each other using APIs.

Traditional Way: Load -> APIs -> Render
Another way (React uses): Load -> Render -> API -> Render

_useEffect()_ - To handle side effects like API calls, DOM manipulation, etc. - It is used to fetch data from the server and update the state of the component.
Syntax: useEffect(callback, dependency array) - **It is called when a component is rendered/render cycle is completed**

_CORS Policy_ - When a browser blocks calling of one origin from another origin (**Swiggy API and localhost**)

_Swiggy API Call_ - Done with making res list api call from Swiggy

_Shimmer UI_ - Skeleton for loading

_Conditional Rendering_ - Rendering based on the conditions

_Render_ - If there is any update of data done via useState, react re-renders that entire component _(reconciliation cycle)_ and diff algo finds the difference
and updates that particular element

**_Working on the typehead feature and Search button_**

## Episode - 7 | Finding the Path 🚀

**More useEffect (Dependency Array)** -> - If no dependency array (optional param in useEffect) -> useEffect is called on render of a component. - If there is an empty dependency Array, useEffect is called on inital render of a component and just once. - If there is a dependency Array, everytime that value is changes, react re-renders components. - We can return a function inside this hook and is called after component is removed from the DOM (similar to unmounting): eg: setInterval() - We cannot use async function in useEffect callback

**useState** (Best practices) -> - Always call it within the functional components since its a local state variable for the same. - Avoid using it within the if/else condition - for - loops - functions as it would create incosistency

**React Router**

- First we define configuration by importring **createBrowserRouter()**;
- Then we define an array fo path and its respective element as the arguments
- Here comes **RouterProvider** will provide config to our application
- For 404 not found page, we can use a hook called useRouteError to show specific error messages

  **_Children Routes_** - Routes can have children routes as well as we do not want to replace everything
  when a route is changed, for eg: Header, footer (visible in all paths)

  **_Outlet_** - It is like a tunnel; it will be filled with the children according to the path on what page we are. - Used in place of Body element since it is dynamic as per the path - Renders the child route's element, if there is one.

  **_Link_** - To navigate to the different page (its just replacing on the same page) without reload. - Same as anchor tag but instead of **href**, here it is **to**
  **Tip:** - Never use anchor tag in react to route to a different page.
  why? - Because it refreshes the whole page.

**Single Page Applications** - Only one page with the exchange of components

**Types of Routing** - Client side routing (Which react uses with no networkc calls) - Server side routing (Network calls based on the page request to be loaded)

**Dynamic Routing** - define dyanmic routing with ':id';
For eg: path: '/restauarants/:resid', here **_:resid_** will be dynamic for each restuarant.

**GrpahQL** - Queries the data, solves the overfetching of the data
**useParams** - Returns an object with the parameters passed in the URL
**useNavigate** - Returns a function to navigate to a different page
**useLocation** - Returns the current location of the page
**useRouteError** - Returns the error message for the 404 not found page

## Episode - 8 | Let's get Classy 🚀

- Class method has a piece of class which has render method that returns JSX
- Passing props to a class based component via **constructor super props**
- this.state (**_reserved keyword_**) variable which is a big object in React - best place is inside the contrusctor where an instance is created whenever the class component is mounted
- Updating the state variables (never update the states directly) -> **this.setState({})**

  > LifeCycle Methods of React Class based Components

  1. **ComponentDidMount** - triggered after component is loaded or rendered/mounted (**for one children**)
     - For parents with multiple children
       > use case: API Calls since it follows load-> render -> API call -> render

## React has 2 phases:

     1. **Render Phase** -> Pure and has no side-effects, maybe paused or aborted by React. (**constructor and render method is called here**)
     2. **Commit Phase** -> Can work with DOM, run side effects and schedule updates. Updated in single Batch.

    ## Mounting Cycle
    1. *ComponentDidMount* - called after constructor and render method is done calling.

    ## Updating Cycle
    2. *ComponentDidUpdate* - called after state variable is updated with a new data (eg:API call)

    ## UnMounting Cycle
    3. *ComponentWillUnmount* - called when component is unmounted i.e. removed from the DOM.

## Episode - 9 | Optimizing our App 🚀

**_Single Responsibility Principle_**

- Each component should have only one responsibility

**_Custom Hooks_**

- Custom hooks are reusable pieces of code that can be used in multiple components.
- They are used to abstract away complex logic and make it reusable.

**_Optimization_**

- Code splitting
- Lazy loading
  - using lazy function to lazy load components
  - eg: const Grocery = lazy(() => import("./components/Grocery"));
- Chunking
- Dynamic bundling
- On Demand loading
- Dyanmic import

**_Suspense Compoennt_** - Suspense is a component that allows us to handle loading states in React. - It can be used to display a fallback component while a component is being loaded. - It can be used to display a loading state while a component is being loaded. - It can also be used to handle errors and display an error message.

## Episode - 10 | Jo Dikhta Hai, Vo Bikta Hai 🚀

    Styling components in many ways.
        1. SASS/SCSS
        2. CSS
        3. Styled Components
        4. Tailwind CSS
        5. Material UI
        Many more....

    ##Install Tailwind
     - Tailwind css uses postcss behind the scenes to transform CSS with JavaScript.

- Conversion of normal css to tailwind

## Episode - 11 | Data is the New Oil 🚀

> Higher Order Components

    - Takes a component, enhances it and returns a component
    - Used to abstract away complex logic and make it reusable
    - Created Restaurant promoted label with Restuarant card
    - They are pure functions

> Pure Functions

- They always return the same output given the same inputs
- They have no side effects
- They are predictable and easy to test
- They are immutable
- Not all higher order functions are pure

> React Dev Tools :
- React Dev Tools is a browser extension that allows you to inspect and debug React components in your application
  Left side - UI layer | Right side - Data Layer

> Lifting the Stats up
- When you need to share data between components, lift it up to the parent component.
- This is a good practice because it makes the code more predictable and easier to debug.

> Controlled vs Uncontrolled Components
- Controlled Components: The component's state is controlled by the parent component.
- Uncontrolled Components: The component's state is controlled by the component itself.

> Props Drilling
- Props drilling is a technique used in React to pass props from a parent component to a child component
- It is used to avoid lifting the state up to the parent component.

> React Context
- A global space to keep the data and be accessible for all the components of your app
- Because of the issue in prop drilling down in so many components, react context comes to the picture.
- createContext() is the utility function that helps us create the context.
- useContext() - A hook that is used to access the created context in any component.
- In class based components, to consume a context, we can use UserContext.Consumer (since we do not have any hooks)
- To update a context value and notify all the other components about the update value, we can use UserContext.Provider



## Episode - 12 | Let's Build our store 🚀

 > Redux Toolkit: 
  - A predictable state container for JS Apps (not exclusive to react)
  - A big JS object kept in a Global centralized place
 > Slice: 
  - A piece of the redux store (Cart data)
  - Writing the data in redux
    For example -> when we need to update cart items (Add to cart), we should not update it directly instead
    **dispatch** an action for the same and calls a function known as **reducer** (a function that will update the cart)
  - Reading the data from the redux
    For example -> to read the data and updated cart items count we need a **selector** (subscribing to the store)

    Note: **Selector, dispatch is a hook**

  > Steps and info: 
  1. Create a add store (configureStore())
  2. Add a provider as a wrapper to your main app.
  3. Create a slice (each slice will have its own reducer) by addind actions and reducer and hence exporting it.
  4. Add the created slice to your store
  5. Reducer (one main reducer) can have multiple reducers (cart reducer has multiple reducer functions)
  6. Old redux -> cannot mutate the state vs New Redux Toolkit -> can mutate the state (internally redux is handling the 
    immutability using immer.js).
  7. No need to return the state, you can either mutate the state or return the empty state

  > Few interview questions/tips on Redux: 
  - Make sure you subscribe to the right portion of the store - otherwise it's a performance loss.
  - Make sure you don't dispatch the same action multiple times - otherwise it's a performance loss.


  
  

# Food Ordering App

/\*
Header - Logo - Nav items

    Body
        - Search
        - Restaurant Container
            - Restaurant Cards
                - Image
                - Name of the restaurant
                - Rating Star
                - Cuisine
                - Delivery Timer
    Footer
        - Copyrights
        - Links
        - Address
        - Contact


\*/



// Color theme
/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePurple: '#800080', // Your base purple
        themePink: '#fde6f3',   // Example pink (you can customize this)
        shadowPink: '#eed1ed'
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Make sure to retain the base styling
  },
  // Add custom utility classes
  safelist: [
    {
      pattern: /line-clamp/,
    },
  ],
}

