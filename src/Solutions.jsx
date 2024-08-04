// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "./components/ui/button";

const Solutions = () => {
  return (
    <main>
      {/* Nav-Start */}
      <div>
        <div className="flex justify-between items-center bg-[#080505] p-[2rem] fixed  w-[100%]">
          {/* Image */}
          <div>
            <img src="/logo.png" alt="" className="h-[48px] " />
            {/* <p>Zyre</p> */}
          </div>
          <div>
            <ul className="flex gap-[4rem]">
              <li className="text-white font-[inter] font-[500]">
                <a href="/">Home</a>
              </li>
              <li className="text-white font-[inter] font-[500]">Company</li>
              <li className="text-white font-[inter] font-[500]">
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
      <div className="bg-black text-white h-[100%] flex flex-col px-[4rem] py-[10rem]">
        <p className="text-center font-bold text-[3rem] pb-[2rem]">Solutions</p>
        <div className="flex">
          <div className="flex flex-col">
            <img
              src="/light_control.jpg"
              alt=""
              className="rounded-lg border-[2px] border-white w-[1000px] h-[200px] "
            />
            <p className="text-center pt-[1rem]">Lighting Control</p>
          </div>
          <p className="leading-[2rem] px-[2rem] text-justify pt-[1rem] text-[#ffffff99]">
            Lighting control in home automation allows for the centralized
            management of lights throughout a home. It enhances convenience,
            energy efficiency, and security by enabling users to remotely
            control lighting via smartphones or voice commands. Smart lighting
            can be programmed to adjust brightness, change colors, or turn
            on/off based on schedules or occupancy sensors. It also supports
            integration with other smart devices, enabling scenes like{" "}
            <strong>movie mode</strong> or goodnight where lights adjust
            automatically. This technology helps reduce energy consumption and
            adds a layer of personalization and ambiance to living spaces.
          </p>
        </div>
        <div className="flex ">
          <p className="leading-[2rem] pr-[2rem] text-justify pt-[1rem] text-[#ffffff99]">
            HVAC (Heating, Ventilation, and Air Conditioning) control in home
            automation systems provides smart management of indoor climate. It
            allows homeowners to remotely adjust temperature settings, humidity
            levels, and air quality via smartphones, tablets, or voice commands.
            Smart thermostats can learn user preferences and create
            energy-efficient schedules, optimizing comfort while reducing energy
            costs. Integration with other smart devices, such as occupancy
            sensors, ensures that HVAC systems operate only when needed.
            Additionally, smart HVAC control can provide real-time monitoring
            and alerts for maintenance issues, enhancing system longevity and
            efficiency. This technology promotes a comfortable,
            energy-efficient, and eco-friendly living environment.
          </p>
          <div>
            <img
              src="/hvac.jpg"
              alt=""
              className="w-[1100px] h-[200px] rounded-lg border-[2px] border-white"
            />
            <p className="text-center pt-[1rem]">HVAC Control</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <img
              src="/av_control.jpg"
              alt=""
              className="h-[200px] w-[1240px] rounded-lg border-[2px] border-white"
            />
            <p className="text-center pt-[1rem]">AV Control</p>
          </div>
          <p className="leading-[2rem] px-[2rem] text-justify pt-[1rem] text-[#ffffff99]">
            AV (Audio-Visual) control in home automation systems streamlines the
            management of entertainment devices like TVs, speakers, projectors,
            and media players. It allows users to control all AV equipment from
            a single interface, such as a smartphone, tablet, or dedicated
            remote, eliminating the need for multiple remotes. Smart AV systems
            can integrate with voice assistants, enabling voice-activated
            commands for playing music, changing channels, or adjusting volume.
            Users can also set up scenes, like movie night, where lights dim,
            curtains close, and the home theater system powers on with a single
            tap or voice command. This technology enhances the home
            entertainment experience, providing convenience, simplicity, and
            customization.
          </p>
        </div>
        <div className="flex">
          <p className="leading-[2rem] pr-[2rem] text-justify pt-[1rem] text-[#ffffff99]">
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
              className="w-[1200px] h-[200px] rounded-lg border-[2px] border-white"
            />
            <p className="text-center pt-[1rem]">Scheduling Connection</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <img
              src="/light_control.jpg"
              alt=""
              className="rounded-lg border-[2px] border-white w-[1000px] h-[200px] "
            />
            <p className="text-center pt-[1rem]">Mobile Connectivity</p>
          </div>
          <p className="leading-[2rem] px-[2rem] text-justify pt-[1rem] text-[#ffffff99]">
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
      </div>
    </main>
  );
};

export default Solutions;
