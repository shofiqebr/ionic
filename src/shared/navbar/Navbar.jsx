import logo from '../../assets/logo.png'
import basis from '../../assets/basis.svg'
import { FaAngleDown } from 'react-icons/fa';
import ionic from '../../assets/ionic.png'
import ocen from '../../assets/osen.png'
import talkcell from '../../assets/talksell.png'
import protidhoni from '../../assets/protidhoni.png'

const Navbar = () => {
    return (
        <>
        {/* gray section */}


            <section className="flex justify-center items-center bg-[#E3E3E3]">
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
    <div className="navbar bg-white w-full">
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
      <div className="mx-2 flex-1 px-2">
        <img className='w-44' src={logo} alt="" />
      </div>

        <div className='lg:block hidden'>
            <ul className='flex justify-center items-center pr-44 gap-2'>
                <li className='text-lg font-bold'>Home <span className='opacity-30'>|</span> </li>
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
                <li className='text-lg font-bold'>Contact <span className='opacity-30'>|</span></li>
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


            <section className="bg-black h-5 ">
            <div className="max-w-screen-2xl">
            <div className="flex justify-end gap-3 ">
                <p className="text-white bg-[#FF0020] rounded-[4px] h-6 text-[12px] px-3 font-bold pt-[1px]">Information : 01958442200</p>
                <p className="text-white bg-[#FF0020] rounded-[4px] h-6 text-[12px] px-3 font-bold pt-[1px]">Helpline : 01511142320</p>
                <p className="text-white bg-[#FF0020] rounded-[4px] h-6 text-[12px] px-3 font-bold pt-[1px]">Request for Demo</p>
              </div>
            </div>
            </section>

            
        </>
    );
};

export default Navbar;