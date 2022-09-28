import { useCallback } from "react";
import MusicIntro from "../img/music.mp3";
import VideoIntro from "../img/videointro2_compressed.mp4"
import { useNavigate } from "react-router";
import "./intro.scss";
export default function Intro() {
  const handleVolume = useCallback(() => {
    const videoIntro = document.querySelector(".videoIntro");
    videoIntro.muted = !videoIntro.muted;
  }, []);
  const handleMusic = useCallback(() => {
    const MusicIntro = document.querySelector(".music-intro");
    MusicIntro.muted = !MusicIntro.muted;
  }, []);
  const MovieIntro = useNavigate();
  const DerectMovieIntro = () => {
    MovieIntro("/play/361743");
  };
  return (
    <>
      <div className="intro">
        <audio
          src={MusicIntro}
          autoPlay
          loop
          muted
          className="music-intro"
        ></audio>

        <video
          src= {VideoIntro}
          autoPlay
          muted
          loop
          className="videoIntro"
        ></video>
        <div className="description">
          <p className="title-video">Phi Công Siêu Đẳng: Maverick</p>
          <p className="sub-title_video">Top Gun: Maverick (2022)</p>
          <p className="des-video">
            Sau hơn ba mươi năm phục vụ, Pete “Maverick” Mitchell từng nổi danh
            là một phi công thử nghiệm quả cảm hàng đầu của Hải quân, né tránh
            cơ hội thăng chức, điều khiến anh cảm thấy bị bó buộc, để trở về làm
            chính mình...
          </p>
          <button className="btn-play-small" onClick={() => DerectMovieIntro()}>
            Xem ngay
          </button>
          <button
            className="btn-play-small volume"
            onClick={() => handleVolume()}
          >
            Bật/Tắt tiếng
          </button>

          <button
            className="btn-play-small volume"
            style={{ display: "flex", margin: "10px 0 0" }}
            onClick={() => handleMusic()}
          >
            Music playing
          </button>
        </div>
      </div>
    </>
  );
}
