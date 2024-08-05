import React from "react";
import { Button } from "@/components/ui/button";

const Company = () => {
  return (
    <main>
      <div
        className={`flex justify-between items-center p-[2rem] z-50 fixed w-[100%]
    backdrop-blur-sm pt-[2rem] px-[2rem]
    `}
      >
        {/* Image */}
        <div>
          <img src="/logo.png" alt="" className="h-[48px] " />
          {/* <p>Zyre</p> */}
        </div>
        <div>
          <ul className="flex gap-[4rem]">
            <div>
              <a href="/">
                <li className="text-white font-[inter] font-[500] hover:underline">
                  Home
                </li>
              </a>
            </div>
            <a href="/company">
              <li className="text-white font-[inter] font-[500] hover:underline">
                Company
              </li>
            </a>
            <li className="text-white font-[inter] font-[500] hover:underline">
              <a href="/solutions">Solutions</a>
            </li>
          </ul>
        </div>
        <div>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
      <div className="flex flex-col bg-black h-[100%]  py-[8rem] px-[4rem]">
        <p className="text-[4rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text">
          Our Team
        </p>
        <div className="flex gap-[20rem]">
          <div className="flex flex-col items-center">
            <img
              src="/nivas.jpg"
              alt=""
              className="h-[200px] w-[200px] rounded-[50%]"
            />
            <div>
              <p className="text-white font-bold text-xl text-center">
                Anandha Nivas S
              </p>
              <p>Co Founder & Manager</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/gokulan.jpg"
              alt=""
              className="h-[200px] w-[200px] rounded-[50%]"
            />
            <div>
              <p className="text-white font-bold text-xl text-center">
                Gokulan S
              </p>
              <p>FOUNDER & CEO</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/rizwan.jpg"
              alt=""
              className="h-[200px] w-[200px] rounded-[50%]"
            />
            <div>
              <p className="text-white font-bold text-xl text-center">Rizwan</p>
              <p>Co Founder</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[20rem]">
          <div className="flex flex-col items-center">
            <img
              src="/shakthi.jpg"
              alt=""
              className="h-[200px] w-[200px] rounded-[50%]"
            />
            <div>
              <p className="text-white font-bold text-xl text-center">
                Shakthidher
              </p>
              <p>Social Media Manager</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/renoye.jpg"
              alt=""
              className="h-[200px] w-[200px] rounded-[50%]"
            />
            <div>
              <p className="text-white font-bold text-xl text-center">Renoye</p>
              <p>Product Designer</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/gokulan.jpg"
              alt=""
              className="h-[200px] w-[200px] rounded-[50%]"
            />
            <div>
              <p className="text-white font-bold text-xl text-center">
                Abijith
              </p>
              <p>Software Manager</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[20rem]">
          <div className="flex flex-col items-center">
            <img
              src="/vicky.jpg"
              alt=""
              className="h-[200px] w-[200px] rounded-[50%]"
            />
            <div>
              <p className="text-white font-bold text-xl text-center">
                Vigneshwaren R
              </p>
              <p>Ui/Ux Designer</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/ramana.jpg"
              alt=""
              className="h-[200px] w-[200px] rounded-[50%]"
            />
            <div className="flex flex-col items-center">
              <p className="text-white font-bold text-xl text-center">
                Jayramanasundhar S
              </p>
              <p>FOUNDER & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Company;
