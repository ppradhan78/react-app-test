import { axiosClient } from "./axiosClient";
import type { Category } from "../models/Category";

export const categoryApi = {
  getAll: () => axiosClient.get("/Categories"),

  getById: (id: number) => axiosClient.get<Category>(`/Categories/${id}`),

  create: (data: Category) => axiosClient.post("/Categories", data),

  update: (id: number, data: Category) =>
    axiosClient.put(`/Categories/${id}`, data),

  delete: (id: number) => axiosClient.delete(`/Categories/${id}`),
};
