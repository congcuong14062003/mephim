import { useEffect, useState } from "react";
import { movieTopRated } from "../API/api";
import MovieThumnail from "../movieThumnail/mobieThumnail";
import "./movietoprate.scss";
export default function MovieTopRatedContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(movieTopRated)
      .then((res) => res.json())
      .then((result) => setData(result.results));
  }, []);


  return (
    <div>
      <h3 className="title">Top đánh giá</h3>
      <div className="list-film-container">
        <ul className="list-new-film">
          {data &&
            data.map((item, index) => (
             <li key={index}><MovieThumnail dataThumnail = {item} /></li>
            ))}
        </ul>
      </div>
    </div>
  );
}
