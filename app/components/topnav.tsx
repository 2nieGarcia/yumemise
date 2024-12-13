import { FaHome, FaSearch, FaStar } from "react-icons/fa";
import Drop from "./drop";
import { MdGroups2, MdModeNight } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { TransitionLink } from "./transitionlink";
import Image from "next/image";

export default function Topnav({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return <div className="w-[100%] h-full">
        {/* topnav */}
        <div className="flex align-middle py-3  bg-[#0b255f] items-center">
            <div className="font-bold flex flex-col w-[15%] justify-center text-center text-lg">
                <p className="text-[#8260c4] text-xl lol">ユメミセ</p>
                <p className="lol">YUMEMISE</p>
            </div>

            <div className="flex w-[20%] justify-center">
                <p>Browse</p>
            </div>
            
            <div className="w-[30%] justify-center text-center ">
                <form className="max-w-md mx-auto">   
                    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="h-10 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  rounded-full bg-gray focus:ring-blue-500 focus:border-blue-500 dark:bg-gwhite dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search..." required />
                        <button type="submit" className=" h-8 text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-full text-sm px-4 py-2 bg-opacity-0"><FaSearch className="text-black text-2xl" /></button>
                    </div>
                </form>
            </div>

            <div className="w-[20%] flex text-center justify-center">
                    <Drop className="" name="English" />
            </div>

            <div className="w-[15%] text-end"><button type="button" className="text-4xl mr-4"><MdModeNight /></button></div>
        </div>


        {/*sideNav*/}
        <div className="flex flex-row w-[100%] h-full bg-black/80">
            <div className="flex flex-col w-[20%] items-center  h-[90%]">
                {[
                    {id:0, photo:'/img/nav/home.jpg', title:'Home', url:'', icon:<FaHome />},
                    {id:1, photo:'/img/nav/community.jpg', title:'Community', url:'community', icon:<MdGroups2 />},
                    {id:2, photo:'/img/nav/featured.jpg', title:'Featured',  url:'featured', icon:<FaStar />},
                    {id:3, photo:'/img/nav/support.jpg', title:'Profile',  url:'profile', icon:<BiSupport />},
                    {id:4, photo:'/img/nav/settings.jpg', title:'Settings',  url:'settings',icon: <IoIosSettings />},
                ].map(({id, photo, title, url, icon}) => (
                    <div key={id} className="relative h-[15vh] w-[100%] items-center hover:z-10 duration-75 hover:border-2 border-[#FFFFFF]">
                        <img src={photo} alt="" className="object-cover w-[100%] h-[100%]" />
                        <TransitionLink href={`/${url}`} className="absolute top-0 flex justify-center items-center w-[100%] min-h-[100%] bg-[rgba(0,0,0,0.6)]"><h1 className="text-2xl p-2">{icon}</h1>{title}</TransitionLink>
                    </div>
                ))}
            </div>
            <div className="w-[100%] container bg-gradient-to-r from-[#742d5c]/50 to-[#000e49]/70 bg-opacity-90 h-full">
                {children}
            </div>
        </div>
    </div>
}