import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

export const getInforms = () =>
  instance.get("/inform/").then((response) => response.data);
