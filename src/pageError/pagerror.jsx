import "./pageerror.scss";
import imgError from "../img/kisspng-sadness-icon-sad-5a8a690386bac6.7625442715190202915519.png"
import {Link} from "react-router-dom"
export default function PageError() {
  return (
    <div className="page-error">
      <h1>404 PageNotFound</h1>
      <img src={imgError} alt="" />
      <h4>Oops !!! Website này đã lỗi hoặc không còn tồn tại<br/>Vui lòng quay lại Trang chủ MêPhim để xem được phim</h4>
      <Link to="/"><button>Quay lại Trang Chủ </button></Link>
    </div>
  );
}
