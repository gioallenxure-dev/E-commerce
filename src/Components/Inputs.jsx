function Inputs({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='border-b border-gray-400 py-2 w-full focus:outline-none focus:border-red-500 text-gray-700 placeholder-gray-500 mb-2'
    />
  );
}
export default Inputs;
