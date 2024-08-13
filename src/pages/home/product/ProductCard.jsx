
const ProductCard = ({ imgSrc, title, description }) => {
    return (
      <>
      {/* <div className='h-[370px] bg-white p-3 px-5 flex flex-col gap-4 items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
        <img className='p-5 w-56' src={imgSrc} alt={title} />
        <h2 className='font-bold text-[20px]'>{title}</h2>
        <p className='text-center text-[17px] text-[#5e5d5d]'>{description}</p>
        <button className='bg-[#E80000] text-white p-3 rounded text-sm font-semibold transform md:opacity-0 group-hover:opacity-100 md:group-hover:block md:group-hover:-translate-y-5 transition duration-300 ease-in-out md:absolute -bottom-9'>
          VISIT NOW
        </button>
      </div> */}



      <div className='pb-10 bg-white pt-3  px-5  flex flex-col gap-4  items-center md:relative group transition duration-300 hover:shadow-xl rounded-md border'>
                    <img className='p-5 w-48' src={imgSrc} alt={title} />
                    <h2 className='font-bold '>{title}</h2>
                    <p className='text-center  text-[#5e5d5d] flex-grow'>{description}</p>
                   
                <a href="https://ionicerp.xyz/"className='bg-[#0C2A63] text-white p-3 rounded text-sm font-bold  transform lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:block lg:group-hover:-translate-y-5 transition duration-300 ease-in-out lg:absolute  -bottom-9'>বিস্তারিত</a>
            
              
                </div>

      </>
    );
  };
  
  export default ProductCard;