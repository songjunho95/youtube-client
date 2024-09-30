import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getVideos = async () => {
  return await axios.get("video");
};
