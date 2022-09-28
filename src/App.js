import Home from "./home/Home";
import SearchMovie from "./search/search";
import MoviePlay from "./moviePlay/moviePlay";
import Recommend from "./recoment/recommend";
import Genres from "./genres/genres";
import PageError from "./pageError/pagerror";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/mephim" element={<Home />} />
          <Route path="/search" element={<SearchMovie />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/genres/:id/:name" element={<Genres />} />
          <Route path="/play/:id" element={<MoviePlay/>} />
          <Route path="*" element={<PageError/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
