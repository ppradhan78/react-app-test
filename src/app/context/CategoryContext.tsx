import { createContext, useContext, useEffect, useState } from "react";
import type { Category } from "../models/Category";
import { categoryApi } from "../api/categoryApi";

type CategoryContextType = {
  categories: Category[]; // full dataset (source of truth)
  loadCategories: () => Promise<void>;
  addCategory: (category: Category) => Promise<void>;
  updateCategory: (category: Category) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([]);

  // Load all categories once (client-side paging/filtering/sorting)
  const loadCategories = async () => {
      const response = await categoryApi.getAll();
      setCategories(response.data);
  };

  // Create
  const addCategory = async (category: Category) => {
    const response = await categoryApi.create(category);
    setCategories((prev) => [...prev, response.data]);
  };

  // Update
  const updateCategory = async (category: Category) => {
    if (!category.categoryId) return;

    await categoryApi.update(category.categoryId, category);

    setCategories((prev) =>
      prev.map((c) => (c.categoryId === category.categoryId ? category : c))
    );
  };

  // Delete
  const deleteCategory = async (id: number) => {
    await categoryApi.delete(id);
    setCategories((prev) => prev.filter((c) => c.categoryId !== id));
  };

  // Auto-load on app start
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        loadCategories,
        addCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext must be used inside CategoryProvider");
  }
  return context;
}
