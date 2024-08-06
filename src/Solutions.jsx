// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Button } from "./components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
// Mr.Godwin

const Solutions = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      {/* Nav-Start */}
      <div>
        <div className="flex justify-between items-center backdrop-blur-md pt-[2rem] px-[2rem] z-50 fixed h-fit  w-[100%]">
          {/* Image */}
          <div>
            <a href="/">
              <img src="/new_logo.png" alt="" className="h-[48px] " />
            </a>
            {/* <p>Zyre</p> */}
          </div>
          <div>
            <ul className="flex gap-[4rem]">
              <div className="flex flex-col items-center">
                <a href="/">
                  <li className="text-white font-[inter] font-[500] hover:underline font-zyre">
                    Home
                  </li>
                </a>
              </div>
              <li className="text-white font-[inter] font-[500] hover:underline font-zyre">
                <a href="/products">Products</a>
              </li>
              <li className="text-white font-[inter] font-[500] hover:underline font-zyre">
                <a href="/solutions">Solutions</a>
              </li>
            </ul>
          </div>
          <div>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
      {/* Nav-End */}
      <div className="bg-black text-white h-[100%] flex flex-col px-[4rem] py-[10rem] gap-[4rem]">
        <p className="text-center font-bold text-[3rem] pb-[2rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text font-zyre">
          Solutions
        </p>
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col">
            <img
              src="/light_control.jpg"
              alt=""
              className="rounded-lg  w-[1000px] h-[200px] "
            />
          </div>
          <div className="flex flex-col  items-start">
            <p className=" font-zyre pl-[2rem]">Lighting Control</p>

            <p className="leading-[2rem] px-[2rem] text-justify text-[#ffffff99] font-zyre">
              Lighting control in home automation allows for the centralized
              management of lights throughout a home. It enhances convenience,
              energy efficiency, and security by enabling users to remotely
              control lighting via smartphones or voice commands. Smart lighting
              can be programmed to adjust brightness, change colors, or turn
              on/off based on schedules or occupancy sensors. It also supports
              integration with other smart devices, enabling scenes like{" "}
              movie mode or goodnight where lights adjust
              automatically. This technology helps reduce energy consumption and
              adds a layer of personalization and ambiance to living spaces.
            </p>
          </div>
        </div>
        <div
          className="flex items-center "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col ">
            <p className=" pt-[1rem] font-zyre">HVAC Control</p>
            <p className="leading-[2rem] pr-[2rem] text-justify text-[#ffffff99] font-zyre">
              HVAC (Heating, Ventilation, and Air Conditioning) control in home
              automation systems provides smart management of indoor climate. It
              allows homeowners to remotely adjust temperature settings,
              humidity levels, and air quality via smartphones, tablets, or
              voice commands. Smart thermostats can learn user preferences and
              create energy-efficient schedules, optimizing comfort while
              reducing energy costs. Integration with other smart devices, such
              as occupancy sensors, ensures that HVAC systems operate only when
              needed. Additionally, smart HVAC control can provide real-time
              monitoring and alerts for maintenance issues, enhancing system
              longevity and efficiency. This technology promotes a comfortable,
              energy-efficient, and eco-friendly living environment.
            </p>
          </div>
          <div>
            <img
              src="/hvac.jpg"
              alt=""
              className="w-[1100px] h-[200px] rounded-lg "
            />
          </div>
        </div>
        <div className="flex items-center" data-aos="fade-up"
            data-aos-duration="1000">
          <div className="flex flex-col" >
            <img
              src="/av_control.jpg"
              alt=""
              className="h-[200px] w-[1240px] rounded-lg "
            />
          </div>
          <div
            className="flex flex-col"
            
          >
            <p className="pl-[2rem] font-zyre">AV Control</p>

            <p className="leading-[2rem] px-[2rem] text-justify  text-[#ffffff99] font-zyre">
              AV (Audio-Visual) control in home automation systems streamlines
              the management of entertainment devices like TVs, speakers,
              projectors, and media players. It allows users to control all AV
              equipment from a single interface, such as a smartphone, tablet,
              or dedicated remote, eliminating the need for multiple remotes.
              Smart AV systems can integrate with voice assistants, enabling
              voice-activated commands for playing music, changing channels, or
              adjusting volume. Users can also set up scenes, like movie night,
              where lights dim, curtains close, and the home theater system
              powers on with a single tap or voice command. This technology
              enhances the home entertainment experience, providing convenience,
              simplicity, and customization.
            </p>
          </div>
        </div>
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
          <p className="leading-[2rem] pr-[2rem] text-justify pt-[1rem] text-[#ffffff99] font-zyre">
            Scheduling in home automation allows users to automate the operation
            of connected devices according to a predefined timetable. This
            feature enables smart devices such as lights, thermostats, HVAC
            systems, and appliances to turn on or off, adjust settings, or
            switch modes automatically based on specific times of the day, days
            of the week, or user preferences. For example, lights can be
            scheduled to turn on at sunset and off at bedtime, or the thermostat
            can be set to lower the temperature during the night. This
            scheduling capability not only enhances convenience and comfort but
            also improves energy efficiency by reducing unnecessary energy
            usage. It can also enhance home security by simulating occupancy
            when homeowners are away.
          </p>
          <div className="flex flex-col">
            <img
              src="/schedule.jpg"
              alt=""
              className="w-[1200px] h-[200px] rounded-lg "
            />
            <p className="text-center pt-[1rem] font-zyre">
              Scheduling Connection
            </p>
          </div>
        </div>
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col">
            <img
              src="/light_control.jpg"
              alt=""
              className="rounded-lg  w-[1200px] h-[200px] "
            />
            <p className="text-center pt-[1rem] font-zyre">
              Mobile Connectivity
            </p>
          </div>
          <p className="leading-[2rem] px-[2rem] text-justify pt-[1rem] text-[#ffffff99] font-zyre">
            Mobile connectivity in home automation allows users to control and
            monitor their smart home devices from anywhere using a smartphone or
            tablet. Through dedicated mobile apps, homeowners can remotely
            manage lighting, HVAC systems, security cameras, door locks, and
            more. This connectivity enables real-time alerts and notifications,
            providing instant updates on the status of various devices and home
            security. Users can also adjust settings, create automation
            schedules, and activate scenes directly from their mobile devices.
            Mobile connectivity enhances convenience, offering control over home
            systems while on the go, and improves security by allowing immediate
            responses to unexpected events or emergencies.
          </p>
        </div>
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
          <p className="leading-[2rem] px-[2rem] text-justify pt-[1rem] text-[#ffffff99] font-zyre" >
            Speed control in home automation systems enhance comfort and energy
            efficiency by allowing precise management of lighting intensity and
            fan speeds through smartphone apps, voice commands, or automation
            schedules. These features can be integrated into scenes for seamless
            transitions and customized settings to suit various needs and
            preferences.
          </p>
          <div className="flex flex-col">
            <img
              src="/light_control.jpg"
              alt=""
              className="rounded-lg  w-[600px] h-[200px] "
            />
            <p className="text-center pt-[1rem] font-zyre">Speed Control</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-black flex-col h-[80vh] ">
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
    </main>
  );
};

export default Solutions;
