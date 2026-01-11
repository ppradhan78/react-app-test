import { useMemo, useState } from "react";
import { useCategoryContext } from "../context/CategoryContext";
import type { Category } from "../models/Category";

type SortDirection = "asc" | "desc";

export function useCategories() {
  const { categories = [], deleteCategory } = useCategoryContext();

  // UI state
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof Category>("name");
  const [sortDir, setSortDir] = useState<SortDirection>("asc");

  // Filtering
  const filtered = useMemo(() => {
    return categories.filter((c) =>
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

  // Delete with confirmation
  const remove = async (id: number) => {
    if (window.confirm("Delete this category?")) {
      await deleteCategory(id);
    }
  };

  return {
    categories: paged,
    page,
    totalPages,
    setPage,
    search,
    setSearch,
    sortField,
    sortDir,
    setSortField,
    setSortDir,
    deleteCategory: remove,
  };
}
