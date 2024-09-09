import { Router } from "react-router-dom";
import "./App.css"
import "./index.css";
import { Root } from "./routes/root";
import { Quotes } from "./features/quotes/Quotes";

const App = () => {
    return (
        <Router path="/">
            <Router
                path="/quotes"
                element={<Quotes>} 
            />

                    <Router />
                    )
};


                    export default App
