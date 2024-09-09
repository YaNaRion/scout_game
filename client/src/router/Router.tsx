import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements,
} from "react-router-dom";
import Root from "../routes/root";

export const RouterNested = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <div>hello world</div>
        </Route>
    )
)


createRoot(document.getElementById("root")).render(
    <RouterProvider router={RouterNested} />
);

