import logo from '../../assets/logo.png'
import logoHeader from '../../assets/logo-header.png'
import basis from '../../assets/basis.svg'
import { FaAngleDown, FaLinkedinIn, FaOdnoklassniki, FaPinterest, FaViber } from 'react-icons/fa';
import ionic from '../../assets/ionic.png'
import ocen from '../../assets/osen.png'
import talkcell from '../../assets/talksell.png'
import protidhoni from '../../assets/protidhoni.png'
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { RiFacebookFill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { ImVk } from 'react-icons/im';

const Navbar = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className='fixed w-full bg-[#F3F3F3] z-10'>
        {/* gray section */}


            <section className="lg:flex justify-center items-center bg-[#E3E3E3] hidden">
                <p className="text-[12px] text-[#797777] py-1">
                    We Are A Trusted Digital IT Solution In Bangladesh. Business Solution Software ERP, Website, Mobile Apps, Hosting, Domain, SMS Etc.
                </p>
            </section>




            {/* main navbar */}




            <section className="max-w-screen-xl mx-auto">
            <div className="drawer ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar w-full ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>
      <Link to='/'>
      <div className="mx-2 lg:ml-0 ml-10 flex-1 px-2">
        <img className='w-44' src={logo} alt="" />
      </div>
      </Link>

        <div className='lg:block hidden'>
            <ul className='flex justify-center items-center xl:pr-44 xl:pl-32 gap-2'>
              <Link to='/'>
                <li className='text-lg font-bold'>Home <span className='opacity-30'>|</span> </li>
              </Link>
                <li className='flex justify-center items-center text-lg font-bold group relative'>Services <span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                    <ul className='group-hover:block hidden absolute left-0 top-6  bg-white w-44  p-3' >
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                            <img className='w-5' src={ionic} alt="" />
                            <p className='font-normal'>Ionic SMS</p>
                        </li>
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                            <img className='w-5' src={ocen} alt="" />
                            <p className='font-normal'>Ionic OCEN</p>
                        </li>
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                            <img className='w-5' src={talkcell} alt="" />
                            <p className='font-normal'>Talkcell</p>
                        </li>
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                            <img className='w-5' src={protidhoni} alt="" />
                            <p className='font-normal'>Protidhoni </p>
                        </li>
                    </ul> 
                
                
                </li>
                <li className='flex justify-center items-center text-lg font-bold group relative'>Domain<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute top-6 left-0 bg-white w-56 p-5 font-normal text-base '>
                            <li className='py-1'>International Domain</li>
                            <li className='py-1'>BD Domain</li>
                        </ul>
                
                </li>
                <li className='flex justify-center items-center text-lg font-bold group relative'>Hosting<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute top-6 left-0 bg-white w-56 p-3 text-base  font-normal'>
                            <li className='py-2'>plesk premium web hosting</li>
                            <li className='py-2'>plesk dedicated server</li>
                            <li className='py-2'>plesk reseller server</li>
                        </ul>
                    
                </li>
                <Link to='/contact'>
                <li className='text-lg font-bold'>Contact <span className='opacity-30'>|</span></li>
                </Link>
               
                <li className='flex justify-center items-center text-lg font-bold group relative'>Login<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> </span>
                        <ul className='group-hover:block hidden absolute text-base font-normal top-6 left-0 bg-white w-44 p-5'>
                            <li className='py-2'>Domain Login</li>
                            <li className='py-2'>Hosting Login</li>
                            <li className='py-2'>SMS Login</li>
                            <li className='py-2'>Staff Login</li>
                            <li className='py-2'>Agent Help</li>
                        </ul>
                
                </li>
            </ul>
        </div>

      <div className="hidden flex-none lg:block">
        
          {/* Navbar menu content here */}
        
          <img className='w-32 ml-20' src={basis} alt="" />
        
      </div>
    </div>
    {/* Page content here */}
    {/* Content */}
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
            </section>



            {/* black part */}


            <section className="bg-black h-5 pr-5 ">
            <div className="max-w-screen-2xl">
            <div className="flex lg:justify-end justify-center gap-3 ">
                <p className="lg:block hidden text-white bg-[#FF0020] rounded-[4px] h-6 text-[12px] px-3 font-bold pt-[1px]">Information : 01958442200</p>
                <p className="lg:block hidden text-white bg-[#FF0020] rounded-[4px] h-6 text-[12px] px-3 font-bold pt-[1px]">Helpline : 01511142320</p>
            



                {/* ---------------------modal start---------------------------- */}


                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="" onClick={()=>document.getElementById('my_modal_5').showModal()}> <p className="text-white bg-[#FF0020] rounded-[4px] lg:h-6 text-[12px] px-3 font-bold lg:pt-[1px]">Request for Demo</p>
</button>
<dialog id="my_modal_5" className="">
  <div className=" lg:w-[1000px]  bg-[#808285] relative">

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






  
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className=" absolute top-2 right-2"><RxCross2 className='text-white text-2xl' /></button>
      </form>
    </div>
  </div>
</dialog>







                {/* ---------------------modal end---------------------------- */}


              </div>
            </div>
            </section>

            
        </div>
    );
};

export default Navbar;