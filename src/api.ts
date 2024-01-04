import axios from "axios";
import { QueryFunctionContext } from "react-query";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "developmetn"
      ? "http://localhost:8000/api/v1/"
      : "https://archinion.onrender.com/api/v1",
  withCredentials: true,
});

export const getInforms = () =>
  instance.get("/inform/").then((response) => response.data);

export const getProject = () =>
  instance.get("/project/").then((response) => response.data);

export const getProjectDetail = ({ queryKey }: QueryFunctionContext) => {
  const [_, projectPk] = queryKey;
  return instance
    .get(`/project/${projectPk}`)
    .then((response) => response.data);
};
