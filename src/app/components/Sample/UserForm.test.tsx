// src/app/components/Sample/UserForm.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // ensures matchers are recognized
import UserForm from "./UserForm";

describe("UserForm component", () => {
  const defaultProps = {
    value: "",
    loading: false,
    onChange: jest.fn(),
    onSubmit: jest.fn(),
    onClear: jest.fn(),
  };

  test("renders the form inputs and buttons", () => {
    render(<UserForm {...defaultProps} />);

    // Check if textbox exists
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    // Check if buttons exist
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
  });

  test("calls onChange when typing in textbox", () => {
    render(<UserForm {...defaultProps} />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Hello" } });

    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  test("calls onSubmit when Submit button is clicked", () => {
    render(<UserForm {...defaultProps} />);
    const submitButton = screen.getByText("Submit");

    fireEvent.click(submitButton);

    expect(defaultProps.onSubmit).toHaveBeenCalled();
  });

  test("calls onClear when Clear button is clicked", () => {
    render(<UserForm {...defaultProps} />);
    const clearButton = screen.getByText("Clear");

    fireEvent.click(clearButton);

    expect(defaultProps.onClear).toHaveBeenCalled();
  });
});
