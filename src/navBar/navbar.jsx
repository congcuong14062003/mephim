import ImgLogo from "../img/logo.png";
import { BsSearch } from "react-icons/bs";
import "./navbar.scss";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default function NavBar(props) {
  const [valueInput, setValueInput] = useState("");
  const [inputSucc, setInputSucc] = useState("");

  const handleInput = useCallback((e) => {
    setValueInput(e);
  }, []);
  const sendData = useCallback(
    (data) => {
      props.parentCallback(data);
    },
    [props]
  );
  const handleKey = useCallback(
    async (e) => {
      if (e === "Enter" && valueInput) {
        setInputSucc(valueInput);
        await sendData();
        setValueInput("");
      }
    },
    [sendData, valueInput]
  );

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7f06e99b6e01deabf93faac845dd9f5c&language=vi&include_adult=true&query=${inputSucc}&page=${props.pages}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => sendData(result.results));
  }, [inputSucc, props.pages]);

  const ScrollBehavior = useCallback(() => {
    const navBar = document.querySelector(".nav-container");
    if (document.documentElement.scrollTop >= 712) {
      navBar.style = "transform: translateY(-100%)";
    } else {
      navBar.style = "  transform: translateY(0%)";
    }
  }, []);

  const history = useNavigate();
  const DirectGenres = (id,name) => {
    history(`/genres/${id}/${name}`);
  };

  const [genresList, setGenres] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=7f06e99b6e01deabf93faac845dd9f5c&language=vi"
    )
      .then((res) => res.json())
      .then((result) => setGenres(result.genres));
  }, []);

  const ToggleMenu = useCallback(() => {
    const menuMobile = document.querySelector(".menu");
    menuMobile.classList.toggle("active");
  }, []);

  window.onscroll = () => ScrollBehavior();
  return (
    <>
      <div className="nav-container">
        <AiOutlineMenuUnfold
          className="icon-nav-mobile"
          onClick={() => ToggleMenu()}
        />
        <div className="menu-container ">
          <Link to="/mephim">
            <img src={ImgLogo} alt="" className="logo" />
          </Link>
          <ul className="menu">
            <Link to="/mephim">
              <li className="menu-list active">TRANG CHỦ</li>
            </Link>
            <li className="menu-list genres_l">
              THỂ LOẠI
              <ul className="genres-list">
                {genresList &&
                  genresList.map((item, index) => (
                    <li onClick={() => DirectGenres(item.id,item.name)} key={index}>
                      {item.name}
                    </li>
                  ))}
              </ul>
            </li>

            <Link to="/recommend">
              <li className="menu-list">PHIM ĐỀ XUẤT</li>
            </Link>
          </ul>
        </div>
        <Link to="/search" style={{ flex: "1" }}>
          <div className="search-main">
            <BsSearch className="btn-search" />
            <input
              value={valueInput}
              onChange={(e) => handleInput(e.target.value)}
              onKeyDown={(e) => handleKey(e.key)}
              type="text"
              name="search-control"
              id="search-film"
              placeholder="Nhập để tìm tên phim, đạo diễn, diễn viên,..."
            />
          </div>
        </Link>
        <div className="language">
          <div
            className="theme-mode"
            onClick={(e) => {
              e.target.classList.toggle("active");
            }}
          >
            <span className="btn-mode"></span>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png"
            alt=""
            className="lang"
          />
        </div>
      </div>
    </>
  );
}
