import axios from "axios";
import type { Region } from "../models/Region";

const client = axios.create({
  baseURL: "https://data-northwind.indigo.design",
});

export const regionApi = {
  getAll: () => client.get("/Regions"),
  getById: (id: number) => client.get(`/Regions/${id}`),

  create: (region: Region) =>
    client.post("/Regions", {
      RegionDescription: region.regionDescription,
    }),

  update: (id: number, region: Region) =>
    client.put(`/Regions/${id}/`, {
      RegionID: id,
      RegionDescription: region.regionDescription,
    }),

  delete: (id: number) => client.delete(`/Regions/${id}`),
};
