const Button = ({ text, className = '', variant = 'solid', ...props }) => {
  const solidClass = 'bg-primary text-white hover:bg-[#C03939]';

  const outlineClass =
    'bg-transparent border border-gray-300  hover:bg-primary hover:text-white';

  const baseClass =
    'cursor-pointer px-8 py-3 rounded transition-all duration-200 max-w-max  ';

  const variantClass = variant === 'outline' ? outlineClass : solidClass;

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
