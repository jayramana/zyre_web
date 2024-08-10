// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

import light_control from "/light_control.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./subcomponents/Footer";

import havac from "/hvac.jpg";
import speed from "/speed.jpeg";
import av from "/av_control.jpg";
import schedule from "/schedule.jpg";
import mobile from "/mobile_connect.jpg";
import Nav from "./subcomponents/Nav";

const Solutions = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      {/* Nav-Start */}
      <Nav />
      {/* Nav-End */}
      <div className="bg-black text-white h-[100%] flex flex-col px-[4rem] pt-[10rem] gap-[4rem]">
        <p className="text-center font-bold text-[3rem] pb-[2rem] bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text font-zyre">
          Solutions
        </p>
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col">
            <img
              src={light_control}
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
              integration with other smart devices, enabling scenes like movie
              mode or goodnight where lights adjust automatically. This
              technology helps reduce energy consumption and adds a layer of
              personalization and ambiance to living spaces.
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
              src={havac}
              alt=""
              className="w-[1100px] h-[200px] rounded-lg "
            />
          </div>
        </div>
        <div
          className="flex items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col">
            <img src={av} alt="" className="h-[200px] w-[1240px] rounded-lg " />
          </div>
          <div className="flex flex-col">
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
          <div className="flex flex-col">
            <p className="font-zyre">Scheduling Connection</p>
            <p className="leading-[2rem] pr-[2rem] text-justify pt-[1rem] text-[#ffffff99] font-zyre">
              Scheduling in home automation allows users to automate the
              operation of connected devices according to a predefined
              timetable. This feature enables smart devices such as lights,
              thermostats, HVAC systems, and appliances to turn on or off,
              adjust settings, or switch modes automatically based on specific
              times of the day, days of the week, or user preferences. For
              example, lights can be scheduled to turn on at sunset and off at
              bedtime, or the thermostat can be set to lower the temperature
              during the night. This scheduling capability not only enhances
              convenience and comfort but also improves energy efficiency by
              reducing unnecessary energy usage. It can also enhance home
              security by simulating occupancy when homeowners are away.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={schedule}
              alt=""
              className="w-[1200px] h-[200px] rounded-lg "
            />
          </div>
        </div>
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col">
            <img
              src={mobile}
              alt=""
              className="rounded-lg  w-[1200px] h-[200px] "
            />
          </div>
          <div className="flex flex-col">
            <p className=" pl-[2rem] font-zyre">Mobile Connectivity</p>
            <p className="leading-[2rem] px-[2rem] text-justify pt-[1rem] text-[#ffffff99] font-zyre">
              Mobile connectivity in home automation allows users to control and
              monitor their smart home devices from anywhere using a smartphone
              or tablet. Through dedicated mobile apps, homeowners can remotely
              manage lighting, HVAC systems, security cameras, door locks, and
              more. This connectivity enables real-time alerts and
              notifications, providing instant updates on the status of various
              devices and home security. Users can also adjust settings, create
              automation schedules, and activate scenes directly from their
              mobile devices. Mobile connectivity enhances convenience, offering
              control over home systems while on the go, and improves security
              by allowing immediate responses to unexpected events or
              emergencies.
            </p>
          </div>
        </div>
        <div className="flex" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex flex-col">
            <p className="pl-[2rem] font-zyre">Speed Control</p>

            <p className="leading-[2rem] px-[2rem] text-justify pt-[1rem] text-[#ffffff99] font-zyre">
              Speed control in home automation systems enhance comfort and
              energy efficiency by allowing precise management of lighting
              intensity and fan speeds through smartphone apps, voice commands,
              or automation schedules. These features can be integrated into
              scenes for seamless transitions and customized settings to suit
              various needs and preferences.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={speed}
              alt=""
              className="rounded-lg  w-[600px] h-[200px] "
            />
          </div>
        </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Footer />
      </div>
      </div>
      {/* Footer */}
    </main>
  );
};

export default Solutions;
