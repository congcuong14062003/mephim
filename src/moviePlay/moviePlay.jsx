import "./moviePlay.scss";
import NavBar from "../navBar/navbar";
import MovieTrendingContainer from "../movietrend/movietrend";
import MoviePopularContainer from "../moviePopular/moviePopular";
import InfoMovie from "../infoMovie/infoMovie";
import Footer from "../footer/footer"
import { useParams } from "react-router-dom";
export default function MoviePlay() {
  window.scrollTo(0, 0);
  const {id}=  useParams()
  return (
    <div className="movie-play">
      <NavBar />
      <div className="movie-play-container">
        <div className="videoplay">
          <iframe
            title="The film was embed"
            src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
            id="iframe-embed"
            width="100%"
            height="600"
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
          <h3 className="note-error">
            Nếu phim bị lỗi, hãy chuyển sang
            <b style={{ color: "blue" }}> {" "}Server</b> {"khác => "}
            <b style={{ color: "blue" }}>{" "}Quảng cáo thuộc về 2Embed</b>
          </h3>

          <div className="description">
            <InfoMovie idMovie={id} />
          </div>
        </div>
        <div className="comment">
          <div className="comment-header">
            <h3>Nhận xét: </h3>
            <input type="text" placeholder="Viết nhận xét ..." />
          </div>
          <ul className="comment-list"></ul>
        </div>
        <h3 className="title-movie-other">Các đề xuất khác: </h3>
        <MovieTrendingContainer />
        <MoviePopularContainer />
      </div>
      <Footer/>
    </div>
  );
}
