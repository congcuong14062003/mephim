import { useCallback, useEffect, useState } from "react";
import "./genres.scss";
import NavBar from "../navBar/navbar";
import Footer from "../footer/footer";
import Pagination from "../pagination/pag";
import MovieThumnail from "../movieThumnail/mobieThumnail";
import { useParams } from "react-router";
export default function Genres() {
  const id  = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const callbackFunctionPag = useCallback((pages) => {
    setPage(pages);
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7f06e99b6e01deabf93faac845dd9f5c&language=vi&page=${page}&with_genres=${id.id}`
    )
      .then((res) => res.json())
      .then((result) => setData(result.results));
  }, [id.id, page]);

  window.scrollTo(0, 0);
  return (
    <>
      <NavBar />
      <div style={{ width: "1200px", margin: "70px auto 0" }}>
        <h3 className="title">{id.name}</h3>
        <div className="list-film-container genres">
          <ul className="list-new-film">
            {data &&
              data.map((item, index) => (
                <li key={index}>
                  <MovieThumnail dataThumnail={item} />
                </li>
              ))}
          </ul>
        </div>
        <Pagination parentCallbackPag={callbackFunctionPag} />
      </div>
      <Footer />
    </>
  );
}
