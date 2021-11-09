import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Activities from "../pages/Activities";
// import { useAuth } from "../useContext/IsAuthContext";
import Homepage from "../pages/Homepage";
import Footer from "./Footer";
import Header from "./Header";

function Routes() {
  // const { setIsAuth } = useAuth();
  // const localstorageIsAuth = localStorage.getItem("isAuth");
  // useEffect(() => {
  //   if (localstorageIsAuth) {
  //     setIsAuth(true);
  //   }
  // }, []);
  return (
    <>
      <div className="wrapper" id="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/activities" component={Activities} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default Routes;
