import logo from '../../assets/logo.png'
import basis from '../../assets/basis.svg'

import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

import ionic from '../../assets/ionic.png'
import ocen from '../../assets/osen.png'
import talkcell from '../../assets/talksell.png'
import protidhoni from '../../assets/protidhoni.png'
import { Link } from 'react-router-dom';
import { RxCross1, RxCross2 } from 'react-icons/rx';

import { useState } from 'react';
import ModalBody from '../modalBody/ModalBody';




const Navbar = () => {


  const [open, setOpen] = useState(false)
 
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)




 
    return (
        <div className='fixed w-full bg-[#F3F3F3] z-10 '>


     
     
          
        
      




        {/* gray section */}


            <section className="lg:flex justify-center items-center bg-[#001B41] hidden">
                <p className="text-[12px] text-white py-1">
                    We Are A Trusted Digital IT Solution In Bangladesh. Business Solution Software ERP, Website, Mobile Apps, Hosting, Domain, SMS Etc.
                </p>
            </section>




            {/* main navbar */}




            <section className=" bg-white">
            <div className="drawer ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar w-full flex justify-evenly items-center xl:px-48 ">
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
            <ul className='flex justify-center items-center gap-2'>
              <Link to='/'>
                <li className='text-lg font-bold'>হোম <span className='opacity-30'>|</span> </li>
              </Link>
                {/* <li className='flex justify-center items-center text-lg font-bold group relative'>সেবা সমূহ <span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                    <ul className='group-hover:block hidden absolute left-0 top-6  bg-white w-56  p-3 z-50' >
                      <a href="https://ioniccorporation.com/managed-cpanel-sever/">
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                            <img className='w-5' src={ionic} alt="" />
                            <p className='font-normal'>আইওনিক এসএমএস</p>
                        </li>
                      </a>
                        <a href="https://ioniccorporation.com/ionic-ocean/">
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                            <img className='w-5' src={ocen} alt="" />
                            <p className='font-normal'>আইওনিক ওসেন</p>
                        </li>
                        </a>
                        <a href="https://ioniccorporation.com/talksale/">
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                            <img className='w-5' src={talkcell} alt="" />
                            <p className='font-normal'>টকসেল </p>
                        </li>
                        </a>
                        <a href="http://ww25.protidhoni.com/?subid1=20240713-1518-18fc-96d6-9db661045065">
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                            <img className='w-5' src={protidhoni} alt="" />
                            <p className='font-normal'>প্রতিধ্বনি </p>
                        </li>
                        </a>
                     <Link to='/shikkha'>
                        <li className='flex justify-start gap-2 items-center text-sm py-3'>
                           
                       <p className='font-normal'> শিক্ষা চ্যাট </p>
                        </li>
                     </Link>
                       
                    </ul> 
                 
                
                </li> */}
                <li className='flex justify-center items-center text-lg font-bold group relative'>ডোমেইন<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute top-6 left-0 bg-white w-56 p-5 font-normal text-base z-50'>
                          <a href="https://ionic.supersite2.myorderbox.com/">
                            <li className='py-1'>আন্তর্জাতিক ডোমেইন</li>
                          </a>
                          <a href="https://bdia.btcl.com.bd/">
                            <li className='py-1'>বিডি ডোমেইন</li>
                          </a>
                        </ul>
                
                </li>
                <li className='flex justify-center items-center text-lg font-bold group relative'>হোস্টিং<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> |</span>
                        <ul className='group-hover:block hidden absolute top-6 left-0 bg-white w-56 p-3 text-base  font-normal z-50'>
                           <Link to='/webHosting'>
                           <li className='py-2'> Plesk প্রিমিয়াম ওয়েব হোস্টিং</li>
                           </Link> 
                           <Link to='/dedicatedServer'>
                            <li className='py-2'>Plesk ডেডিকেটেড সার্ভার</li>
                           </Link>
                            <Link to='/resellerServer'>
                            <li className='py-2'>Plesk রিসেলার সার্ভার</li>
                            </Link>
                        </ul>
                    
                </li>
                <Link to='/contact'>
                <li className='text-lg font-bold'>যোগাযোগ <span className='opacity-30'>|</span></li>
                </Link>
            
                <li className='flex justify-center items-center text-lg font-bold group relative'>লগইন<span className='flex justify-center items-center gap-1 opacity-30'><FaAngleDown /> </span>
                        <ul className='group-hover:block hidden absolute text-base font-normal top-6 left-0 bg-white w-44 p-5 z-50'>
                          <a href="https://ionic.supersite2.myorderbox.com/login.php">
                            <li className='py-2'>ডোমেইন লগইন</li>
                          </a>
                          <a href="https://vmi699873.contaboserver.net:8443/login_up.php?success_redirect_url=%2F">
                            <li className='py-2'>হোস্টিং লগইন</li>
                          </a>
                          <a href="https://sms.mimsms.com/Identity/Account/Login?ReturnUrl=%2F">
                            <li className='py-2'>এসএমএস লগইন</li>
                          </a>
                          <a href="https://dash.ionicshop.xyz/login">
                            <li className='py-2'>স্টাফ লগইন</li>
                          </a>
                          <a href="https://support.ioniccorporation.com/">
                            <li className='py-2'>এজেন্ট হেল্প</li>
                          </a>
                        </ul>
                
                </li>
            </ul>
        </div>
     <Link to='/'>
      <div className="hidden flex-none lg:block">
        
          {/* Navbar menu content here */}
        
          <img className='w-32 ml-20' src={basis} alt="" />
        
      </div>
     </Link>
    
     
    </div>
    {/* Page content here */}
    {/* Content */}
  </div>
 
 
                      {/* -------------------------side bar----------------------- */}
 
 
 
 
 
  <div className="drawer-side  z-50">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu bg-white min-h-full w-80 p-0 text-black ">
      {/* Sidebar content here */}
    
  
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay flex justify-end items-center text-xl font-semibold p-3"><RxCross1 />close</label>
      <hr />


     




      <p className='text-xl font-semibold bg-[#F5F5F5] py-4 text-center border-b-[#FF0020]'>MENU</p>

      <Link to='/'>
      <li className='py-3  font-semibold text-[#FF0020]'><a>হোম </a></li>
      </Link>
      <hr />
      {/* <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>সেবা সমূহ</p><p onClick={()=>setOpen(!open)}>{open?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />

      {open && <>
        <a href="https://ioniccorporation.com/managed-cpanel-sever/">
        <li className='h-14 flex justify-center font-medium w-full'>আইওনিক এসএমএস</li>
        </a>
        <hr className='p-0'/>
        <a href="https://ioniccorporation.com/ionic-ocean/">
        <li className='h-14 flex justify-center font-medium w-full'>আইওনিক ওসেন</li>
        </a>
        <hr className='p-0'/>
        <a href="https://ioniccorporation.com/talksale/">
        <li className='h-14 flex justify-center font-medium w-full'> টকসেল</li>
        </a>
        <hr className='p-0'/>
        <a href="http://ww25.protidhoni.com/?subid1=20240713-1518-18fc-96d6-9db661045065">
        <li className='h-14 flex justify-center font-medium w-full'> প্রতিধ্বনি</li>
        </a>
        <hr className='p-0'/>
        <Link to='/shikkha'>
             <li className='flex justify-start gap-2 items-center text-sm py-3'>                      
                  <p className='font-normal'> শিক্ষা চ্যাট </p>
              </li>
        </Link>
      </>}
      
      </li>
      <hr className='p-0'/> */}
      <li><a className='flex justify-between h-14 font-semibold pr-0 hover:bg-white'> <p className=' w-full'>ডোমেইন </p><p onClick={()=>setOpen1(!open1)}>{open1?<FaAngleDown  className='bg-[#FF0000] text-white h-full text-[57px] p-4 font-light border ' />:<FaAngleRight className='text-[56px]  font-light border p-4 '/>}</p>  </a>
      <hr className='p-0' />

      {open1 && <>
        <a href="https://ionic.supersite2.myorderbox.com/">
        <li className='h-14 flex justify-center font-medium w-full'>আন্তর্জাতিক ডোমেইন বিডি ডোমেইন</li>
        </a>
        <hr className='p-0'/>
        <a href="https://bdia.btcl.com.bd/">
        <li className='h-14 flex justify-center font-medium w-full'> বিডি ডোমেইন</li>
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

      {/* 
  




                          </a>

 

  */}

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
          <a href="https://dash.ionicshop.xyz/login">
          
          <li className='h-14 flex justify-center font-medium w-full'>স্টাফ লগইন </li>
          </a>
          <hr className='p-0' />
          <a href="https://support.ioniccorporation.com/">
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


            <section className="bg-[#001B41] h-1 md:pr-5 relative mt-2 ‍ shadow-2xl ">
            <div className="max-w-screen-2xl">
            <div className="flex lg:justify-end justify-center gap-3 absolute -top-[13px] lg:right-[375px] md:right-5 right-10">
            <h1 className='bg-[#001B41] text-white  p-1 font-semibold text-[16px] w-56 text-center hidden md:block'>
           বিক্রয় প্রতিনিধি : 01958442200
                  </h1>
            <h1 className='bg-[#001B41] text-white  p-1 font-semibold text-[16px] w-56 text-center hidden md:block'>
            কাষ্টমার কেয়ার : 01511142320
                  </h1>
               
               
            



            


              </div>
            </div>
            </section>

            
        </div>
    );
};

export default Navbar;