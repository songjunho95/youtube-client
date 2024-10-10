import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/private/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const addConmment = async (data) => {
  return await authorize.post("commment", data);
};

export const viewComments = async (videoCode) => {
  return await instance.get(`video/${videoCode}/comment`);
};
