import "./footer.scss";
import Logo from "../img/logo.png";
export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer">

      <div className="col-1">
        <img src={Logo} alt="" />
        <br />
        <p>Nocopyright 2021 © MEPHIM.NET</p>
      </div>
      <div className="col-2">
        <p>
          Xem phim mới miễn phí nhanh chất lượng cao. Xem Phim online Việt Sub,
          Thuyết minh, lồng tiếng chất lượng HD. Xem phim nhanh online chất
          lượng cao
        </p>
        <p>
          API Source: <a style={{"color":"blue"}} href="https://www.themoviedb.org/">TMDB API</a>
        </p>
        <p>Create & Design by <b style={{"color":"blue"}}>Duong Manh</b></p>
        <p>
          This is my website project created for learning purposes only, so if
          there is any problem, Contact me now <br /> Email: manhd5749@gmail.com
        </p>
      </div>
    </div>
    </div>
    
  );
}
