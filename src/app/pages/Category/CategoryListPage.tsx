import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useCategoryContext } from "../../context/CategoryContext";
import CategoryTable from "../../components/Category/CategoryTable";
import Pagination from "../../shared/components/Pagination";
import SearchBox from "../../shared/components/SearchBox";
import type { Category } from "../../models/Category";

type SortDirection = "asc" | "desc";

export default function CategoryListPage() {
  const navigate = useNavigate();
  const { categories, deleteCategory } = useCategoryContext();

  // UI state
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof Category>("name");
  const [sortDir, setSortDir] = useState<SortDirection>("asc");

  // Filtering
  const filtered = useMemo(() => {
    return (categories ?? []).filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [categories, search]);

  // Sorting
  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aVal = a[sortField] ?? "";
      const bVal = b[sortField] ?? "";

      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sortField, sortDir]);

  // Paging
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, pageSize]);

  const totalPages = Math.ceil(filtered.length / pageSize);

  // Events
  const handleSort = (field: keyof Category) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Delete this category?")) {
      await deleteCategory(id);
    }
  };

  return (
    <>
      <h2>Categories</h2>

      <SearchBox
        value={search}
        onChange={(value) => {
          setSearch(value);
          setPage(1);
        }}
      />

      <CategoryTable
        data={paged}
        sortField={sortField}
        sortDir={sortDir}
        onSort={handleSort}
        onView={(id) => navigate(`/categories/${id}`)}
        onEdit={(id) => navigate(`/categories/edit/${id}`)}
        onDelete={handleDelete}
      />

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      <button
        style={{ marginTop: 12 }}
        onClick={() => navigate("/categories/new")}
      >
        Add Category
      </button>
    </>
  );
}
