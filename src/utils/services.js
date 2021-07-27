import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { "content-type": "application/json" },
});

export const login = (email, password) =>
  instance.post("/login", { email, password });

export const register = (email, name, password) =>
  instance.post("/register", { email, name, password });

export const increaseEntry = (id) =>
  instance.put("/user/increaseEntry", { id });

export const detectImage = (url) => instance.post("/image/predict", { url });

export const addImage = (url, celebs) =>
  instance.post("/image", { url, celebs });
