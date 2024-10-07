import { getVideo } from "../api/video";

export const initState = {
  video: null,
  videos: [],
};

// 액션 함수들
export const fetchVideo = async (dispatch, videoCode) => {
  const response = await getVideo(videoCode);
  dispatch({ type: "FETCH_VIDEO", payload: response.data });
};

// fetchVideos - FETCH_VIDEOS

export const videoReduvcer = (state, action) => {
  switch (action.type) {
    case "FETCH_VIDEO":
      return { video: action.payload };
  }
};
