import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextInput = ({
  htmlFor,
  label,
  type,
  name,
  id,
  autoComplete,
  placeholder,
  required,
  icon,
  className,
  classNameContainer,
  classNameInput,
}) => (
  <div className={className}>
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <div
      className={`w-full sm:text-sm border border-gray-100 bg-white flex justify-center items-center ${classNameContainer}`}
    >
      <input
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className={`flex-1 py-3 pl-4 bg-white border-none focus:outline-none hover:border-none active:border-none ${classNameInput}`}
      />
      <FontAwesomeIcon icon={icon} height={14} className="pr-4" />
    </div>
  </div>
);

export default TextInput;
