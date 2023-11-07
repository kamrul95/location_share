import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useCallback, useState } from "react";
import "./App.css";
import NewPlace from "./place/pages/NewPlace";
import UpdatePlace from "./place/pages/UpdatePlace";
import MainNavigation from "./shared/components/UIElements/Navigation/MainNavigation";
import { AuthContext } from "./shared/context/auth-context";
import Auth from "./user/pages/Auth";
import UserPlaces from "./user/pages/UserPlaces";
import Users from "./user/pages/Users";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = useCallback(() => {
    setIsLogin(true);
  }, []);

  const logout = useCallback(() => {
    setIsLogin(false);
  }, []);
  let routes;
  if (isLogin) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/add" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }
  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      <BrowserRouter>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
