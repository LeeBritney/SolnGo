import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRef, useState, useEffect } from 'react';
import WebcamVideo from "./Services/page2";
import page3 from "./Home/page3";
import { Metadata } from 'next'
import React from 'react';
import foo from './components/footer';
import Header from './components/header';
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: 'Your Profile',
}
 
 


export default function Home() {
  return (
    
    <main >
      <div className="header">
            <nav>
              <ol className="list">
              <li><Link href="#">Home</Link> </li>
                <li><Link href="./About">About</Link></li>

                <li>
                  <Image src="/sol&go.png" alt="Vercel Logo" className="dark:invert list-item-image" width={50} height={100} priority/>
                </li>

                <li><Link href="./Services">Services</Link></li>
                <li><Link href="./Contact">Contact</Link></li>
              </ol>
            </nav>
        </div>



<div className="divide-y divide-dashed ">
        <div className="md:flex m-2 justify-around ">
            <div className="flex-nowrap">
                    <Image 
                      src="/pfp.png"
                      alt="Profile picture"
                      className="dark:invert"
                      width={100}
                      height={24}
                      priority
                    />
                    <a className="text-lg">
                      <p className="text-center  pt-5">NIGHT MIRE</p>
                    </a>
              </div >
      </div>
      <br></br>
      <br></br>
      

        <div className="md:flex justify-around"> 
        <div></div>

              <div className=" justify-center">
                <br></br>
                  <div className="inline-block align-middle text-center h-10">Balance</div>

                  <div className="md:flex inline-block align-middle text-center h-10 ">
                    <div className="pr-4">MYR  :</div>
                    <div>77.85</div>
                  </div>
  
                  <div className="md:flex inline-block align-middle text-center h-10">
                    <div className="pr-4">SOL : </div>
                    <div>0.00004</div>
                  </div>
              </div>

              <div>
                <Image
                src="/qr.jpg"
                alt="qr"
                className="flex object-fit: cover justify-center items-center mx-auto"  
                width={150} 
                height={0}           
                />
              </div>

              <div></div>

        </div>


          <div className="justify-between space-y-2 text-center pt-10">
            <p className="container mx-auto px-4 py-2 border rounded-md border-black ">Security</p>
            <p className="container mx-auto px-4 py-2 border rounded-md border-black ">Advanced Settings</p>
            <p className="container mx-auto px-4 py-2 border rounded-md border-black ">Change Password</p>
            <p className="container mx-auto px-4 py-2 border rounded-md border-black  ">Log Out </p>

        

</div>
    </div>

    <div className="container mx-auto py-6 border border-black m-10">
    </div>

    <div>
      <Footer/>
    </div>



    </main>
  )
}
