import { useNavigate, useParams } from "react-router-dom";
import { useCategoryContext } from "../../context/CategoryContext";
import CategoryForm from "../../components/Category/CategoryForm";
import type { Category } from "../../models/Category";

export default function CategoryFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories, addCategory, updateCategory } = useCategoryContext();

  const isEdit = Boolean(id);

  const categoryToEdit: Category | undefined = isEdit
    ? categories.find((c) => c.categoryId === Number(id))
    : undefined;

  const handleSubmit = async (data: Category) => {
    if (isEdit) {
      await updateCategory({
        ...data,
        categoryId: Number(id),
      });
    } else {
      await addCategory(data);
    }

    navigate("/categories");
  };
  if (isEdit && !categoryToEdit) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>{isEdit ? "Edit Category" : "New Category"}</h2>

      <CategoryForm initialData={categoryToEdit} onSubmit={handleSubmit} />

      <button style={{ marginTop: 12 }} onClick={() => navigate("/categories")}>
        Back to Category
      </button>
    </>
  );
}
