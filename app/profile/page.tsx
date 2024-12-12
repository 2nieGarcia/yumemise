'use client'
import React from "react";
import Topnav from "../components/topnav"; 
import { MdArrowDropDown } from "react-icons/md";
import { FileUpload } from "../components/file-upload";

export default function Home() {
  return (
    <div className="w-[100%] h-screen overflow-hidden">
      <Topnav>
        <div className="w-full">
          
          <div className="w-full h-[35vh] bg-no-repeat bg-cover bg-[url('/img/profilebackground.jpg')]">
            <div className="w-full h-full bg-black/60 flex justify-center text-center items-center flex-col ">
              <p className=" drop-shadow-[1px_0px_5px_#000000] text-[#8260c4] text-6xl lol">ユメミセ</p>
              <p className="text-6xl lol">YUMEMISE</p>
            </div>
          </div>

          <div className="flex relative">
            <img src="/img/profile.jpg" className="absolute translate-y-[-10vh] left-5 w-[25vh] rounded-full  border-[#eda9d6] border-2" alt="" />
            <div className="w-[20%]  flex flex-col justify-center items-center  pt-[10vh] px-5">
              <h1 className="p-2 text-md mb-4"><p className="text-gray-400">BIO:</p>Legit Seller, just give your number and credit pin to reviece 1 million pesos give away!!</h1>
              <p></p>
              <button type="button" className="w-full bg-black/60 py-4 px-5 rounded-2xl lol hover:border hover:duration-150"> Message</button>
            </div>
            <div className="p-5 w-full">
              <div className=" px-5 w-full flex justify-between items-start">
              <div className="flex flex-col"><p className="text-gray-400 mb-2">Username:</p><h1 className="text-4xl text-pink-300 lol">BSIT 1B</h1></div>
                <div><h1 className="text-md lol">Following 78</h1></div>
                <div><h1 className="text-md lol">Followers 128.5k</h1></div>
                <div><h1 className="text-md lol">Friends 34</h1></div>
              </div>

              <div className="p-5">
                <div className=" h-[35vh] bg-black/50 rounded-2xl">
                  <div className="w-[100%] border-pink border-b-2 py-2 px-20 flex justify-between item-center text-xl">
                    <div className="relative"><a href="">Shop<div className="absolute bottom-[-9vh] left-[-2.5vh] text-8xl"><MdArrowDropDown /></div></a></div>
                    <div><a href="profile/collections">Collection</a></div>
                    <div><a href="#">Vlogs</a></div>
                    <div><a href="#">Artworks</a></div>
                  </div>
                  <div className="flex">
                    <div className="w-1/4 flex flex-col justify-center items-center">
                      <FileUpload />
                    </div>

                      {
                        [
                          {id: 0, title: "Kuromi 6 set of ballpen", url:"/img/shop1.jpg", name:"shop1"},
                          {id: 1, title: "Gojo ballpen", url:"/img/shop2.jpg ", name:"shop2"},
                          {id: 2, title: "Kuromi 6 set of ballpen", url:"/img/shop3.jpg", name:"shop3"}

                        ].map(({id, title, url, name}) => {
                          return <div key={id} className="w-1/4 flex flex-col px-4 h-full">
                            <a href="" className="flex flex-col justify-center items-center w-full h-full hover:scale-95 hover:duration-75">
                              <img className="w-[100%] h-[22vh] object-cover rounded-3xl pt-3 border-gray-700 " src={url} alt={name} />
                              <p className="pt-2">{title}</p>
                            </a>
                          </div>
                        })
                      }
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </Topnav>
        
    </div>
  )
}
