'use client'
import React from "react";
import Topnav from "../components/topnav"; 
import { FaSearch } from "react-icons/fa";
import { ImageSlider } from "../components/ImageSlider";

export default function Home() {
  return (
    <div className="w-[100%] h-screen overflow-hidden">
      <Topnav>
        <div className="w-full flex flex-col p-4">
          <div className="relative mx-[40vh]">
            <div className="absolute  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
              <input type="search" id="default-search" className="h-10 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  rounded-full bg-gray focus:ring-blue-500 focus:border-blue-500 dark:bg-gwhite dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search..." required />
              <button type="submit" className=" h-8 text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none  font-medium rounded-full text-sm px-4 py-2 bg-opacity-0"><FaSearch className="text-black text-2xl" /></button>
            </div>
            
            <div className="pt-5 h-[45vh] px-[25vh]">
              <ImageSlider className="border rounded-2xl" />
            </div>
          <div className="flex px-[25vh] pt-5 justify-between">
            <div className="w-1/4 relative hover:scale-95 hover:duration-75">
              <a href="" className="rounded-3xl relative">
                <img className="object-cover rounded-3xl" src="/img/artwork.jpg" alt="artwork" />
                <p className="absolute bottom-2 left-2 text-3xl text-white lol">Artworks</p>
              </a>
            </div>

            <div className="w-1/4 h-[15vh] relative hover:scale-95 hover:duration-75">
              <a href="" className="rounded-3xl relative">
                <img className="object-cover rounded-3xl" src="/img/shop2.jpg" alt="shop2" />
                <p className="absolute bottom-2 left-2 text-3xl text-white lol">Products</p>
              </a>
            </div>

            <div className="w-1/4 relative hover:scale-95 hover:duration-75">
              <a href="" className="rounded-3xl relative hover:scale-95 hover:duration-75 ">
                <img className="object-cover rounded-3xl h-full" src="/img/collection.jpg" alt="collection" />
                <p className="absolute bottom-2 left-2 text-3xl text-white lol">Collection</p>
              </a>
            </div>
          </div>
        </div>
      </Topnav>
        
    </div>
  )
}
