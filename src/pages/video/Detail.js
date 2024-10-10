import "../../assets/detail.css";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useState
  initState as videoState,
  videoReduvcer,
  fetchVideo,
  fetchVideos,
} from "../../reducers/videoReducer";
import { createComment, fetchComments } from "../../store/commentSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  subscribe,
  unsubscribe,
  subCount,
  fetchSub,
} from "../../store/subscribeSlice";
import { useAuth } from "../../contexts/AuthContext";
import { addConmment } from "../../api/comment";

const Detail = () => {
  const dispatch = useDispatch();
  const { videoCode } = useParams();
  const { token, id } = useAuth();

  const[isComment, setIsComment] = useState(false);
  const [newComment, setNewComment] = useState({
    commentText:"",
    videoCode: videoCode,
    id: id,
  });
  // 리듀서 방식 - 리덕스 툴킷 사용하는 방식으로 변경해보셔도 괜찮아요 !
  // 실제 프로젝트에서는 하나로 통일해주세요! -> 만약 쓰신다면 리덕스 툴킷 사용!
  const [state, videoDispatch] = useReducer(videoReduvcer, videoState);
  const { video, videos } = state;
  // 리덕스 툴킷 방식 - 구독
  const dispatch = useDispatch();

  const isSub = useSelector((state) => state.subscribe.isSub);
  const count = useSelector((state) => state.subscribe.count);
  const sub = useSelector((state) => state.subscribe.sub);
  const comments = useSelector((state) => state.comment.comments);

  const handleSub = () => {
    if (isSub) {
      // 구독중 -> 구독 취소
      dispatch(unsubscribe(sub?.subCode));
    } else {
      // 구독 -> 구독
      dispatch(subscribe({ channelCode: video.channel.channelCode }));
    }
  };

  // 댓글 추가 
  const addConmment = () => {
    dispatch(createComment(newComment));
    setIsComment(false);
    setNewComment({...newComment, commentText: ""});
  };


  useEffect(() => {
    fetchVideo(dispatch, videoCode);
    fetchVideos(dispatch, 1, "");
    dispatch(fetchComments(videoCode));
  }, []);

  useEffect(() => {
    if (video != null) {
      dispatch(subCount(video.channel));
      if (token != null) {
        dispatch(fetchSub(video.channel.channelCode));
      }
    }
  }, [video, token, handleSub]);
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
        <div class="comment">
          <input
            className="comment-add"
            type="text"
            placeholder="댓글 추가.."
            value={newComment.commentText}
            onChange={(e) => setNewComment({...newComment, commentText: e.target.value})
            onClick={() => setIsComment(true)}
          />
          { isComment && (
          <div className="comment-add-status">
            <button onClick={() => setIsComment(false)}>취소</button>
            <button onClick={addConmment}>댓글</button>
          </div>
          )};
          <div className="comment-list">
            {comments.map((comment) => (
              <div className="comment-content">
                <h4>{comment.id}</h4>
                <p>{comment.commentText}</p>
                <button>답글</button>
                <input type="text" placeholder="답글 추가.." />
                <div className="reply-add-status">
                  <button>취소</button>
                  <button>답글</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="video-list">
        {videos.map((video) => (
          <a
            href={`/video/${video.videoCode}`}
            className="video-list-card"
            key={video.videoCode}
          >
            <img src={video.videoImg} />
            <div className="video-list-desc">
              <h4>{video.videoTitle}</h4>
              <p>{video.channel.channelName}</p>
              <p className="video-meta">조회수 {video.videoCount}회</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};
export default Detail;
