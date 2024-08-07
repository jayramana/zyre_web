/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import "./index.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import AOS from "aos";
import "aos/dist/aos.css";

function Body() {
  const switches = ["8 Switches", "4 Switches", "2 Switches"];
  const connect = "Wi-Fi";
  const voice = "Google,Siri";
  const img = ["8switch_new.png", "4gray_new.png", "2switch_new.png"];
  const color = ["White", "Silver", "Black"];
  useEffect(() => {
    AOS.init();
  }, []);
  const bottomRef = useRef(null);
  let [i, setI] = useState(0);

  const Change_Props = () => {
    if (i < 2) {
      i += 1;
      setI(i);
    } else {
      setI(0);
    }
    console.log(i);
  };
  const Sub_Props = () => {
    if (i > 0) {
      i -= 1;
      setI(i);
    } else if (i == 0) {
      setI(0);
    }
  };
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className=" h-[100%] bg-gradient-to-b from-[#000000] to-[#403E3A] ">
      {/* Nav-Start */}
      <div
        className={`flex justify-between items-center  z-50 fixed w-[100%]
        backdrop-blur-md pt-[2rem] px-[2rem] pb-[1rem]
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
                <li className="text-white txt left font-[500] txt left font-zyre ">
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
          <Button variant="outline" onClick={scrollToBottom}>
            Contact Us
          </Button>
        </div>
      </div>
      {/* Nav-End */}

      {/* Home-Start */}
      <div className="h-screen  pt-[6rem] pb-[4rem]  ">
        <img src="/home.svg" alt="" className="w-[100%] h-auto relative" />
        <div className="absolute top-[68%] left-[27%] font-[550]">
          <p className="text-white z-50 text-[4rem]">Zyre Home Automations</p>
        </div>
      </div>

      {/* Home-End */}

      {/* Image slide */}
      <div
        className="h-screen flex pt-[2rem] justify-center mt-[20rem] px-[8rem]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <GoChevronLeft
          className="text-white self-center text-4xl"
          onClick={Sub_Props}
        />
        <div className=" flex items-center justify-center px-[4rem] pt-[4rem]">
          <div className="flex  justify-center shadow-2xl shadow-[#B59410] rounded-lg px-[4rem] py-[2rem]">
            <img
              src={img[i]}
              alt=""
              className="rounded-md object-contain h-[350px] w-[350px] ml-[10rem] mb-[5rem] mt-[4rem]"
            />

            <div className="duration-all ">
              <p className="text-white text-2xl pb-[.3rem]">{switches[i]}</p>
              <div className="flex gap-[1rem]">
                <p className="border-[2px] border-white rounded-md text-white border-solid inline-block px-[4px] py-[2px] text-xs">
                  {color[i]}
                </p>
                <p className="border-[2px] border-white rounded-md text-white border-solid inline-block px-[4px] py-[2px] text-xs">
                  Wi-Fi
                </p>
                <p className="border-[2px] border-white rounded-md text-white border-solid inline-block px-[4px] py-[2px] text-xs">
                  Google,Siri
                </p>
              </div>
            </div>
          </div>
        </div>
        <GoChevronRight
          className="text-white self-center text-4xl"
          onClick={Change_Props}
        />
      </div>
      {/* Image slide */}

      {/* About Zyre */}

      <div
        className="h-screen flex flex-col items-center justify-center p-[20rem]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="self-center text-[4rem] font-bold  pb-[1rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text font-zyre">
          About ZYRE
        </span>
        <p className="text-[#ffffff99] leading-8 text-center pb-[2rem] font-zyre ">
          Zyre pioneers seamless home automation solutions, blending
          cutting-edge technology with intuitive design to transform living
          spaces into smart environments. From integrated security systems to
          energy-efficient controls, Zyre redefines modern living through
          innovation and connectivity.
        </p>
        <Button variant="outline" className="hover:shadow-md font-zyre">
          Learn more
        </Button>
      </div>
      {/* About Zyre */}

      {/* Video */}
      <div
        className="h-screen flex flex-col items-center justify-center "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="text-[4rem] pb-[2rem] font-zyre font-bold font-[2rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text">
          Demo Video
        </p>
        <video
          src="/zyre_demo.mp4"
          className="h-[400px] w-[1200px] rounded-lg shadow-2xl shadow-[#B59410]"
          controls
        ></video>
      </div>
      {/* Video */}

      {/* Solutions */}
      <div
        className="h-screen flex flex-col items-center justify-center px-[4rem] pb-[2rem]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className=" font-[2rem] pb-[2rem] font-zyre font-bold text-[4rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text ">
          Solutions
        </span>
        <img src="/line.svg" alt="" />
        <div className="flex flex-col justify-center  ">
          <div className="flex gap-[15rem]">
            <section className="flex gap-[12rem] items-center py-[2rem]">
              <div className="flex ">
                <p className="text-white text-xl font-zyre">Home Automation</p>
              </div>
              <ul className="text-white list-disc ">
                <li className="text-[#ffffff99] font-zyre">Light control</li>
                <li className="text-[#ffffff99] font-zyre">HVAC control</li>
                <li className="text-[#ffffff99] font-zyre">Voice control</li>
                <li className="text-[#ffffff99] font-zyre">
                  Mobile Connectivity
                </li>
                <li className="text-[#ffffff99] font-zyre">
                  Kitchen Appliances
                </li>
              </ul>
            </section>
            <section className="flex gap-[12rem] items-center py-[2rem]">
              <div className="flex ">
                <p className="text-white text-xl font-zyre">Security Systems</p>
              </div>
              <ul className="text-white list-disc ">
                <li className="text-[#ffffff99] font-zyre">Smart Cameras</li>
                <li className="text-[#ffffff99] font-zyre">Door Locks</li>
                <li className="text-[#ffffff99] font-zyre">Motion Sensors</li>
                <li className="text-[#ffffff99] font-zyre">Alarm Systems</li>
              </ul>
            </section>
          </div>
          <img src="/line.svg" alt="" />
          <section className="flex gap-[12rem] items-center py-[2rem]">
            <div>
              <p className="text-white  text-xl font-zyre">Stores and Malls</p>
            </div>
            <ul className="text-white list-disc pl-[1rem]">
              <li className="text-[#ffffff99] font-zyre">AV control</li>
              <li className="text-[#ffffff99] font-zyre">
                Automation and Scheduling
              </li>
              <li className="text-[#ffffff99] font-zyre">Speed control</li>
            </ul>
          </section>
          <img src="/line.svg" alt="" />
          <section className="flex gap-[12rem] items-center py-[2rem]">
            <div>
              <p className="text-white text-xl font-zyre">Industries</p>
            </div>
            <ul className="text-white list-disc pl-[4.8rem]">
              <li className="text-[#ffffff99] font-zyre">Motors</li>
              <li className="text-[#ffffff99] font-zyre">HVAC control</li>
              <li className="text-[#ffffff99] font-zyre">Dryers</li>
            </ul>
          </section>
          <img src="/line.svg" alt="" />
        </div>
      </div>
      {/* Solutions */}

      {/* Customer FeedBack */}
      <div
        className="flex flex-col gap-[.5rem] p-[4rem]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="text-center font-bold text-[4rem] pb-[2rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text font-zyre">
          Customer Feedback
        </p>
        <div className="flex gap-[2rem] font-zyre">
          <div className="bg-[#000] text-white p-[2rem] rounded-lg w-fit flex flex-col justify-between  transition-all duration-[500ms] hover:translate-y-[-10px]">
            <p className="leading-[2rem] text-sm text-justify">
              Upon acquiring the Zyre Automation Kit, my professional routine
              transformed into a highly efficient operation. This innovative
              technology allows me to seamlessly control my devices throughout
              the workspace, significantly enhancing convenience, optimizing
              time management, and reducing energy consumption costs.
            </p>
            <div className="pb-[1rem] flex flex-col items-center">
              <p className="text-2xl">Mr.Saravanan</p>
              <span className="text-xs text-[#ffffff99]">Shop Owner</span>
            </div>
          </div>
          <div className="bg-[#000] text-white p-[2rem] rounded-lg w-fit transition-all duration-[500ms] flex flex-col justify-between  hover:translate-y-[-10px]">
            <p className="leading-[2rem] text-sm ">
              I had the Zyre Home Automation Kit installed, and it was a
              seamless process handled by professional technicians. The pricing
              is reasonable, offering great value for the features provided.
              Using the system has drastically reduced the time spent managing
              home appliances, with easy control via smartphone and efficient
              scheduling. Overall, it is a fantastic addition, making my home
              smarter and my daily routine more convenient.
            </p>
            <div className="pb-[1rem] flex flex-col items-center">
              <p className="text-2xl">Mr.Rajesh</p>
              <span className="text-xs text-[#ffffff99]">House Owner</span>
            </div>
          </div>
          <div className="bg-[#000] text-white p-[2rem] rounded-lg w-fit  flex flex-col  transition-all duration-[500ms] justify-between  hover:translate-y-[-10px]">
            <p className="leading-[2rem] text-sm ">
              We installed the Zyre Home Automation Kit in our office. The
              installation was quick and professional. The system is reasonably
              priced and offers excellent value. It has significantly improved
              scheduling and control over various office functions, and the
              notification system ensures smooth operations. Overall, it has
              made our workplace more efficient and streamlined. Highly
              recommended for any business looking to enhance productivity and
              management.
            </p>
            <div className="pb-[1rem] flex flex-col items-center">
              <p className="text-2xl">Mr.Sidharth</p>
              <span className="text-xs text-[#ffffff99]">
                Small scale Industrialist
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Customer FeedBack */}

      <div ref={bottomRef}>
        {/* Feedback */}
        <div
          className="h-screen  px-[4rem] mt-[20rem] "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Image */}
          <div className="flex gap-[20rem]">
            <div>
              <p
                className="text-center font-bold text-[4rem] pb-[2rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text font-zyre"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                For Enquiry
              </p>
              <div className="flex flex-col gap-[2rem]">
                <p className="text-white">
                  Send a mail to{" "}
                  <span className="text-[#ffffff99] underline">
                    zyrehomeautomations@gmail.com
                  </span>
                </p>
                <p className="text-white">
                  Call{" "}
                  <span className="text-[#ffffff99] underline">
                    +918525928155
                  </span>{" "}
                  for more details{" "}
                </p>
              </div>
            </div>
            {/* Image */}
            {/* Inputs */}
            <div className="flex flex-col gap-[2rem] pt-[2rem]">
              <section className="flex gap-[1rem]">
                <Input type="text" placeholder="Name" className="w-[300px]" />
                <Input type="email" placeholder="Email" className="w-[300px]" />
              </section>
              <section className="flex gap-[1rem]">
                <Input
                  type="tel"
                  placeholder="Telephone"
                  className="w-[300px]"
                />
                <Input type="text" placeholder="City" className="w-[300px]" />
              </section>
              <Textarea placeholder="Address" />
              <Button type="submit" variant="outline" className="w-fit flex">
                Submit
              </Button>
            </div>
          </div>
          {/* Inputs */}
        </div>
      </div>
      {/* Feedback */}

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
            <div className=" flex gap-[10rem]">
              <span className="text-[#ffffff99] font-zyre">
                Developed by John Doe and John Doe
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
      {/* Footer */}
    </main>
  );
}

export default Body;
