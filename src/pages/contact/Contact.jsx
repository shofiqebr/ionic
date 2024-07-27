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