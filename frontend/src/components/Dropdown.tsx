import { type Category } from "../context/CategoriesContext";
import { type Manufacturer } from "../api/manufacturers";
import "./Dropdown.css";

type DropdownProps = {
  options: Category[] | Manufacturer[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Dropdown({ options, value, setValue }: DropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="dropdown"
      style={{ paddingBlock: "2%" }}
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={option.name + `${index}`} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
