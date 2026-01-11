import type { Region } from "../../models/Region";

//type Props defines a custom type in TypeScript.
type Props = {
  data: Region[];
  sortField: keyof Region;
  sortDir: "asc" | "desc";
  onSort: (field: keyof Region) => void;
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function RegionTable({
  data,
  sortField,
  sortDir,
  onSort,
  onView,
  onEdit,
  onDelete,
}: Props) {
  const renderSortIcon = (field: keyof Region) => {
    if (sortField !== field) return "";
    return sortDir === "asc" ? " ▲" : " ▼";
  };

  return (
    <table border={1} width="100%">
      <thead>
        <tr>
          <th style={{ cursor: "pointer" }} onClick={() => onSort("regionId")}>
            ID{renderSortIcon("regionId")}
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => onSort("regionDescription")}
          >
            Description{renderSortIcon("regionDescription")}
          </th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((r) => (
          <tr key={r.regionId}>
            <td>{r.regionId}</td>
            <td>{r.regionDescription}</td>
            <td>
              <button onClick={() => onView(r.regionId!)}>View</button>
              <button onClick={() => onEdit(r.regionId!)}>Edit</button>
              <button onClick={() => onDelete(r.regionId!)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
