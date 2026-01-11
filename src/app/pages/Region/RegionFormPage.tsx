import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { regionApi } from "../../api/regionApi";

export default function RegionFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      regionApi
        .getById(Number(id))
        .then((res) => setDescription(res.data.regionDescription));
    }
  }, [id]);

  const handleSubmit = async () => {
    if (id) {
      await regionApi.update(Number(id), {
        regionDescription: description,
      });
    } else {
      await regionApi.create({ regionDescription: description });
    }

    navigate("/regions");
  };

  return (
    <>
      <h2>{id ? "Edit Region" : "New Region"}</h2>

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Region Description"
      />

      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => navigate("/regions")}>Cancel</button>
    </>
  );
}
