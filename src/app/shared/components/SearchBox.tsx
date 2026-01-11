type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBox({ value, onChange }: Props) {
  return (
    <input
      placeholder="Search category name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: 10, width: 250 }}
    />
  );
}
