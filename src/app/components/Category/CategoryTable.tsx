import type { Category } from "../../models/Category";

type Props = {
  data: Category[];
  sortField: keyof Category;
  sortDir: "asc" | "desc";
  onSort: (field: keyof Category) => void;
  onView: (id: number) => void;
  onEdit: (id: number) => void; // ✅ add
  onDelete: (id: number) => void;
};

export default function CategoryTable({
  data,
  sortField,
  sortDir,
  onSort,
  onView,
  onEdit, // ✅ destructure
  onDelete,
}: Props) {
  const renderSortIcon = (field: keyof Category) => {
    if (sortField !== field) return "";
    return sortDir === "asc" ? " ▲" : " ▼";
  };

  return (
    <table border={1} width="100%">
      <thead>
        <tr>
          <th onClick={() => onSort("categoryId")}>
            ID{renderSortIcon("categoryId")}
          </th>
          <th onClick={() => onSort("name")}>Name{renderSortIcon("name")}</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((c) => (
          <tr key={c.categoryId}>
            <td>{c.categoryId}</td>
            <td>{c.name}</td>
            <td>{c.description}</td>
            <td>
              <button onClick={() => onView(c.categoryId!)}>View</button>

              <button
                onClick={() => onEdit(c.categoryId!)}
                style={{ marginLeft: 8 }}
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(c.categoryId!)}
                style={{ marginLeft: 8 }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
