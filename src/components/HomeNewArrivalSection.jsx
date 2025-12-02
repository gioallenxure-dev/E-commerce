import SectionTitle from '../ui/SectionTitle';

const NewArrivalCard = ({ title, description, imgURL, gridClasses }) => {
  // Determine text size based on grid span (smaller text for smaller cards)
  const isLarge = gridClasses.includes('row-span-2');
  const titleClass = isLarge ? 'text-2xl' : 'text-xl';
  const descClass = isLarge ? 'mb-4' : 'mb-3';

  return (
    <div
      // Use the dynamic gridClasses prop here
      className={`${gridClasses} relative bg-black rounded-md overflow-hidden min-h-[300px] md:min-h-0`}
    >
      {/* Image placeholder/rendering */}
      <div className='absolute inset-0 bg-gray-800 flex items-center justify-center'>
        {/* Replace this div with an actual img tag if imgURL is provided */}
        {imgURL ? (
          <img
            src={imgURL}
            alt={title}
            className='w-full h-full object-cover opacity-70'
          />
        ) : (
          <span className='text-gray-500'>Image Placeholder</span>
        )}
      </div>

      {/* Content overlay */}
      <div className='absolute bottom-6 left-6 right-6 text-white'>
        <h1 className={`font-inter ${titleClass} font-semibold ${descClass}`}>
          {title}
        </h1>
        <p className='text-sm text-gray-300 mb-3'>{description}</p>
        <a
          href='#'
          className='text-white underline underline-offset-4 hover:text-gray-300'
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

const newArrivalData = [
  {
    title: 'PlayStation 5',
    description: 'Black and White version of the PS5 coming out on sale.',
    imgURL:
      'https://images.unsplash.com/photo-1519326844852-704caea5679e?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gridClasses: 'md:col-span-2 md:row-span-2',
  },
  {
    title: "Women's Collections",
    description: 'Featured woman collections that give you another vibe.',
    imgURL:
      'https://images.unsplash.com/photo-1629168151565-456a5cf60c67?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gridClasses: 'md:col-span-2',
  },
  {
    title: 'Speakers',
    description: 'Amazon wireless speakers',
    imgURL:
      'https://images.unsplash.com/photo-1630152836113-ccbf6d1e5fa5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gridClasses: 'md:col-span-1',
  },
  {
    title: 'Perfume',
    description: 'GUCCI INTENSE OUD EDP',
    imgURL:
      'https://images.unsplash.com/photo-1543857261-f71238eb4188?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gridClasses: 'md:col-span-1',
  },
];

const HomeNewArrivalSection = () => {
  return (
    <section className='mb-30 flex flex-col gap-14'>
      {/* Header */}
      <div className='wrapper px-4 md:px-0'>
        <SectionTitle
          sectionCategory='Featured'
          sectionTitle='New Arrival'
          className='mb-0'
        />
      </div>

      {/* Bento Grid Layout - Dynamically Mapped */}
      <div className='wrapper px-4 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]'>
          {newArrivalData.map((item, index) => (
            <NewArrivalCard
              key={index}
              title={item.title}
              description={item.description}
              imgURL={item.imgURL}
              gridClasses={item.gridClasses}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNewArrivalSection;
