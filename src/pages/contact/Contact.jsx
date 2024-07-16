// import { useState } from "react";
import { useForm } from "react-hook-form";
// import { FaArrowAltCircleRight, FaUser } from "react-icons/fa";
// import { FaGear } from "react-icons/fa6";
// import { IoIosText } from "react-icons/io";
// import { LuArrowUpFromLine } from "react-icons/lu";
// import { MdCall, MdEmail } from "react-icons/md";


const Contact = () => {
  // const [selectedReason, setSelectedReason] = useState('');

  // const handleButtonClick = (reason) => {
  //   setSelectedReason(reason);
  // };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return (
      <div >
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2614811050375!2d90.45120552592653!3d23.702354640618037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b74993c45fad%3A0x4036eaf54121ad53!2sIONIC%20Corporation!5e0!3m2!1sbn!2sbd!4v1720508977665!5m2!1sbn!2sbd"
    className="w-full h-[600px] pt-44"

    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
        <div className="bg-[#F3F3F3] flex gap-10 lg:flex-row flex-col px-2">



  {/* form part starts */}

      <section className="py-20 lg:w-1/2 lg:pl-80 ">
      <p className="text-3xl font-bold pb-10">Support Center</p>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>

      <div>
      <label htmlFor="firstName" className="flex justify-start items-center pl-3 pb-2">আপনার নাম</label>
      <input className="border w-full h-12 mt-2 rounded px-3" placeholder="আপনার নাম" {...register("name")} />
      </div>
      <div>
      <label htmlFor="firstName" className="flex justify-start items-center pl-3 pb-2">আপনার মোবাইল নাম্বার</label>
      <input className="border w-full h-12 mt-2 rounded px-3" placeholder="আপনার মোবাইল নাম্বার" {...register("mobile")} />
      </div>
      <div>
      <label htmlFor="firstName" className="flex justify-start items-center pl-3 pb-2">যে সফ্টওয়ারটির ডেমো দেখতে চাচ্ছেন, নির্বাচন করুন</label>
     
      <select className="border w-full h-12 mt-2 rounded px-3"  {...register("software")} >
      <option value="IONIC Education">IONIC Education</option>
      <option value="IONIC Hospital">IONIC Hospital</option>
      <option value="IONIC Shop">IONIC Shop</option>
      <option value="IONIC ERP">IONIC ERP</option>
      <option value="IONIC HRM">IONIC HRM</option>
      <option value="IONIC Pharma">IONIC Pharma</option>
      <option value="IONIC Repair">IONIC Repair</option>
      <option value="IONIC Tailor">IONIC Tailor</option>
      <option value="IONIC Travel">IONIC Travel</option>
      <option value="IONIC Trasport">IONIC Trasport</option>
      <option value="IONIC Store">IONIC Store</option>
      <option value="IONIC Real State">IONIC Real State</option>
      <option value="Go Account">Go Account</option>
      <option value="My Bhara">My Bhara</option>
      <option value="My Restura">My Restura</option>
      <option value="My Diagnostic">My Diagnostic</option>
       

        </select>
      </div>
      <div>
      <label htmlFor="firstName" className="flex justify-start items-center pl-3 pb-2">আপনার ব্যবসার ধরণ কি</label>
      <input className="border w-full h-12 mt-2 rounded px-3" placeholder="আপনার ব্যবসার ধরণ কি" {...register("businessType")} />
      </div>
      {/* <div className="flex flex-col">
     <label htmlFor="company">Company/School/Hospital Name</label>
      <input className="border h-8 mt-2" {...register("company")} />
      </div> */}
      {/* <div className="flex gap-5">
              <div className="flex flex-col">
            <label className="flex justify-start items-center" htmlFor="email"><MdEmail /> Email address</label>
              <input className="border mt-2 w-full h-8" {...register("email")} />
              </div>
              <div  className="flex flex-col">
              <label className="flex  justify-start items-center" htmlFor="MobileNo"><MdCall />Mobile No</label>
                <input className="border mt-2 w-full h-8" {...register("MobileNo")} />
              </div>
      </div> */}


        {/* <p className="flex justify-start items-center"><FaGear />Reason for enquiry</p> */}
        {/* <div className="grid grid-cols-3 gap-2">
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'general' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('general')}
      >
        <input
          type="radio"
          name="reason"
          id="general"
          value="general"
          checked={selectedReason === 'general'}
          onChange={() => handleButtonClick('general')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="general">General</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'ionic school' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('ionic school')}
      >
        <input
          type="radio"
          name="reason"
          id="ionic school"
          value="ionic school"
          checked={selectedReason === 'ionic school'}
          onChange={() => handleButtonClick('ionic school')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="ionic school">IONIC School</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'ionic hospital' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('ionic hospital')}
      >
        <input
          type="radio"
          name="reason"
          id="ionic hospital"
          value="ionic hospital"
          checked={selectedReason === 'ionic hospital'}
          onChange={() => handleButtonClick('ionic hospital')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="ionic hospital">IONIC Hospital</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'ionic shop' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('ionic shop')}
      >
        <input
          type="radio"
          name="reason"
          id="ionic shop"
          value="ionic shop"
          checked={selectedReason === 'ionic shop'}
          onChange={() => handleButtonClick('ionic shop')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="ionic shop">IONIC Shop</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'ionic repair' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('ionic repair')}
      >
        <input
          type="radio"
          name="reason"
          id="ionic repair"
          value="ionic repair"
          checked={selectedReason === 'ionic repair'}
          onChange={() => handleButtonClick('ionic repair')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="ionic repair">IONIC Repair</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'ionic tailor' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('ionic tailor')}
      >
        <input
          type="radio"
          name="reason"
          id="ionic tailor"
          value="ionic tailor"
          checked={selectedReason === 'ionic tailor'}
          onChange={() => handleButtonClick('ionic tailor')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="ionic tailor">IONIC Tailor</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'ionic travel' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('ionic travel')}
      >
        <input
          type="radio"
          name="reason"
          id="ionic travel"
          value="ionic travel"
          checked={selectedReason === 'ionic travel'}
          onChange={() => handleButtonClick('ionic travel')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="ionic travel">IONIC Travel</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'ionic pharma' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('ionic pharma')}
      >
        <input
          type="radio"
          name="reason"
          id="ionic pharma"
          value="ionic pharma"
          checked={selectedReason === 'ionic pharma'}
          onChange={() => handleButtonClick('ionic pharma')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="ionic pharma">IONIC Pharma</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'my bhara' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('my bhara')}
      >
        <input
          type="radio"
          name="reason"
          id="my bhara"
          value="my bhara"
          checked={selectedReason === 'my bhara'}
          onChange={() => handleButtonClick('my bhara')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="my bhara">My Bhara</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'my restora' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('my restora')}
      >
        <input
          type="radio"
          name="reason"
          id="my restora"
          value="my restora"
          checked={selectedReason === 'my restora'}
          onChange={() => handleButtonClick('my restora')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="my restora">My Restura</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'my diagnostic' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('my diagnostic')}
      >
        <input
          type="radio"
          name="reason"
          id="my diagnostic"
          value="my diagnostic"
          checked={selectedReason === 'my diagnostic'}
          onChange={() => handleButtonClick('my diagnostic')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="my diagnostic">My Diagnostic</label>
      </button>
        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'go account' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('go account')}
      >
        <input
          type="radio"
          name="reason"
          id="go account"
          value="go account"
          checked={selectedReason === 'go account'}
          onChange={() => handleButtonClick('go account')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="go account">Go Account</label>
      </button>

      <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'ionic ocean' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('ionic ocean')}
      >
        <input
          type="radio"
          name="reason"
          id="ionic ocean"
          value="ionic ocean"
          checked={selectedReason === 'ionic ocean'}
          onChange={() => handleButtonClick('ionic ocean')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="ionic ocean">IONIC Ocean</label>
      </button>
    


        <button
        className={`bg-[#F91414] rounded p-1 border border-black font-bold text-white cursor-pointer w-36 ${selectedReason === 'other' ? 'selected' : ''}`}
        onClick={() => handleButtonClick('other')}
      >
        <input
          type="radio"
          name="reason"
          id="other"
          value="other"
          checked={selectedReason === 'other'}
          onChange={() => handleButtonClick('other')}
          // style={{ paddingRight:'10px' }}
        />
        <label className="pl-1" htmlFor="other">Other</label>
      </button>
       
     
      
        
        
        </div> */}
   

   
      {/* <div>
        <label className="flex items-center mb-2" htmlFor="textarea"><IoIosText />All Info/Massage Write</label>
        <textarea className="lg:w-[500px] w-80 lg:h-[200px] h-44"/>
        <p className="text-xs">Type your info/massage...</p>
      </div> */}
      {/* <div>
        <p>Upload File</p>
      <label htmlFor="myfile" className="custom-file-upload">
        <span className="flex items-center gap-1 font-bold"> Browse<LuArrowUpFromLine /></span>
       
      </label>
      <input type="file" id="myfile" name="myfile" style={{ display: 'none' }} />

      </div> */}


      {/* <div>
      <label htmlFor="send" className="custom-file-upload">
        <span className="flex items-center gap-5 w-44 justify-center font-bold">send<FaArrowAltCircleRight /></span>
      </label>
      <input type="submit" id="send" name="send" style={{ display: 'none' }} />

      </div> */}
      


    </form>
      </section>



      {/* right section */}
      <section>
        <div>
          <div className="py-20 ">
            <p className="font-bold text-xl pb-5">Our Offices</p>
            <ul className="bg-white text-[#656464] lg:w-[550px] border p-10 pr-20">
            <p className="font-semibold text-lg text-black pb-2">Our Office</p>
              <li>Address: House # 18, Road # 01, Proschim Rayarbag, Jattrabari, Dhaka-1362</li>
              <li>Mobile : +8801958442200</li>
              <li>Email: ioniccorporation@gmail.com</li>
              <li>Website : ioniccorporation.com</li>
            </ul>
          </div>


          <div className="bg-white mb-20 lg:w-[550px]">
              <ul className="bg-white text-[#656464]  border p-10 pr-20">
              <p className="font-semibold text-lg text-black pb-2">Helpline & Business Hours</p>
                <li>Saturday – Friday 8 AM – 8PM</li>
                <li>24/7/365 Live Service – Imo/WhatsApp +8801511142320
                </li>
              </ul>

          </div>



          <div className=" mb-20 lg:w-[550px] bg-white text-[#656464]  border p-10 pr-20">
              <p className="font-semibold text-lg text-black pb-2">Get in touch</p>
              
                <p>To receive any of our support 24 hours a day, 7 days a week, call the Imo / WhatsApp number displayed above. Also use this number for details. – Thank you</p>
              

          </div>
        </div>

      </section>






  {/* form part ends */}

        </div>

</div>

    );
};

export default Contact;