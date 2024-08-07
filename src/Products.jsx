import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="bg-black h-[100%]">
      <div
        className={`flex justify-between items-center  z-50 fixed w-[100%]
        backdrop-blur-md pt-[2rem] px-[2rem]
        `}
      >
        {/* Image */}
        <div>
          <a href="/">
            <img src="/new_logo.png" alt="" className="h-[48px] " />
          </a>
          {/* <p>Zyre</p> */}
        </div>
        <div>
          <ul className="flex gap-[4rem]">
            <div>
              <a href="/">
                <li className="text-white txt left font-[500] txt left font-zyre">
                  Home
                </li>
              </a>
            </div>
            {/* <a href="/company">
              <li className="text-white font-[inter] font-[500] hover:underline font-zyre">
                Company
              </li>
            </a> */}
            <a href="/products">
              <li className="text-white font-[500] txt left font-zyre">
                Products
              </li>
            </a>
            <a href="/solutions">
              <li className="text-white  font-[500] txt left font-zyre">
                Solutions
              </li>
            </a>
          </ul>
        </div>
        <div>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
      {/* Products */}
      <div className="flex flex-col px-[4rem] items-center gap-[1rem] pb-[4rem]">
        <p className="text-[2rem] pt-[8rem] text-center font-bold font-zyre bg-[#B59410]  inline-block text-transparent bg-clip-text self-center">
          ZYRE SMART BOX
        </p>
        <p className="text-[#ffffff99] self-center pb-[2rem] ">
          A control module that is operable from your smartphone. Appliances can
          be connected to the box via our mobile app which allows custom
          programming of automation scenarios
        </p>
        <div className="flex flex-col gap-[2rem]">
          <div
            className="flex border-[2px] border-solid border-[#B59410] rounded-lg gap-[2rem] px-[2rem]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/2switch_new.png"
              alt=""
              className="h-[400px] w-[400px]"
            />
            <ul className="list-disc pt-[2rem] flex flex-col gap-[1rem]">
              <span className="uppercase text-white">Product Details</span>
              <li className="text-[#ffffff99] font-zyre text-sm">
                CONNECTIONS : 2 SWITCHS
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                MODULE CONNECTIVITY : WIFI
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                VOICE ASSISTANT : GOOGLE, SIRI
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                WARRENTY: 1 YEAR
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                CONNECTIVITY RANGE : ANYWHERE CONNECTIVITY{" "}
              </li>
            </ul>
          </div>
          <div
            className="flex border-[2px] border-solid border-[#B59410] rounded-lg gap-[2rem] px-[2rem]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/4gray_new.png" alt="" className="h-[400px] w-[400px]" />
            <ul className="list-disc pt-[2rem] flex flex-col gap-[1rem]">
              <span className="uppercase text-white">Product Details</span>
              <li className="text-[#ffffff99] font-zyre text-sm">
                CONNECTIONS : 4 SWITCHS
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                MODULE CONNECTIVITY : WIFI
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                VOICE ASSISTANT : GOOGLE, SIRI
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                WARRENTY: 1 YEAR
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                CONNECTIVITY RANGE : ANYWHERE CONNECTIVITY{" "}
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                RELAY CHANNEL :{" "}
                <span className="uppercase">High volt connectivity</span>
              </li>
            </ul>
          </div>
          <div
            className="flex border-[2px] border-solid border-[#B59410] rounded-lg gap-[2rem] px-[2rem]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/8switch_new.png"
              alt=""
              className="h-[400px] w-[400px]"
            />
            <ul className="list-disc pt-[2rem] flex flex-col gap-[1rem]">
              <span className="uppercase text-white">Product Details</span>
              <li className="text-[#ffffff99] font-zyre text-sm">
                CONNECTIONS : 8 SWITCHS
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                MODULE CONNECTIVITY : WIFI
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                VOICE ASSISTANT : GOOGLE, SIRI
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                WARRENTY: 1 YEAR
              </li>
              <li className="text-[#ffffff99] font-zyre text-sm">
                CONNECTIVITY RANGE : ANYWHERE CONNECTIVITY{" "}
              </li>

              <li className="text-[#ffffff99] font-zyre text-sm">
                RELAY CHANNEL :{" "}
                <span className="uppercase  font-zyre">
                  High volt connectivity
                </span>
              </li>
              <li className="text-[#ffffff99] text-sm">
                CONTROLS:{" "}
                <span className="uppercase font-zyre">
                  Dimming and speed Control
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Products */}
      {/* Footer */}
      <div
        className="bg-black flex-col h-[80vh] "
        data-aos="fade-up"
        data-aos-duration="10000"
      >
        {/* One */}
        <section className="flex pl-[6rem] gap-[2rem]">
          <section className="flex flex-col gap-[2rem] p-[2rem]">
            <div>
              <img src="/new_logo.png" alt="" />
            </div>
            <div className="flex gap-[2rem] items-center">
              <span className="text-white font-bold font-zyre">
                Follow us on
              </span>
              <div className="flex gap-[.4rem]">
                <FaFacebook className="text-xl text-[#ffffff99]" />
                <FaXTwitter className="text-xl text-[#ffffff99]" />
                <AiFillInstagram className="text-xl text-[#ffffff99]" />
                <IoLogoLinkedin className="text-xl text-[#ffffff99]" />
              </div>
            </div>
            <div>
              <p className="text-white font-bold font-zyre">Address</p>
              <p className="text-[#ffffff99] font-zyre">
                NO 1,Vijaya nagar,Mgr Salai, <br /> Neyveli,Cuddalore.
              </p>
            </div>
          </section>
          {/* One */}
          {/* Two */}
          <section className="flex flex-col gap-[4rem] pt-[4rem] pb-[2rem] pl-[2rem] pr-[2rem]">
            <div>
              <p className="text-white font-bold font-zyre">Quick Links</p>
              <ul>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer font-zyre">
                  <a href="/">Home</a>
                </li>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer font-zyre">
                  Company
                </li>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer font-zyre">
                  <a href="/solutions">Products</a>
                </li>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer font-zyre">
                  Contact
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold font-zyre">E-mail </span>
              <span className="text-[#ffffff99] font-zyre">
                zyrehomeautomation@gmail.com
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold font-zyre">
                Phone Number
              </span>
              <span className="text-[#ffffff99] font-zyre">+91 8525928155</span>
            </div>
          </section>

          {/* Two */}
          {/* Threee */}
          <section className="flex flex-col gap-[5rem] pt-[4rem] pb-[2rem] pl-[2rem] pr-[2rem]">
            <div>
              <span className="text-white font-bold font-zyre">
                Home Automation
              </span>
              <ul className="text-[#ffffff99]">
                <li className="hover:text-white cursor-pointer font-zyre">
                  Light control
                </li>
                <li className="hover:text-white cursor-pointer font-zyre">
                  HVAC control
                </li>
                <li className="hover:text-white cursor-pointer font-zyre">
                  Voice control
                </li>
                <li className="hover:text-white cursor-pointer font-zyre">
                  Mobile Connectivity
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-white font-zyre">Industries</span>

              <ul className="text-[#ffffff99]">
                <li className="hover:text-white cursor-pointer font-zyre">
                  Motors
                </li>
                <li className="hover:text-white cursor-pointer font-zyre">
                  HVAC control
                </li>
                <li className="hover:text-white cursor-pointer font-zyre">
                  Dryers
                </li>
              </ul>
            </div>
          </section>
          {/* Three */}
          {/* Fourth*/}
          <section className="flex flex-col  pt-[4rem] pb-[2rem] pl-[8rem] pr-[2rem]">
            <span className="text-white font-bold font-zyre">
              Stores and Malls
            </span>
            <ul className="text-[#ffffff99]">
              <li className="hover:text-white cursor-pointer font-zyre">
                AV control
              </li>
              <li className="hover:text-white cursor-pointer font-zyre">
                Automation and Scheduling
              </li>
              <li className="hover:text-white cursor-pointer font-zyre">
                Diming and Speed control
              </li>
            </ul>
          </section>
          {/*Fourth */}
        </section>
        <section>
          <img src="/line.svg" alt="" className="w-[90%] pl-[8rem]" />
          <div className="flex pt-[1rem] pl-[8rem]">
            <div className=" flex gap-[6rem]">
              <span className="text-[#ffffff99] font-zyre">
                Developed by Jayramana S and Vigneshwaran R{" "}
              </span>
              <span className="text-[#ffffff99] font-zyre">
                Copyright &copy; 2024 Zyre Home Automations All rights reserved
              </span>
            </div>
            <div className="pl-[8rem] flex gap-[.5rem]">
              <a href="terms" rel="external nofollow noopener" target="_blank">
                <span className="text-[#ffffff99] hover:text-white font-zyre">
                  Terms and Conditions
                </span>
              </a>
              <span className="text-[#ffffff99] hover:text-white font-zyre">
                Privacy Policy
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Products;
