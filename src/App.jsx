import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
function App() {
  return (
    <main className=" h-screen bg-gradient-to-b from-[#000000] to-[#545145] overflow-y-scroll fixed ">
      {/* Nav-Start */}
      <div className="flex justify-between items-center bg-[#080505] p-[2rem] fixed w-[100%]">
        {/* Image */}
        <div>
          <img src="/logo.png" alt="" className="h-[48px] " />
          {/* <p>Zyre</p> */}
        </div>
        <div>
          <ul className="flex gap-[4rem]">
            <li className="text-white font-[inter] font-[500]">Home</li>
            <li className="text-white font-[inter] font-[500]">Company</li>
            <li className="text-white font-[inter] font-[500]">Solutions</li>
          </ul>
        </div>
        <div>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
      {/* Nav-End */}

      {/* Home-Start */}
      {/* <div className="h-[100vh] w-[100vw]"></div> */}

      {/* Home-End */}

      {/* Image slide */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-white font-[2rem]">Image Slide</p>
      </div>
      {/* Image slide */}

      {/* About Zyre */}
      <div className="h-screen flex flex-col items-center justify-center p-[20rem]">
        <span className="text-white self-center text-[4rem] font-bold font-[inter] pb-[1rem]">
          About Zyre
        </span>
        <p className="text-[#ffffff99] leading-8 text-center pb-[2rem] ">
          Zyre pioneers seamless home automation solutions, blending
          cutting-edge technology with intuitive design to transform living
          spaces into smart environments. From integrated security systems to
          energy-efficient controls, Zyre redefines modern living through
          innovation and connectivity.
        </p>
        <Button variant="outline">Learn more</Button>
      </div>
      {/* About Zyre */}

      {/* Video */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-white font-[2rem]">Video</p>
      </div>
      {/* Video */}

      {/* Solutions */}
      <div className="h-screen flex flex-col items-center justify-center px-[2rem] pb-[2rem]">
        <span className="text-white font-[2rem] font-[inter] font-bold text-[4rem]">
          Solutions
        </span>
        <img src="/line.svg" alt="" />
        <div className="flex flex-col justify-center  ">
          <section className="flex gap-[12rem] items-center py-[2rem]">
            <div className="flex ">
              <p className="text-white text-xl">Home Automation</p>
            </div>
            <ul className="text-white list-disc ">
              <li className="text-[#ffffff99]">Light control</li>
              <li className="text-[#ffffff99]">HVAC control</li>
              <li className="text-[#ffffff99]">Voice control</li>
            </ul>
          </section>
          <img src="/line.svg" alt="" />
          <section className="flex gap-[12rem] items-center py-[2rem]">
            <div>
              <p className="text-white  text-xl">Stores and Malls</p>
            </div>
            <ul className="text-white list-disc ">
              <li className="text-[#ffffff99]">AV control</li>
              <li className="text-[#ffffff99]">Automation and Scheduling</li>
              <li className="text-[#ffffff99]">Diming and Speed control</li>
            </ul>
          </section>
          <img src="/line.svg" alt="" />
          <section className="flex gap-[12rem] items-center py-[2rem]">
            <div>
              <p className="text-white text-xl">Industries</p>
            </div>
            <ul className="text-white list-disc pl-[5.5rem]">
              <li className="text-[#ffffff99]">Motors</li>
              <li className="text-[#ffffff99]">HVAC control</li>
              <li className="text-[#ffffff99]">Dryers</li>
            </ul>
          </section>
          <img src="/line.svg" alt="" />
        </div>
      </div>
      {/* Solutions */}

      {/* Feedback */}
      <div className="h-screen flex justify-between px-[2rem] ">
        {/* Image */}
        <div>
          <img src="/place_holder_1.svg" alt="3d" />
        </div>
        {/* Image */}
        {/* Inputs */}
        <div className="flex flex-col gap-[2rem]">
          <section className="flex gap-[1rem]">
            <Input type="text" placeholder="Name" className="w-[300px]" />
            <Input type="email" placeholder="Email" className="w-[300px]" />
          </section>
          <section className="flex gap-[1rem]">
            <Input type="tel" placeholder="Telephone" className="w-[300px]" />
            <Input type="text" placeholder="City" className="w-[300px]" />
          </section>
          <Textarea placeholder="Address" />
        </div>
        {/* Inputs */}
      </div>
      {/* Feedback */}

      {/* Footer */}
      <div className="bg-black flex-col h-[80vh] ">
        {/* One */}
        <section className="flex pl-[6rem] gap-[2rem]">
          <section className="flex flex-col gap-[2rem] p-[2rem]">
            <div>
              <img src="/public/logo.png" alt="" />
            </div>
            <div className="flex gap-[2rem] items-center">
              <span className="text-white font-bold">Follow us on</span>
              <div className="flex gap-[.4rem]">
                <FaFacebook className="text-xl text-[#ffffff99]" />
                <FaXTwitter className="text-xl text-[#ffffff99]" />
                <AiFillInstagram className="text-xl text-[#ffffff99]" />
                <IoLogoLinkedin className="text-xl text-[#ffffff99]" />
              </div>
            </div>
            <div>
              <p className="text-white font-bold">Address</p>
              <p className="text-[#ffffff99]">
                NO 1,Vijaya nagar,Mgr Salai, <br /> Neyveli,Cuddalore.
              </p>
            </div>
          </section>
          {/* One */}
          {/* Two */}
          <section className="flex flex-col gap-[4rem] pt-[4rem] pb-[2rem] pl-[2rem] pr-[2rem]">
            <div>
              <p className="text-white font-bold">Quick Links</p>
              <ul>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer">
                  Home
                </li>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer">
                  Company
                </li>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer">
                  Products
                </li>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold">E-mail </span>
              <span className="text-[#ffffff99]">
                zyrehomeautomation@gmail.com
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold">Phone Number</span>
              <span className="text-[#ffffff99]">+91 8525928155</span>
            </div>
          </section>

          {/* Two */}
          {/* Threee */}
          <section className="flex flex-col gap-[5rem] pt-[4rem] pb-[2rem] pl-[2rem] pr-[2rem]">
            <div>
              <span className="text-white font-bold">Home Automation</span>
              <ul className="text-[#ffffff99]">
                <li className="hover:text-white cursor-pointer">
                  Light control
                </li>
                <li className="hover:text-white cursor-pointer">
                  HVAC control
                </li>
                <li className="hover:text-white cursor-pointer">
                  Voice control
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-white">Industries</span>

              <ul className="text-[#ffffff99]">
                <li className="hover:text-white cursor-pointer">Motors</li>
                <li className="hover:text-white cursor-pointer">
                  HVAC control
                </li>
                <li className="hover:text-white cursor-pointer">Dryers</li>
              </ul>
            </div>
          </section>
          {/* Three */}
          {/* Fourth*/}
          <section className="flex flex-col  pt-[4rem] pb-[2rem] pl-[8rem] pr-[2rem]">
            <span className="text-white font-bold">Stores and Malls</span>
            <ul className="text-[#ffffff99]">
              <li className="hover:text-white cursor-pointer">AV control</li>
              <li className="hover:text-white cursor-pointer">
                Automation and Scheduling
              </li>
              <li className="hover:text-white cursor-pointer">
                Diming and Speed control
              </li>
            </ul>
          </section>
          {/*Fourth */}
        </section>
        <section>
          <img src="/line.svg" alt="" className="w-[90%] pl-[8rem]" />
          <div className="flex pt-[1rem] pl-[8rem]">
            <div className=" flex gap-[10rem]">
              <span className="text-[#ffffff99]">
                Developed by John Doe and John Doe
              </span>
              <span className="text-[#ffffff99]">
                Copyright &copy; 2024 Zyre Home Automations All rights reserved
              </span>
            </div>
            <div className="pl-[8rem] flex gap-[.5rem]">
              <span className="text-[#ffffff99]">Terms and Conditions</span>
              <span className="text-[#ffffff99]">Privacy Policy</span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
    </main>
  );
}

export default App;
