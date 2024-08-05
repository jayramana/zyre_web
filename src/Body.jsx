import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { useRef } from "react";
import Talos from "./Talos";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
// B59410
// 3F3001
function Body() {
  const [scrolled, setScrolled] = useState(false);
  return (
    <main className=" h-[100%] bg-gradient-to-b from-[#000000] to-[#545145] ">
      {/* Nav-Start */}
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
            <a
              href="/company"
            >
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
      {/* Nav-End */}

      {/* Home-Start */}
      {/* <div className="h-[100vh] w-[100vw]"></div> */}

      {/* Home-End */}

      {/* Image slide */}
      <div className="h-screen flex items-center justify-center pt-[8rem]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="flex h-screen"
        >
          <SwiperSlide className="text-white flex items-center justify-center">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="text-white flex items-center justify-center">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="text-white flex items-center justify-center">
            Slide 3
          </SwiperSlide>
          {/* <SwiperSlide className="text-white flex items-center justify-center">Slide 4</SwiperSlide>
          <SwiperSlide className="text-white flex items-center justify-center">Slide 5</SwiperSlide>
          <SwiperSlide className="text-white flex items-center justify-center">Slide 6</SwiperSlide>
          <SwiperSlide className="text-white flex items-center justify-center">Slide 7</SwiperSlide>
          <SwiperSlide className="text-white flex items-center justify-center">Slide 8</SwiperSlide>
          <SwiperSlide className="text-white flex items-center justify-center">Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
      {/* Image slide */}

      {/* About Zyre */}
      <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 200/10,
          }}
        >
      <div className="h-screen flex flex-col items-center justify-center p-[20rem]">
        <span className="self-center text-[4rem] font-bold font-[inter] pb-[1rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text">
          About ZYRE
        </span>
        <p className="text-[#ffffff99] leading-8 text-center pb-[2rem] ">
          Zyre pioneers seamless home automation solutions, blending
          cutting-edge technology with intuitive design to transform living
          spaces into smart environments. From integrated security systems to
          energy-efficient controls, Zyre redefines modern living through
          innovation and connectivity.
        </p>
        <Button variant="outline" className="hover:shadow-md">
          Learn more
          </Button>
      </div>
          </motion.span>
      {/* About Zyre */}

      {/* Video */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-white font-[2rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text">
          Video
        </p>
      </div>
      {/* Video */}

      {/* Solutions */}
      <div className="h-screen flex flex-col items-center justify-center px-[4rem] pb-[2rem]">
        <span className=" font-[2rem] font-[inter] font-bold text-[4rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text">
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
              <li className="text-[#ffffff99]">Mobile Connectivity</li>
              <li className="text-[#ffffff99]">Kitchen Appliances</li>
            </ul>
          </section>
          <img src="/line.svg" alt="" />
          <section className="flex gap-[12rem] items-center py-[2rem]">
            <div>
              <p className="text-white  text-xl">Stores and Malls</p>
            </div>
            <ul className="text-white list-disc pl-[1rem]">
              <li className="text-[#ffffff99]">AV control</li>
              <li className="text-[#ffffff99]">Automation and Scheduling</li>
              <li className="text-[#ffffff99]">Speed control</li>
            </ul>
          </section>
          <img src="/line.svg" alt="" />
          <section className="flex gap-[12rem] items-center py-[2rem]">
            <div>
              <p className="text-white text-xl">Industries</p>
            </div>
            <ul className="text-white list-disc pl-[4.8rem]">
              <li className="text-[#ffffff99]">Motors</li>
              <li className="text-[#ffffff99]">HVAC control</li>
              <li className="text-[#ffffff99]">Dryers</li>
            </ul>
          </section>
          <img src="/line.svg" alt="" />
        </div>
      </div>
      {/* Solutions */}

      {/* Customer FeedBack */}
      <div className="flex flex-col gap-[.5rem] p-[4rem]">
        <p className="text-center font-bold text-[4rem] pb-[2rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text">
          Customer Feedback
        </p>
        <div className="bg-[#000] text-white p-[2rem] rounded-lg">
          <div className="pb-[1rem]">
            <p className="text-2xl">Mr.Saravanan</p>
            <span className="text-xs text-[#ffffff99]">Shop Owner</span>
          </div>
          <p className="leading-[2rem] text-sm ">
            Upon acquiring the Zyre Automation Kit, my professional routine
            transformed into a highly efficient operation. This innovative
            technology allows me to seamlessly control my devices throughout the
            workspace, significantly enhancing convenience, optimizing time
            management, and reducing energy consumption costs.
          </p>
        </div>
        <div className="bg-[#000] text-white p-[2rem] rounded-lg">
          <div className="pb-[1rem]">
            <p className="text-2xl">Mr.Rajesh</p>
            <span className="text-xs text-[#ffffff99]">House Owner</span>
          </div>
          <p className="leading-[2rem] text-sm ">
            I had the Zyre Home Automation Kit installed, and it was a seamless
            process handled by professional technicians. The pricing is
            reasonable, offering great value for the features provided. Using
            the system has drastically reduced the time spent managing home
            appliances, with easy control via smartphone and efficient
            scheduling. Overall, it is a fantastic addition, making my home
            smarter and my daily routine more convenient.
          </p>
        </div>
        <div className="bg-[#000] text-white p-[2rem] rounded-lg">
          <div className="pb-[1rem]">
            <p className="text-2xl">Mr.Sidharth</p>
            <span className="text-xs text-[#ffffff99]">
              Small scale Industrialist
            </span>
          </div>
          <p className="leading-[2rem] text-sm ">
            We installed the Zyre Home Automation Kit in our office. The
            installation was quick and professional. The system is reasonably
            priced and offers excellent value. It has significantly improved
            scheduling and control over various office functions, and the
            notification system ensures smooth operations. Overall, it has made
            our workplace more efficient and streamlined. Highly recommended for
            any business looking to enhance productivity and management.
          </p>
        </div>
      </div>
      {/* Customer FeedBack */}

      {/* Feedback */}
      <p className="text-white text-2xl font-bold text-center pb-[2rem]">
        Give us your feedback/Contact Us
      </p>
      <div className="h-screen flex  gap-[20rem] px-[4rem] ">
        {/* Image */}
        <div>
          <img
            src="/feedback.jpg"
            alt="3d"
            className="w-[500px] h-[500px] rounded-lg "
          />
        </div>
        {/* Image */}
        {/* Inputs */}
        <div className="flex flex-col gap-[2rem] pt-[2rem]">
          <section className="flex gap-[1rem]">
            <Input type="text" placeholder="Name" className="w-[300px]" />
            <Input type="email" placeholder="Email" className="w-[300px]" />
          </section>
          <section className="flex gap-[1rem]">
            <Input type="tel" placeholder="Telephone" className="w-[300px]" />
            <Input type="text" placeholder="City" className="w-[300px]" />
          </section>
          <Textarea placeholder="Address" />
          <Button type="submit" variant="outline" className="w-fit flex">
            Submit
          </Button>
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
              <img src="/logo.png" alt="" />
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
                  <a href="/">Home</a>
                </li>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer">
                  Company
                </li>
                <li className="text-[#ffffff99] hover:text-white cursor-pointer">
                  <a href="/solutions">Products</a>
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
                <li className="hover:text-white cursor-pointer">
                  Mobile Connectivity
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
              <a href="terms" rel="external nofollow noopener" target="_blank">
                <span className="text-[#ffffff99] hover:text-white">
                  Terms and Conditions
                </span>
              </a>
              <span className="text-[#ffffff99] hover:text-white">
                Privacy Policy
              </span>
            </div>
          </div>
        </section>
      </div>
      <Talos />
      {/* Footer */}
    </main>
  );
}

export default Body;
