
import { manufacturer } from './manufacturerData';


const ManufactureCards = () => {
    return (
        <div className='grid grid-cols-2 gap-8'>
            {
                manufacturer.map((manufacturer, index) => <div key={index} className='text-center'>
                    <div className='flex justify-center items-center'>

                    <img src={manufacturer.imgSrc} alt={manufacturer.title} />
                    </div>
                    <h1 className='text-xl font-bold py-2'>{manufacturer.title}</h1>
                    <p className='text-[17px] text-[#777777]'>{manufacturer.description}</p>
                </div>

                )
            }
        </div>
    );
};

export default ManufactureCards;