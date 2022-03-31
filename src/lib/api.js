import axios from "axios";

export const createRequestHandler = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  instance.interceptors.request.use((request) => {
    const token = localStorage.getItem("auth");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => error.response
  );

  return instance;
};
