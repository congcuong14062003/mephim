import { useEffect, useState } from "react";
import "./infoMovie.scss";
export default function InfoMovie(props) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      props.idMovie &&
        `https://api.themoviedb.org/3/movie/${props.idMovie}?api_key=7f06e99b6e01deabf93faac845dd9f5c&language=vi`
    )
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [props.idMovie]);

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  return (
    <div className="infoMovie">
      <h2 className="title-movie">
        {data && data["title"]} ({data && data["original_title"]})
      </h2>
      <p className="tagline">
        <span className="value-film">{data && data.tagline}</span>
      </p>
      <p className="runtime">
        Thời lượng:
        <span className="value-film">{data && data["runtime"]} phút</span>
      </p>
      <p className="vote_average">
        Đánh giá:
        <span className="value-film">
          {data && data["vote_average"].toFixed(1)}/10
        </span>
      </p>
      <p className="language_origin">
        Quốc gia:
        <span className="value-film">
          {data && data["production_countries"].map((item) => item.name + " ")}
        </span>
      </p>
      <p className="genres">
        Thể loại:
        <span className="value-film">
          {data &&
            data["genres"].map((item, index) => (
              <span key={index} className="list-produce">
                {item.name}
              </span>
            ))}
        </span>
      </p>
      <p className="status">
        Tính trạng:
        <span className="value-film">
          {data && data.status === "Released"
            ? "Đã phát hành"
            : "Chưa phát hành"}
        </span>
      </p>
      <p className="budget">
        Chi phí:
        <span className="value-film">
          ${data && formatCash(data["budget"])}
        </span>
      </p>
      <p className="revenue">
        Doanh phu:
        <span className="value-film">
          ${data && formatCash(data["revenue"])}
        </span>
      </p>
      <p className="release_date">
        Ngày phát hành:
        <span className="value-film">{data && data["release_date"]}</span>
      </p>
      <p className="production_companies">
        Nhà sản xuất:
        <span className="value-film">
          {data &&
            data["production_companies"].map((item, index) => (
              <span key={index} className="list-produce">
                {item["name"] + "(" + item["origin_country"] + ")"}
              </span>
            ))}
        </span>
      </p>
      <p className="overview">
        Mô tả: <span className="value-film">{data && data["overview"]}</span>
      </p>
    </div>
  );
}
