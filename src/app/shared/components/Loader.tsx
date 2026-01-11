import "../../assets/styles/loader.css";

interface LoaderProps {
  text?: string;
}

export default function Loader({ text = "Loading..." }: LoaderProps) {
  return (
    <div className="loader-container">
      <div className="spinner" />
      <span>{text}</span>
    </div>
  );
}
