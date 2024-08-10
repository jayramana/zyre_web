import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import tw_switch from "/2switch_new.png";
import fr_switch from "/4gray_new.png";
import ei_switch from "/8switch_new.png"
import Nav from "./subcomponents/Nav";
import Footer from "./subcomponents/Footer";

const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="bg-black h-[100%]">
      <Nav />
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
              src={tw_switch}
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
            <img src={fr_switch} alt="" className="h-[400px] w-[400px]" />
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
              src={ei_switch}
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
      <Footer/>
    </main>
  );
};

export default Products;
