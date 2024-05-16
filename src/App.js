import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register";
import Manga from "./Pages/Manga/Manga";
import Anime from "./Pages/Anime/Anime";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" name="Login Page" element={<LoginPage />} />
          <Route exact path="/home" name="Home Page" element={<HomePage />} />
          <Route
            exact
            path="/register"
            name="Register Page"
            element={<Register />}
          />
          <Route exact path="/manga" name="Manga Page" element={<Manga />} />
          <Route exact path="/manga" name="Manga Page" element={<Anime />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
