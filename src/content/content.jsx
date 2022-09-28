import MovieTrendingContainer from "../movietrend/movietrend";
import MovieTopRatedContainer from "../movietoprated/movietoprated";
import MoviePopularContainer from "../moviePopular/moviePopular";
import MovieUpcomingContainer from "../movieUpcoming/movieUpcoming";
import "./content.scss"
export default function Content() {
  return (
    <>
    <div id="content">
      <MovieUpcomingContainer />
      <MovieTopRatedContainer />
      <MovieTrendingContainer />
      <MoviePopularContainer />
    </div>
    </>
  );
}
