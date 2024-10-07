import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const create = async (data) => {
  return await instance.post("create", data);
};

export const remove = async () => {};
