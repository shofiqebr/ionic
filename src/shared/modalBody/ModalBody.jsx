import logoHeader from '../../assets/logo-header.png'
import {  FaLinkedinIn, FaOdnoklassniki, FaPinterest, FaViber } from 'react-icons/fa';
import { RiFacebookFill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { ImVk } from 'react-icons/im';
import { useForm } from 'react-hook-form';

const ModalBody = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className='flex md:flex-row flex-col p-10 pt-5 gap-3'>
          <div className='md:w-1/2'>
            <p className='text-white lg:text-[44px] text-[30px] leading-snug font-bold '>আমাদের সাথে <br /> যোগাযোগ করুন</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-2 lg:py-5 py-2'>
              <label className='text-lg' htmlFor="firstName">আপনার নাম</label>
              <input className='py-2 px-3 rounded '  placeholder='আপনার নাম' {...register("firstName")} required />
              </div>
              <div className='flex flex-col gap-2 lg:py-5 py-2'>
              <label className='text-lg' htmlFor="firstName">আপনার মোবাইল নাম্বার</label>
              <input className='py-2 px-3 rounded '  placeholder='আপনার মোবাইল নাম্বার' {...register("mobile")} required />
              </div>
              <div className='flex flex-col gap-2 lg:py-5 py-2'>
                      <label className='text-lg' htmlFor="firstName">যে সফ্টওয়ারটির ডেমো দেখতে চাচ্ছেন, নির্বাচন করুন</label>
                      <select className='py-2 px-3 rounded ' {...register("software")}>
                        <option value="IONIC shop">IONIC shop</option>
                        <option value="IONIC Education">IONIC Education</option>
                        <option value="IONIC ERP">IONIC ERP</option>
                        <option value="IONIC Hospital">IONIC Hospital</option>
                        <option value="IONIC HRM">IONIC HRM</option>
                        <option value="My Bhara">My Bhara</option>
                        <option value="My Restura">My Restura</option>
                        <option value="My Restaura">My Restaura</option>
                        <option value="My Diagnostic">My Diagnostic</option>
                        <option value="IONIC Pharma">IONIC Pharma</option>
                        <option value="IONIC Pharma">IONIC Pharma</option>
                        <option value="IONIC Reapir">IONIC Reapir</option>
                        <option value="IONIC Tailor">IONIC Tailor</option>
                        <option value="IONIC Travel">IONIC Travel</option>
                        <option value="IONIC Transport">IONIC Transport</option>
                        <option value="IONIC Store">IONIC Store</option>
                        <option value="IONIC Real State">IONIC Real State</option>
                        <option value="Go Account">Go Account</option>
                      </select>
             </div>
              <div className='flex flex-col gap-2 lg:py-5 py-2'>
              <label className='text-lg' htmlFor="firstName">আপনার ব্যবসার ধরণ কি</label>
              <input className='py-2 px-3 rounded '  placeholder='আপনার ব্যবসার ধরণ কি' {...register("businessType")} required />
              </div>
              <div>

      <input value='Request for demo' className='bg-blue-500 rounded p-2 text-white font-bold' type="submit"/>
              </div>
    </form>
          </div>
          <div className='md:w-1/2 lg:pt-28 p-8'>

            <img src={logoHeader} alt="" />
            <h1 className='text-white font-bold text-xl py-5 text-center'>আইওনিক কর্পোরেশন বাংলাদেশের একটি বিশ্বস্ত ডিজিটাল আইটি সলিউশন কোম্পানি ।
            </h1>
            <p className='text-white text-center pb-5'>যেকোন বিজনেস সলিউশন সফটওয়্যার, ইআরপি সফটওয়্যার, ক্লাউড স্টোরেজ, ওয়েবসাইট ডেভেলপমেন্ট, মোবাইল অ্যাপস, হোস্টিং, ডোমেন, এসএমএস এবং ইকমার্স সলিউশন।</p>
            <ul className='flex gap-3 flex-wrap items-center justify-center'>
              <li>
                <a href=""><RiFacebookFill className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#365493] hover:border-[#365493]' /></a>
              </li>
              <li>
                <a href=""><FaXTwitter className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-black hover:border-black' /></a>
              </li>
              <li>
                <a href=""><MdEmail  className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#F89A1E] hover:border-[#F89A1E]' /></a>
              </li>
              <li>
                <a href=""><FaPinterest  className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#CB2027] hover:border-[#CB2027]' /></a>
              </li>
              <li>
                <a href=""><FaLinkedinIn className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#0274B3] hover:border-[#0274B3]' /></a>
              </li>
              <li>
                <a href=""><FaOdnoklassniki  className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#EE8208] hover:border-[#EE8208]' /></a>
              </li>
              <li>
                <a href=""><BsWhatsapp className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#1EBEA5] hover:border-[#1EBEA5]' /></a>
              </li>
              <li>
                <a href=""><ImVk  className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#4C75A3] hover:border-[#4C75A3]' /></a>
              </li>
              <li>
                <a href=""><FaViber className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#834995] hover:border-[#834995]' /></a>
              </li>
              <li>
                <a href=""><BsTelegram className='text-white border rounded-full text-4xl p-[6px] text-center hover:bg-[#37AEE2] hover:border-[#37AEE2]' /></a>
              </li>
              
            </ul>
          </div>
        </section>
    );
};

export default ModalBody;