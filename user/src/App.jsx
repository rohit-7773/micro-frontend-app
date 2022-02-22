import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, useRoutes } from "react-router-dom";
const Header = React.lazy(() => import("home/Header"))
// const HomeRoutes = React.lazy(() => import("home/HomeRoutes"))


import "./index.css";
import UserRoutes from "./UserRoutes";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Suspense fallback={<h2>Loading...</h2>}> 
                    <Header />
                </Suspense>
                <hr />
                {/* <Suspense fallback={<h2>Loading...</h2>}> 
                    <HomeRoutes />
                </Suspense> */}
                <UserRoutes />
            </div>
        </BrowserRouter>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));
