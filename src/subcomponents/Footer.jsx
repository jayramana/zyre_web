import logo from "/new_logo.png";
import line from "/line.svg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import "../index.css"

const Footer = () => {
  return (
    <div>
      <div
        className="bg-black flex-col h-[80vh] "
        data-aos="fade-up"
        data-aos-duration="10000"
      >
        {/* One */}
        <section className="flex pl-[6rem] gap-[2rem]">
          <section className="flex flex-col gap-[2rem] p-[2rem]">
            <div>
              <img src={logo} alt="" />
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
          <img src={line} alt="" className="w-[90%] pl-[8rem]" />
          <div className="flex pt-[1rem] pl-[8rem]">
            <div className=" flex gap-[6rem]">
              <span className="text-[#ffffff99] font-zyre">
                Developed by Jayramana S and Vigneshwaran R
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
    </div>
  );
};

export default Footer;
