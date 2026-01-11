import { Button } from "@mui/material";

export default function Settings() {
  return (
    <div>
      <h2>Settings Page</h2>;
      <Button
        size="small"
        onClick={() => window.open("/coverage/index.html", "_blank")}
      >
        Coverage Report
      </Button>
    </div>
  );
}
