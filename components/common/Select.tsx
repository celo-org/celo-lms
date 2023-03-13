type Props = {
  options: Array<any>;
  value: string;
  onChange: (e: string) => void;
  placeholder?: string;
  className?: string;
};

function SelectField({
  options,
  value,
  onChange,
  placeholder,
  className,
}: Props) {
  return (
    <>
      <label className="font-noto">{placeholder}</label>
      <select
        defaultValue={value}
        className={
          className +
          " bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-3 font-noto"
        }
        required
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option>Please choose a country</option>
        {options.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectField;
