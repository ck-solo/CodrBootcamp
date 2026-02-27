const Input = ({ type,  id, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label   className="text-sm font-semibold text-gray-700">
        {type}
      </label>
      <input
      type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2 rounded-xl border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all"
      />
    </div>
  );
};

export default Input;