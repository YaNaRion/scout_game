import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Quotes } from "../features/quotes/Quotes";
import { Counter } from "../features/counter/Counter";

const HelloWorld = () => {
    return (
        <div>
            Hello World
        </div >
    )
}

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" Component={HelloWorld} />
            <Route path="quote" Component={Quotes} />
            <Route path="counter" Component={Counter} />
        </>
    )
);

export default Router
