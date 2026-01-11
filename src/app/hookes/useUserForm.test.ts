import { renderHook, act } from "@testing-library/react";
import { useUserForm } from "../hookes/useUserForm";
import * as userService from "../api/UserService";

describe("useUserForm hook", () => {
  test("initial state is empty", () => {
    const { result } = renderHook(() => useUserForm());

    expect(result.current.form.name).toBe("");
    expect(result.current.loading).toBe(false);
  });

  test("updates name on change", () => {
    const { result } = renderHook(() => useUserForm());

    act(() => {
      result.current.onChange("Alice");
    });

    expect(result.current.form.name).toBe("Alice");
  });

  test("clears form", () => {
    const { result } = renderHook(() => useUserForm());

    act(() => {
      result.current.onChange("Bob");
      result.current.onClear();
    });

    expect(result.current.form.name).toBe("");
  });

  test("submits form and calls service", async () => {
    const saveSpy = jest.spyOn(userService, userService.).mockResolvedValue();

    const { result } = renderHook(() => useUserForm());

    act(() => {
      result.current.onChange("Charlie");
    });

    await act(async () => {
      await result.current.onSubmit();
    });

    expect(saveSpy).toHaveBeenCalledWith({ name: "Charlie" });
    expect(result.current.loading).toBe(false);

    saveSpy.mockRestore();
  });
});
