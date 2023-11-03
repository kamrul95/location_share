import {
  BrowserRouter, Route,
  Routes
} from "react-router-dom";

import "./App.css";
import NewPlace from "./place/pages/NewPlace";
import UpdatePlace from "./place/pages/UpdatePlace";
import MainNavigation from './shared/components/UIElements/Navigation/MainNavigation';
import Auth from "./user/pages/Auth";
import UserPlaces from "./user/pages/UserPlaces";
import Users from "./user/pages/Users";
function App() {
  return (
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:userId/places" element={<UserPlaces />} />
            <Route path="/places/add" element={<NewPlace />} />
            <Route path="/places/:placeId" element={<UpdatePlace />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
