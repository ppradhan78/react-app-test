import React from "react";

interface Props {
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const UserForm: React.FC<Props> = ({
  value,
  loading,
  onChange,
  onSubmit,
  onClear,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        Submit
      </button>

      <button type="button" onClick={onClear}>
        Clear
      </button>
    </form>
  );
};

export default UserForm;
