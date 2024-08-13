// ProductDetails.js

import ProductCard from './ProductCard';
import { products } from './productsData';

const ProductDetails = () => {
  return (
    <div className='pb-5 detailsWidth'>
       <section className='flex flex-col justify-center items-center gap-2 mt-10'>
                <h1 className=' text-[#898989] font-semibold '>আমাদের পণ্যের বিস্তারিত জানুন</h1>
                <div className='w-10 h-[3px] bg-[#b3b2b2]'></div>
            </section>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 px-5 md:px-3 pt-10 cardGrid'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc={product.imgSrc}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
