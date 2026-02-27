const Button = ({ label, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 px-4 rounded-xl font-medium 
                 bg-linear-to-r from-blue-500 to-indigo-600 
                 text-white shadow-md 
                 hover:scale-105 hover:shadow-lg 
                 transition-all duration-300"
    >
      {label}
    </button>
  );
};

export default Button;