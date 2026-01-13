import { type Categories } from "../../dummy-data";
import "./Dropdown.css"

type DropdownProps = {
  options: Categories[];
  value: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function Dropdown({
  options,
  value,
  setCategory,
}: DropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange} className="dropdown" style={{paddingBlock: "2%"}}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
