import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomeRoutes from "./HomeRoutes";

const UserRoutes = React.lazy(() => import("user/UserRoutes"))
import "./index.css";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isAuthenticated={isAuthenticated} />
        <hr />
        <HomeRoutes />
        <Suspense fallback={<p>Loding...</p>}>
          <UserRoutes isAuthenticated={isAuthenticated} authenticate={setIsAuthenticated} />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
