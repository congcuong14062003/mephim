import { useCallback, useState } from "react";
import NavBar from "../navBar/navbar";
import MovieThumnail from "../movieThumnail/mobieThumnail";
import Pagination from "../pagination/pag";
import Footer from "../footer/footer";
import "./search.scss";
import { Link } from "react-router-dom";
export default function SearchMovie() {
  const [message, setMessage] = useState([]);
  const [page, setPage] = useState(1);
  const callbackFunctionPag = useCallback((pages) => {
    setPage(pages);
  }, []);

  const callbackFunction = useCallback((childData) => {
    setMessage(childData);
  }, []);

  return (
    <div className="search">
      <NavBar pages={page} parentCallback={callbackFunction} />
      <h3 className="note">
        Vui lòng nhấn quay lại
        <Link style={{ padding: "0 5px", color: "white" }} to="/">
          TRANG CHỦ
        </Link>
        nếu muốn thoát khỏi TÌM KIÉM
      </h3>
      {message === undefined || message === [] ? 
      (
        <h3 style={{ "text-align": "center", color: "yellow" }}>
          Không có Kết quả nào phù hợp
        </h3>
      ) : (
        <>
          <ul className="list-film-search">
            <h3 className="header-ul">Kết quả tìm kiếm:</h3>
            {message.map((item, index) => (
              <li key={index}>
                <MovieThumnail dataThumnail={item} />
              </li>
            ))}
          </ul>
          <Pagination parentCallbackPag={callbackFunctionPag} />
        </>
      )}
      <Footer />
    </div>
  );
}
