import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { movieTrending } from "../API/api";
import InfoMovie from "../infoMovie/infoMovie";
import Footer from "../footer/footer";
import NavBar from "../navBar/navbar";
import Content from "../content/content";
import "./recommend.scss";
export default function Recommend() {
  window.scrollTo(0, 0);
  const [IDmovie, setID] = useState([]);
  const MovieIntro = useNavigate();
  const DerectMovieIntro = () => {
    MovieIntro(`/play/${IDmovie.id}`);
  };
  useEffect(() => {
    fetch(movieTrending)
      .then((res) => res.json())
      .then((result) => setID(result.results[0]));
  }, []);

  return (
    <>
    <NavBar/>
      <div className="intro-img">
        <h3 className="title">Phim Đề Xuất</h3>
        <div className="intro-container-img">
          <img
            onClick={() => DerectMovieIntro()}
            src={`https://image.tmdb.org/t/p/original/${IDmovie.poster_path}`}
            className="videoIntro"
            alt=""
          />
          <div className="btn-film">
            <button
              className="btn-play-small"
              onClick={() => DerectMovieIntro()}
            >
              Xem ngay
            </button>
            <button
              className="btn-play-small trailer"
              onClick={() =>
                alert("Hiện tại mình chưa hoàn thiện phần này! (^_^)")
              }
            >
              Xem Trailer
            </button>
          </div>

          <div className="description-img">
            <InfoMovie idMovie={IDmovie.id} />
          </div>
        </div>
      </div>
      <Content />
      <Footer />
    </>
  );
}
