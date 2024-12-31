import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const routerErr = useRouteError();
    console.log('Router Error hook', routerErr);
    
    return (
        <div>
            <h1>Oops! Something went wrong....!</h1>
            <h2>{routerErr.status}:{routerErr.statusText}</h2>
            <h2>{routerErr.data}</h2>
        </div>
      );
}
 
export default PageNotFound;