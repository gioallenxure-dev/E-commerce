const SectionTitle = ({ sectionCategory, sectionTitle }) => {
  return (
    <div className={`flex flex-col gap-5 px-0  `}>
      <div className='flex items-center text-lg'>
        <span className='w-[20px] h-[40px] bg-primary rounded text-primary'>
          .
        </span>
        <h1 className='text-primary text-md font-semibold  px-3'>
          {sectionCategory}
        </h1>
      </div>
      <div>
        <h1 className='font-inter font-semibold text-3xl md:text-4xl leading-none'>
          {sectionTitle}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;
