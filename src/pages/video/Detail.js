import "../../assets/detail.css";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import {
  initState as videoState,
  videoReduvcer,
  fetchVideo,
} from "../../reducers/videoReducer";

const Detail = () => {
  const { videoCode } = useParams();
  const [state, dispatch] = useReducer(videoReduvcer, videoState);

  const { video } = state;

  useEffect(() => {
    fetchVideo(dispatch, videoCode);
  }, []);

  return (
    <main className="detail">
      <div className="video-detail">
        <video controls src={video?.videoUrl}></video>
        <h2>{video?.videoTitle}</h2>
        <div className="video-detail-desc">
          <div className="detail-desc-left">
            <img src={video?.channel.channelImg} />
            <div className="channel-desc">
              <h3>{video?.channel.channelName}</h3>
              <p>구독자 명</p>
            </div>
            <button>구독</button>
          </div>
        </div>
        <div className="video-detail-info">{video?.videoDesc}</div>
      </div>
      <div className="video-list">
        <a className="video-list-card">
          <img />
          <div className="video-list-desc">
            <h4></h4>
            <p></p>
            <p className="video-meta">조회수 회</p>
          </div>
        </a>
      </div>
    </main>
  );
};
export default Detail;
