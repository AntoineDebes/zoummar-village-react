import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useAuth } from "../useContext/IsAuthContext";

function Routes() {
  const { setIsAuth } = useAuth();
  const localstorageIsAuth = localStorage.getItem("isAuth");
  useEffect(() => {
    if (localstorageIsAuth) {
      setIsAuth(true);
    }
  });
  return (
    <Switch>
      <Route />
    </Switch>
  );
}

export default Routes;
