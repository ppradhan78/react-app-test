import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoryApi } from "../../api/categoryApi";
import type { Category } from "../../models/Category";

export default function CategoryDetailsPage() {
  const { id } = useParams();
  const [category, setCategory] = useState<Category>();
  const navigate = useNavigate();
  useEffect(() => {
    categoryApi.getById(Number(id)).then((r) => setCategory(r.data));
  }, [id]);

  if (!category) return <p>Loading...</p>;

  return (
    <>
      <h2>{category.name}</h2>
      <p>{category.description}</p>

      <button style={{ marginTop: 12 }} onClick={() => navigate("/categories")}>
        Back to Category
      </button>
    </>
  );
}
