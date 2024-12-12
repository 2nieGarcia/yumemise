'use client'
import React from "react";
import Topnav from "./components/topnav"; 
import { ImageSlider } from "./components/ImageSlider";
import { TransitionLink } from "./components/transitionlink";

export default function Home() {
  return (
    <div className="w-[100%] h-screen overflow-hidden">
      <Topnav>
        <div className="">
            <ImageSlider className={"max-h-[40vh]"} />
            <div className="flex bg-gradient-to-b px-5">
                <div className="w-[60%] h-[100%] flex flex-col py-4 ">
                <TransitionLink href="/profile" className="relative hover:scale-95 hover:duration-100  bg-gradient-to-r border border-black from-[#742d5c]/50 to-[#000e49]/60">
                  <div className="bg-[pink-400] flex p-5">
                      <img className="rounded-full h-[13vh] w-[13vh]  border-[#eda9d6] border-2 shadow-white" src="/img/profile.jpg" alt="bingbong" />
                      <div className="flex items-center min-h-20 ml-3">
                        <div className="mr-8">
                          <p className="text-md text-gray-400">USERNAME:</p>
                          <p className="text-2xl text-[#d168ad] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">ITC GROUP #5 UI design</p>
                        </div>

                        <div> 
                          <p className="text-md text-gray-400">DISPLAYED NAME:</p>
                          <p className="text-2xl text-[#d168ad] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">BSIT 1B</p>
                        </div>
                      </div>
                  </div>
                  <p className="absolute right-3 bottom-2 shadow-black border-black">VIEW PROFILE</p>
                </TransitionLink>

                <div className="flex pt-3 h-[50%] text-xl">
                  <TransitionLink href="/profile/collections" className="w-[80%] pr-3  hover:scale-95 hover:duration-75">
                    <div className=" p-1">
                      <h1 className="text-center">Personal Collection</h1>
                      <img src="/img/personalcollection.jpg" className=" w-[100%] object-cover h-[20vh] " alt="personalcollection" />
                    </div>
                  </TransitionLink>

                  <TransitionLink href="/community" className="w-[30%] hover:scale-95 hover:duration-75 ">
                    <div className="p-1">
                      <h1 className="text-center">Start Selling</h1>
                      <img src="/img/startselling.jpg" className="w-[100%] object-cover h-[20vh] " alt="startselling" />
                    </div>
                  </TransitionLink>
                  
                </div>
              </div>

              <div className="w-[40%] py-4  px-5 flex flex-col">
                <div className="w-[100%] h-[7.5vh] bg-gradient-to-r from-yellow-400/80 to-black/50  flex items-center justify-center border">
                  <h1 className="text-4xl text-center shadow-black align-middle ">FLASH SALE</h1>
                </div>
                <a className="hover:border hover:duration-75" href=""><img src="/img/flash1.jpg" className="w-[100%] h-[7.5vh] object-cover" alt="" /></a>
                <a className="hover:border hover:duration-75" href=""><img src="/img/flash2.jpg" className="w-[100%] h-[7.5vh] object-cover " alt="" /></a>
                <a className="hover:border hover:duration-75" href=""><img src="/img/flash3.jpg" className="w-[100%] h-[7.5vh] object-cover" alt="" /></a>
                <a className="hover:border hover:duration-75" href=""><img src="/img/flash4.jpg" className="w-[100%] h-[7.5vh] object-cover" alt="" /></a>
                <a className="hover:border hover:duration-75" href=""><img src="/img/flash5.jpg" className="w-[100%] h-[7.5vh] object-cover" alt="" /></a>
              </div>
          </div>
        </div>
      </Topnav>
        
    </div>
  )
}
