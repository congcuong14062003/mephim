import { useEffect, useState } from "react";
import { movieUpcoming } from "../API/api";
import "./movieUpcoming.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieThumnail from "../movieThumnail/mobieThumnail";
export default function MovieUpcomingContainer() {
  const [data, setData] = useState([]);
  const [slides, setSlides] = useState(5);

  useEffect(() => {
      if (window.innerWidth <= 1024) {
        setSlides(1);
      } else {
        setSlides(5);
      }
  },[]);

  useEffect(() => {
    fetch(movieUpcoming)
      .then((res) => res.json())
      .then((result) => setData(result.results));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides,
    autoplay: true,
  };
  return (
    <div>
      <h3 className="title">Phim Sắp Ra Mắt</h3>
      <div className="list-film-container">
        <Slider {...settings} className="list-new-film">
          {data &&
            data.map((item, index) => (
             <MovieThumnail key={index} dataThumnail = {item} />
            ))}
        </Slider>
      </div>
    </div>
  );
}
