import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { "content-type": "application/json" },
});

export const login = (email, password) =>
  instance.post("/login", { email, password });
