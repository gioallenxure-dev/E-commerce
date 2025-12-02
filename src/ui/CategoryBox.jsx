const CategoryBox = ({ Icon, label }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 h-50 border border-gray-200 rounded-lg hover:bg-primary transition-colors duration-300 cursor-pointer hover:text-white'>
      <Icon size={80} strokeWidth={0.5} />
      <span>{label}</span>
    </div>
  );
};

export default CategoryBox;
