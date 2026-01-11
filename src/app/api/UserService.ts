import { axiosClient } from "./axiosClient";
import type { UserFormModel } from "../models/UserFormModel";

export const UserService = {
  getAll: () => axiosClient.get("/Categories"),

  getById: (id: number) => axiosClient.get<UserFormModel>(`/Categories/${id}`),

  create: (data: UserFormModel) => axiosClient.post("/Categories", data),

  update: (id: number, data: UserFormModel) =>
    axiosClient.put(`/Categories/${id}`, data),

  delete: (id: number) => axiosClient.delete(`/Categories/${id}`),
};
