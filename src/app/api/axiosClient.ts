import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://data-northwind.indigo.design",
  headers: {
    "Content-Type": "application/json",
  },
});
