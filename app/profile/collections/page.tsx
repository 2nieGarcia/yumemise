'use client'
import React from "react";
import Topnav from "../../components/topnav";
import { CiEdit } from "react-icons/ci";
import { FaImage } from "react-icons/fa";
import { PiImageSquareLight } from "react-icons/pi";

export default function Home() {
  return (
    <div className="w-[100%] h-screen overflow-hidden">
      <Topnav>
        <div className="flex flex-col px-20 py-10">
            <div className="font-bold">
                <h1 className="text-4xl lol">PERSONAL COLLECTIONS</h1>
                <div className="flex text-xl">
                    <div className="pr-4"><a href="#"><h1>Favorites</h1></a></div>
                    <div className="px-4 border-l-2"><a href="#"><h1>Saved</h1></a></div>
                    <div className="px-4 border-l-2"><a href="#"><h1>Pinned</h1></a></div>
                </div>
            </div>

            <div className="flex mt-5">
                <div className="flex-col w-1/2 mx-3 p-8 border bg-gray-700/80 rounded-xl">
                    <img className="object-cover w-full rounded-lg" src="/img/collections/collection2.jpg" alt="collection2" />
                    <div className="w-full flex justify-between">
                        <div className="w-1/3 py-2 mr-1">
                            <img className="object-cover w-full rounded-lg" src="/img/collections/collection1.jpg" alt="collection2" />

                        </div>

                        <div className="w-1/3 py-2 mr-1">
                            <img className="object-cover w-full rounded-lg" src="/img/collections/collection3.jpg" alt="collection2" />

                        </div>

                        <div className="w-1/3 py-2">
                            <img className="object-fill w-full rounded-lg h-full" src="/img/collections/collection4.jpg" alt="collection2" />
                        </div>
                    </div>

                    <div className="flex font-bold">
                        <div className="flex flex-col">
                            <h1 className="text-3xl">
                                Gacha Games
                            </h1>
                                <a href="#" className="flex text-xl">
                                    <CiEdit className="text-2xl" /> Edit
                                </a>
                        </div>

                        <h1 className="ml-32 flex items-center text-4xl">
                            <PiImageSquareLight /><p>456</p>
                        </h1>
                    </div>
                </div>

                <div className="flex-col w-1/2 mx-3 p-8 border bg-gray-700/80 rounded-xl">
                    <img className="object-cover w-full rounded-lg" src="/img/collections/collection5.jpg" alt="collection5" />
                    <div className="w-full flex justify-between">
                        <div className="w-1/3 py-2 mr-1">
                            <img className="object-cover w-full rounded-lg" src="/img/collections/collection6.jpg" alt="collection6" />

                        </div>

                        <div className="w-1/3 py-2 mr-1">
                            <img className="object-cover w-full rounded-lg" src="/img/collections/collection7.jpg" alt="collection7" />

                        </div>

                        <div className="w-1/3 py-2">
                            <img className="object-fill w-full rounded-lg h-full" src="/img/collections/collection8.jpg" alt="collection8" />
                        </div>
                    </div>

                    <div className="flex font-bold">
                        <div className="flex flex-col">
                            <h1 className="text-3xl">
                                Anime
                            </h1>
                                <a href="#" className="flex text-xl">
                                    <CiEdit className="text-2xl" /> Edit
                                </a>
                        </div>

                        <h1 className="ml-32 flex items-center text-4xl">
                            <PiImageSquareLight /><p>789</p>
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
      </Topnav>
        
    </div>
  )
}
