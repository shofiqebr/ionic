import CardDetails from "./CardDetails";
import { products } from "./product/productsData";
const Card = () => {


    const product1 = products.filter(item => item.lineNo ===1)

    return (
        <div>
         <section className="lg:flex grid grid-cols-2 md:grid-cols-3  items-center cardSection1">
            {
                product1.map((product, index)=>(
                    <CardDetails
                    key={index}
                    imgSrc={product.imgSrc}
                    title={product.title}
                    description={product.description}
                    
                    subtitle={product.subtitle}
                    ></CardDetails>
                ))
            }

         </section>
        </div>
    );
};

export default Card;