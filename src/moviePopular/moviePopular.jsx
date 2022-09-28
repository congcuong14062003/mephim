import { useEffect, useState } from "react";
import { moviePopular } from "../API/api";
import MovieThumnail from "../movieThumnail/mobieThumnail";
export default function MoviePopularContainer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(moviePopular)
      .then((res) => res.json())
      .then((result) => setData(result.results));
  }, []);


  return (
    <div>
      <h3 className="title">Phim phổ biến</h3>
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
