import { useEffect, useState } from "react";
import { movieTrending } from "../API/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieThumnail from "../movieThumnail/mobieThumnail";
export default function MovieTrendingContainer() {
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
    fetch(movieTrending)
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
      <h3 className="title">Phim Xu Hướng</h3>
      <div className="list-film-container">
        <Slider {...settings} className="list-new-film">
          {data &&
            data.map((item, index) => (
              <MovieThumnail key={index} dataThumnail={item} />
            ))}
        </Slider>
      </div>
    </div>
  );
}
