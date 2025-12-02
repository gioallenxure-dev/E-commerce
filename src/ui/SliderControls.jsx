import { ArrowLeft, ArrowRight } from 'lucide-react';

const SliderControls = ({ onPrev, onNext }) => {
  return (
    <div className='hidden md:flex gap-2'>
      <button
        onClick={onPrev}
        className='bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center p-3 cursor-pointer transition-colors'
        aria-label='Previous slide'
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={onNext}
        className='bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center p-3 cursor-pointer transition-colors'
        aria-label='Next slide'
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default SliderControls;
