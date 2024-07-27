
const ProductCard = ({ imgSrc, title, description }) => {
    return (
      <div className='h-[370px] bg-white p-3 px-5 flex flex-col gap-4 items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
        <img className='p-5 w-56' src={imgSrc} alt={title} />
        <h2 className='font-bold text-[20px]'>{title}</h2>
        <p className='text-center text-[17px] text-[#5e5d5d]'>{description}</p>
        <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>
          VISIT NOW
        </button>
      </div>
    );
  };
  
  export default ProductCard;