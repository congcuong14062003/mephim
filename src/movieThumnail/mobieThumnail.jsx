import { useNavigate } from "react-router-dom";
// import  from "use-history";
import "./moviethumal.scss";

export default function MovieThumnail(props) {
  const history = useNavigate();
  const handleDirect = (id) => {
    history(`/play/${id}`);
  };
  return (
    <>
      <div
        className="slider-list"
        onClick={() => handleDirect(props.dataThumnail && props.dataThumnail.id.toString())}
      >
        {/* <Link to="/play"> */}
        <div className="slider-item">
          <img
            className="age-verti"
            src={
              props.dataThumnail && props.dataThumnail.adult
                ? "https://www.alleycatbar.co.uk/wp-content/uploads/legal-age.png"
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png"
            }
            alt=""
          />
          <span>
            <img
              className="thumnail"
              src={`https://image.tmdb.org/t/p/original/${props.dataThumnail && props.dataThumnail.poster_path}`}
              onError={(event) => {
                event.target.onerror = "";
                event.target.src =
                  "https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png";
                return true;
              }}
              alt=""
            />
          </span>
          <div className="type-film">
            {props.dataThumnail && props.dataThumnail.original_language}
          </div>
          <div className="des-film">
            <div className="header-title">
              <p className="title">
                {props.dataThumnail && props.dataThumnail.title}(
                {props.dataThumnail.release_date && props.dataThumnail.release_date.substring(-1, 4)})
              </p>
              <p className="rate">{props.dataThumnail.vote_average && props.dataThumnail.vote_average.toFixed(1)}</p>
            </div>
            <div>
              <p className="des">
                {props.dataThumnail.overview && props.dataThumnail.overview.length >= 300
                  ? props.dataThumnail.overview.slice(0, 250) + "..."
                  : props.dataThumnail.overview}
              </p>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </>
  );
}
