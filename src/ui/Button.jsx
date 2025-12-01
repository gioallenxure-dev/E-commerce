const Button = ({ text, className = '', ...props }) => {
  const baseClass =
    'bg-primary cursor-pointer text-white px-8 py-3 rounded hover:bg-[#C03939] transition-all duration-200';

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
