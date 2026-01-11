import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { regionApi } from "../../api/regionApi";
import type { Region } from "../../models/Region";

export default function RegionDetailsPage() {
  const { id } = useParams();
    const navigate = useNavigate();
    /*
    React state hook(useState) used to store the currently viewed region.
    useState is a React Hook that lets you add state to a functional component.
    State = data that changes over time and triggers re - render when updated.

    state → current value of the state
    setState → function to update the state
    initialValue → starting value of the state
    */
    const [region, setRegion] = useState<Region | null>(null);
  /*
This is a React effect hook. It runs a piece of code after the component renders.
useEffect is a React Hook that lets you run side effects in a component.

Side effects = things like:
Fetching data from API
Subscribing to events
Setting timers
Updating the DOM outside React
*/
  useEffect(() => {
    loadRegion();
  }, [id]);

  const loadRegion = async () => {
    const res = await regionApi.getAll();
    const found = res.data.find((r: any) => r.regionId === Number(id));

    if (found) {
      setRegion({
        regionId: found.regionId,
        regionDescription: found.regionDescription,
      });
    }
  };

  if (!region) return <p>Region not found</p>;

  return (
    <>
      <h3>Region Details</h3>
      <p>
        <b>ID:</b> {region.regionId}
      </p>
      <p>
        <b>Description:</b> {region.regionDescription}
      </p>

      <button onClick={() => navigate("/regions")}>Back</button>
    </>
  );
}
