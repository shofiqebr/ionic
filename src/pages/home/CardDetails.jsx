

const CardDetails = ({ imgSrc, title, description, subtitle}) => {
    return (
        <div className="flex flex-col justify-center items-center border-r border-b   py-5 px-3 lg:hover:scale-105 text-center bg-white lg:w-44 cards z-10">

                        <img className="w-32 pb-5" src={imgSrc} />
                        <h4 className="font-bold cardHeading text-">{title}</h4>
                        <p className="text-[#718095] cardType text-center   text-[13px]"> {subtitle}</p>
                        <a className="font-semibold hover:bg-[#0C2A63] hover:text-white p-1 px-3 rounded-[4px] text-[14px]  pt-2" href="https://ionicerp.xyz/">বিস্তারিত</a>
                    </div>
    );
};

export default CardDetails;