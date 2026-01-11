import { useState } from "react";
import type { Category } from "../../models/Category";

type Props = {
  initialData?: Category;
  onSubmit: (data: Category) => void;
};

export default function CategoryForm({ initialData, onSubmit }: Props) {
  const [name, setCategoryName] = useState(initialData?.name ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      ...initialData,
      name: name,
      description: description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit" style={{ marginTop: 10 }}>
        Save
      </button>
    </form>
  );
}
