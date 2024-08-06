// import React from "react";
// import { Button } from "@/components/ui/button";
// import { IoLogoLinkedin } from "react-icons/io";
// import { FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { AiFillInstagram } from "react-icons/ai";
// import "./index.css";

// const Company = () => {
//   return (
//     <main className="h-[100%]">
//       <div
//         className={`flex justify-between items-center p-[2rem] z-50 fixed w-[100%]
//     backdrop-blur-sm pt-[2rem] px-[2rem]
//     `}
//       >
//         {/* Image */}
//         <div>
//           <img src="/new_logo.png" alt="" className="h-[48px] " />
//           {/* <p>Zyre</p> */}
//         </div>
//         <div>
//           <ul className="flex gap-[4rem]">
//             <div>
//               <a href="/">
//                 <li className="text-white  font-[500] hover:underline">
//                   <p className="font-zyre">Home</p>
//                 </li>
//               </a>
//             </div>
//             <a href="/company">
//               <li className="text-white font-zyre font-[500] hover:underline">
//                 Company
//               </li>
//             </a>
//             <li className="text-white font-zyre font-[500] hover:underline">
//               <a href="/solutions">Solutions</a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <Button variant="outline">Contact Us</Button>
//         </div>
//       </div>
//       <div className="flex flex-col bg-black h-[100%]  py-[8rem] px-[4rem]">
//         <p className="text-[4rem] text-center bg-gradient-to-b from-[#B59410] to-[#3F3001] inline-block text-transparent bg-clip-text pb-[2rem]">
//           Our Team
//         </p>
//         <div className="flex gap-[20rem] pb-[4rem]">
//           <div className="flex flex-col items-center">
//             <img
//               src="/gokulan.jpg"
//               alt=""
//               className="h-[200px] w-[200px] rounded-[50%] mb-[1rem]"
//             />
//             <div>
//               <div className="flex gap-[.5rem] items-center">
//                 <p className="text-white font-bold text-xl text-center font-zyre">
//                   Gokulan S
//                 </p>
//                 <a href="https://www.linkedin.com/in/gokulan-sembiyan-1567b2263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                   <IoLogoLinkedin className="text-[#ffffff99] text-2xl hover:text-white transition-all duration-300" />
//                 </a>
//               </div>
//               <p className="text-[#ffffff99]">Founder & CEO</p>
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="/nivas.jpg"
//               alt=""
//               className="h-[200px] w-[200px] rounded-[50%] mb-[1rem]"
//             />
//             <div>
//               <div className="flex gap-[.5rem] items-center">
//                 <p className="font-zyre text-white font-bold text-xl text-center">
//                   Anandha Nivas S
//                 </p>
//                 <a href="https://www.linkedin.com/in/anandhanivas-s?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                   <IoLogoLinkedin className="text-[#ffffff99] text-2xl hover:text-white transition-all duration-300" />
//                 </a>
//               </div>
//               <p className="text-[#ffffff99]">Co Founder</p>
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <img
//               src="/rizwan.jpg"
//               alt=""
//               className="h-[200px] w-[200px] rounded-[50%] mb-[1rem]"
//             />
//             <div>
//               <div className="flex gap-[.5rem] items-center">
//                 <p className="text-white font-bold text-xl text-center font-zyre">
//                   Rizwan
//                 </p>
//                 <a href="https://www.linkedin.com/in/mohamed-ns-874757256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                   <IoLogoLinkedin className="text-[#ffffff99] text-2xl hover:text-white transition-all duration-300" />
//                 </a>
//               </div>
//               <p className="text-[#ffffff99] ">Co Founder</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-[20rem] pb-[4rem]">
//           <div className="flex flex-col items-center">
//             <img
//               src="/vicky.jpg"
//               alt=""
//               className="h-[200px] w-[200px] rounded-[50%] mb-[1rem]"
//             />
//             <div>
//               <div className="flex gap-[.5rem] items-center">
//                 <p className="text-white font-bold text-xl text-center font-zyre">
//                   Vigneshwaren R
//                 </p>
//                 <a href="https://www.linkedin.com/in/vigneshwaran-r-937010264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                   <IoLogoLinkedin className="text-[#ffffff99] text-2xl  hover:text-white transition-all duration-300" />
//                 </a>
//               </div>
//               <p className="text-[#ffffff99]">Ui/Ux Designer</p>
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <img
//               src="/renoye.jpg"
//               alt=""
//               className="h-[200px] w-[200px] rounded-[50%] mb-[1rem]"
//             />
//             <div>
//               <div className="flex gap-[.5rem] items-center pl-[2rem]">
//                 <p className="text-white font-bold text-xl text-center font-zyre ">
//                   Renoye
//                 </p>
//                 <a href="https://www.linkedin.com/in/renoye-r-1504a9222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                   <IoLogoLinkedin className="text-[#ffffff99] text-2xl hover:text-white transition-all duration-300" />
//                 </a>
//               </div>
//               <p className="text-[#ffffff99]">Product Designer</p>
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="/ramana.jpg"
//               alt=""
//               className="h-[200px] w-[200px] rounded-[50%] mb-[1rem]"
//             />
//             <div className="flex flex-col items-center">
//               <div className="flex gap-[.5rem] items-center">
//                 <p className="text-white font-bold text-xl text-center font-zyre">
//                   Jayramanasundhar S
//                 </p>
//                 <a href="https://www.linkedin.com/in/jayramanasundhar/">
//                   <IoLogoLinkedin className="text-[#ffffff99] text-2xl hover:text-white transition-all duration-300" />
//                 </a>
//               </div>
//               <p className="text-[#ffffff99]">Full Stack Web Developer</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-[20rem]">
//           <div className="flex flex-col items-center">
//             <img
//               src="/shakthi.jpg"
//               alt=""
//               className="h-[200px] w-[200px] rounded-[50%] mb-[1rem] "
//             />
//             <div>
//               <div className="flex gap-[.5rem] items-center">
//                 <p className="text-white font-bold text-xl text-center font-zyre">
//                   Shakthidher
//                 </p>
//                 <a href="https://www.linkedin.com/in/shakthidhar-b-5b493325b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                   <IoLogoLinkedin className="text-[#ffffff99] text-2xl hover:text-white transition-all duration-300" />
//                 </a>
//               </div>
//               <p className="text-[#ffffff99]">Social Media Manager</p>
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <img
//               src="/gokulan.jpg"
//               alt=""
//               className="h-[200px] w-[200px] rounded-[50%] mb-[1rem]"
//             />
//             <div>
//               <div className="flex gap-[.5rem] items-center">
//                 <p className="text-white font-bold text-xl text-center pl-[1.5rem] font-zyre">
//                   Abijith
//                 </p>
//                 <a href="https://www.linkedin.com/in/abijithb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
//                   <IoLogoLinkedin className="text-[#ffffff99] text-2xl hover:text-white transition-all duration-300" />
//                 </a>
//               </div>
//               <p className="text-[#ffffff99]">Software Manager</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//       <div
//         className="bg-black flex-col "
        
//       >
//         {/* One */}
//         <section className="flex pl-[6rem] gap-[2rem]">
//           <section className="flex flex-col gap-[2rem] p-[2rem]">
//             <div>
//               <img src="/new_logo.png" alt="" />
//             </div>
//             <div className="flex gap-[2rem] items-center">
//               <span className="text-white font-bold font-zyre">
//                 Follow us on
//               </span>
//               <div className="flex gap-[.4rem]">
//                 <FaFacebook className="text-xl text-[#ffffff99]" />
//                 <FaXTwitter className="text-xl text-[#ffffff99]" />
//                 <AiFillInstagram className="text-xl text-[#ffffff99]" />
//                 <IoLogoLinkedin className="text-xl text-[#ffffff99]" />
//               </div>
//             </div>
//             <div>
//               <p className="text-white font-bold font-zyre">Address</p>
//               <p className="text-[#ffffff99] font-zyre">
//                 NO 1,Vijaya nagar,Mgr Salai, <br /> Neyveli,Cuddalore.
//               </p>
//             </div>
//           </section>
//           {/* One */}
//           {/* Two */}
//           <section className="flex flex-col gap-[4rem] pt-[4rem] pb-[2rem] pl-[2rem] pr-[2rem]">
//             <div>
//               <p className="text-white font-bold font-zyre">Quick Links</p>
//               <ul>
//                 <li className="text-[#ffffff99] hover:text-white cursor-pointer font-zyre">
//                   <a href="/">Home</a>
//                 </li>
//                 <li className="text-[#ffffff99] hover:text-white cursor-pointer font-zyre">
//                   Company
//                 </li>
//                 <li className="text-[#ffffff99] hover:text-white cursor-pointer font-zyre">
//                   <a href="/solutions">Products</a>
//                 </li>
//                 <li className="text-[#ffffff99] hover:text-white cursor-pointer font-zyre">
//                   Contact
//                 </li>
//               </ul>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-white font-bold font-zyre">E-mail </span>
//               <span className="text-[#ffffff99] font-zyre">
//                 zyrehomeautomation@gmail.com
//               </span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-white font-bold font-zyre">
//                 Phone Number
//               </span>
//               <span className="text-[#ffffff99] font-zyre">+91 8525928155</span>
//             </div>
//           </section>

//           {/* Two */}
//           {/* Threee */}
//           <section className="flex flex-col gap-[5rem] pt-[4rem] pb-[2rem] pl-[2rem] pr-[2rem]">
//             <div>
//               <span className="text-white font-bold font-zyre">
//                 Home Automation
//               </span>
//               <ul className="text-[#ffffff99]">
//                 <li className="hover:text-white cursor-pointer font-zyre">
//                   Light control
//                 </li>
//                 <li className="hover:text-white cursor-pointer font-zyre">
//                   HVAC control
//                 </li>
//                 <li className="hover:text-white cursor-pointer font-zyre">
//                   Voice control
//                 </li>
//                 <li className="hover:text-white cursor-pointer font-zyre">
//                   Mobile Connectivity
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <span className="font-bold text-white font-zyre">Industries</span>

//               <ul className="text-[#ffffff99]">
//                 <li className="hover:text-white cursor-pointer font-zyre">
//                   Motors
//                 </li>
//                 <li className="hover:text-white cursor-pointer font-zyre">
//                   HVAC control
//                 </li>
//                 <li className="hover:text-white cursor-pointer font-zyre">
//                   Dryers
//                 </li>
//               </ul>
//             </div>
//           </section>
//           {/* Three */}
//           {/* Fourth*/}
//           <section className="flex flex-col  pt-[4rem] pb-[2rem] pl-[8rem] pr-[2rem]">
//             <span className="text-white font-bold font-zyre">
//               Stores and Malls
//             </span>
//             <ul className="text-[#ffffff99]">
//               <li className="hover:text-white cursor-pointer font-zyre">
//                 AV control
//               </li>
//               <li className="hover:text-white cursor-pointer font-zyre">
//                 Automation and Scheduling
//               </li>
//               <li className="hover:text-white cursor-pointer font-zyre">
//                 Diming and Speed control
//               </li>
//             </ul>
//           </section>
//           {/*Fourth */}
//         </section>
//         <section>
//           <img src="/line.svg" alt="" className="w-[90%] pl-[8rem]" />
//           <div className="flex pt-[1rem] pl-[8rem]">
//             <div className=" flex gap-[10rem]">
//               <span className="text-[#ffffff99] font-zyre">
//                 Developed by John Doe and John Doe
//               </span>
//               <span className="text-[#ffffff99] font-zyre">
//                 Copyright &copy; 2024 Zyre Home Automations All rights reserved
//               </span>
//             </div>
//             <div className="pl-[8rem] flex gap-[.5rem]">
//               <a href="terms" rel="external nofollow noopener" target="_blank">
//                 <span className="text-[#ffffff99] hover:text-white font-zyre">
//                   Terms and Conditions
//                 </span>
//               </a>
//               <span className="text-[#ffffff99] hover:text-white font-zyre">
//                 Privacy Policy
//               </span>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Company;
