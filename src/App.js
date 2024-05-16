import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import Register from "./Pages/Register";
import MangaList from "./Pages/Manga/MangaList";
import AnimeList from "./Pages/Anime/AnimeList";

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
          <Route
            exact
            path="/mangalist"
            name="Manga Page"
            element={<MangaList />}
          />
          <Route
            exact
            path="/animelist"
            name="Anime Page"
            element={<AnimeList />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
