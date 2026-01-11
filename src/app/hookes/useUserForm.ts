import { useState } from "react";
import type { UserFormModel } from "../models/UserFormModel";
import { UserService } from "../api/UserService";

const initialState: UserFormModel = {
  name: "",
};

export const useUserForm = () => {
  const [form, setForm] = useState<UserFormModel>(initialState);
  const [loading, setLoading] = useState(false);

  const onChange = (value: string) => {
    setForm({ name: value });
  };

  const onSubmit = async () => {
    setLoading(true);
    await UserService.create(form);
    setLoading(false);
  };

  const onClear = () => {
    setForm(initialState);
  };

  return {
    form,
    loading,
    onChange,
    onSubmit,
    onClear,
  };
};
