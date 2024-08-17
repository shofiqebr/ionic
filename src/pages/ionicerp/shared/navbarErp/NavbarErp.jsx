import logo from '../../../../assets/logo.png'
import basis from '../../../../assets/basis.svg'
import ionicErpLogo from '../../../../assets/new logo/ionic-erp-logo.png'

import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import fixedImg from '../../../../assets/new logo/care-call-4.png'; 


const NavbarErp = () => {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

    return (
        <div className='fixed  bg-[#F3F3F3] z-50  max-w-[1920px] mx-auto w-full'>

         {/* gray section */}


            <section className="lg:flex justify-center items-center bg-[#001B41] hidden">
                <p className="text-[12px] text-white py-1">
                    We Are A Trusted Digital IT Solution In Bangladesh. Business Solution Software ERP, Website, Mobile Apps, Hosting, Domain, SMS Etc.
                </p>
            </section>




            {/* main navbarErp */}




            <section className=" bg-white lg:pb-2 pb-5 ">
            <div className="drawer navWidth mx-auto ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* NavbarErp */}
    <div className="navbar w-full flex justify-evenly md:justify-between items-center max-w-[1920] mx-auto">
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




      <Link to='/homeErp'>
      <div className="mx-2 lg:ml-0 md:ml-32 ml-10 flex-1 px-">
        <img className='w-44 ' src={ionicErpLogo} alt="" />
      </div>
      </Link>

        <div className='lg:block hidden'>
            <ul className='flex justify-center items-center gap-2'>
              <Link to='/homeErp'>
                <li className='xl:text-lg text-[14px] font-bold'>হোম <span className='opacity-30'>|</span> </li>
              </Link>
              <li className='xl:text-lg text-[14px] font-bold'>কোম্পানি <span className='opacity-30'>|</span> </li>
                <li className='flex justify-center items-center xl:text-lg text-[14px] font-bold group relative'>শিল্প খাত সমূহ<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute xl:top-6 lg:top-5 left-0 bg-white w-56 p-5 font-normal text-base z-50'>
                          <Link to='manufacturing'>
                            <li className='py-1'>ম্যানুফ্যাকচারিং ইন্ডাস্ট্রিজ</li>
                          </Link>
                          <Link to='healthCare'>
                            <li className='py-1'>স্বাস্থ্যসেবা</li>
                          </Link>
                          <Link to='tradingErp'>
                            <li className='py-1'>ট্রেডিং ব্যবসা</li>
                          </Link>
                          <Link to='chemical-industry-ionic-erp'>
                            <li className='py-1'>রাসায়নিক শিল্প</li>
                          </Link>
                          <a href="">
                            <li className='py-1'>স্বাস্থ্যেসবা ব্যবস্থাপনা</li>
                          </a>
                          <a href="">
                            <li className='py-1'>ঋণ ব্যবস্থাপনা</li>
                          </a>
                          <a href="">
                            <li className='py-1'>কৃষি ব্যবস্থাপনা</li>
                          </a>
                        </ul>
                
                </li>
               
                <Link to='/contact'>
                <li className='xl:text-lg text-[14px] font-bold'>টিউটোরিয়াল</li>
                </Link>
            
               
            </ul>
        </div>
    
      <div className="hidden md:flex justify-center items-center">
        
          {/* NavbarErp menu content here */}

          <Link to='/'>
          <img className='w-36 pb-1' src={logo} alt="" />
          </Link>
          <a href="https://basis.org.bd/company-profile/23-01-033">
        
          <img className='w-32 ml-5 mr-1' src={basis} alt="" />
          </a>
        
      </div>

    
     
    </div>
    {/* Page content here */}
    {/* Content */}
  </div>
 
 
                      {/* -------------------------side bar----------------------- */}
 
 
 
 
 
  <div className="drawer-side  z-50">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu bg-white min-h-full w-80 p-0 text-black text-lg  ">
      {/* Sidebar content here */}
    
  
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay flex justify-end items-center text-xl font-semibold p-3"><RxCross1 />close</label>
      <hr />


     




      <p className='text-xl font-semibold bg-[#F5F5F5] py-4 text-center border-b-[#FF0020]'>MENU</p>

      <Link to='/'>
      <li className='py-3  font-semibold text-[#FF0020]'><a>হোম </a></li>
      </Link>
      <hr />
    
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>ডোমেইন </p><p onClick={()=>setOpen1(!open1)}>{open1?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />

      {open1 && <>
        <Link to='manufacturing'>
        <a href="https://ionic.supersite2.myorderbox.com/">
        <li className='h-14 flex justify-center font-medium w-full'>ম্যানুফ্যাকচারিং ইন্ডাস্ট্রিজ</li>
        </a>
        </Link>
        <hr className='p-0'/>
        <Link to='healthCare'>
        <li className='h-14 flex justify-center font-medium w-full'>  স্বাস্থ্যসেবা</li>
        </Link>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <a href="https://bdia.btcl.com.bd/">
        <li className='h-14 flex justify-center font-medium w-full'>ট্রেডিং ব্যবসা</li>
        </a>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <Link to='chemical-industry-ionic-erp'>
        <li className='h-14 flex justify-center font-medium w-full'>রাসায়নিক শিল্প</li>
        </Link>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <a href="https://bdia.btcl.com.bd/">
        <li className='h-14 flex justify-center font-medium w-full'> স্বাস্থ্যেসবা ব্যবস্থাপনা</li>
        </a>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <a href="https://bdia.btcl.com.bd/">
        <li className='h-14 flex justify-center font-medium w-full'> ঋণ ব্যবস্থাপনা</li>
        </a>
        <hr className='p-0'/>
        <hr className='p-0'/>
        <a href="https://bdia.btcl.com.bd/">
        <li className='h-14 flex justify-center font-medium w-full'> কৃষি ব্যবস্থাপনা</li>
        </a>
        <hr className='p-0'/>
      </>}
      
      </li>
      <hr className='p-0'/>
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>হোস্টিং</p><p onClick={()=>setOpen2(!open2)}>{open2?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />
     


      {open2 && <>
        <Link to='/webHosting'>
        <li className='h-14 flex justify-center font-medium w-full' >Plesk প্রিমিয়াম ওয়েব হোস্টিং </li>
        </Link>
        <hr className='p-0'/>
        <Link to='/dedicatedServer'>
        <li className='h-14 flex justify-center font-medium w-full'>Plesk ডেডিকেটেড সার্ভার </li>
        </Link>
        <hr className='p-0'/>
        <Link to='/resellerServer'>
        <li className='h-14 flex justify-center font-medium w-full'>Plesk রিসেলার সার্ভার</li>
        </Link>
        <hr className='p-0'/>
      </>}
      
      </li>
      <hr className='p-0'/>
      
  
      
  


    
      <Link to='/contact'>
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white '> যোগাযোগ  </a></li>
      </Link>
      <hr />


      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>লগইন</p><p onClick={()=>setOpen3(!open3)}>{open3?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />

   

      {open3 && <>
        <a href="https://ionic.supersite2.myorderbox.com/login.php">
        <li className='h-14 flex justify-center font-medium w-full'>ডোমেইন লগইন </li>
        </a>
        <hr className='p-0' />
        <a href="https://vmi699873.contaboserver.net:8443/login_up.php?success_redirect_url=%2F">
          <li className='h-14 flex justify-center font-medium w-full'>হোস্টিং লগইন </li>
        </a>
          <hr className='p-0' />
          <a href="https://sms.mimsms.com/Identity/Account/Login?ReturnUrl=%2F">
          <li className='h-14 flex justify-center font-medium w-full'>এসএমএস লগইন </li>
          </a>
          <hr className='p-0' />
          <a href="https://erp.ioniccorporation.com/">
          
          <li className='h-14 flex justify-center font-medium w-full'>স্টাফ লগইন </li>
          </a>
          <hr className='p-0' />
          <a href="https://erp.ioniccorporation.com/">
          <li className='h-14 flex justify-center font-medium w-full'>এজেন্ট হেল্প</li>
          </a>
          <hr className='p-0' />
      </>}
      
      </li>
      
      <hr />
    </ul>
  </div>
</div>
            </section>



            {/* black part */}


            <section className="bg-[#001B41] h-1    shadowCustom  ">   </section>
            <div className="navLine flex  justify-center gap-3 md:ml-[283px] -mt-5 ">
            <h1 className='bg-[#001B41] text-white  p-1 font-semibold text-[16px] w-56 text-center hidden md:block'>
            কাষ্টমার কেয়ার : 01511142320
          
            </h1>
            <h1 className='bg-[#001B41] text-white  p-1 font-semibold text-[16px] w-56 text-center relative'>
            বিক্রয় প্রতিনিধি : 01958442200
            
                
               




               {/* -------------side fixed popup------------------ */}





               <div className='w-full bg-[#F3F3F3] z-50 absolute'>
      <div className=''>
        
          <div className='absolute top-72 test hidden lg:block'>
            <div className='relative  '>
              <section className='bg-gradient-to-b from-[#1574C4] to-[#001B42] testSection w-44 rounded-2xl  px-1 pb-2'>
                <div className='text-white'>
                  <div className='relative'>
                    <img className='-mt-3 absolute -top-10' src={fixedImg} alt="" />
                  </div>
                  <h1 className= 'orangeSquare bg-[#FFAA00] text-black absolute xl:top-[98px] lg:top-[80px] -left-[12px]  pt-[4px] font-bold 2xl:w-44  text-center '>
                   রিসোর্স প্ল্যানিং করতে
                  </h1>
                  <div className='px-1'>

                  <p className=' xl:pt-36 lg:pt-28  xl:font-[400] text-sm xl:pb-4 lg:pb-2 xl:text-sm text-center lg:text-[11px] '>যখন আপনার ব্যবসার জন্য এন্টারপ্রাইজ রিসোর্স প্ল্যানিং সফ্টওয়্যার বাস্তবায়নের কথা চিন্তায় আসে?</p>
                  <p className='xl:pb-2 text-xs 2xl:font-medium xl:font-[400] text-center xl:text-[16px] text-[#FFAA00] leading-6'>আপনার ব্যবসা এন্টারপ্রাইজ রিসোর্স প্ল্যানিং প্রস্তুত করতে।</p>
                 




                
<section className="flex flex-col justify-center items-center" > 
            <div className=' 2xl:text-lg  font-bold  pt-2'>আমাকে কল করুন
            </div>
          <div className=' lg:text-[19px] font-extrabold  number  text-[#ffbd3a]'>

          01958442200
          </div>
</section>
                  </div>
                </div>
              </section>
            </div>
          </div>
        
      </div>
                </div>


                </h1>
              </div>    
        </div>
    );
};

export default NavbarErp;