import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function App() {
  return (
    <main className=" h-screen bg-gradient-to-b from-[#000000] to-[#545145] overflow-y-scroll fixed ">
      {/* Nav-Start */}
      <div className="flex justify-between items-center bg-[#080505] p-[1.5rem] fixed w-[100%]">
        {/* Image */}
        <div>
          {/* <img src="/vite.svg" alt="" /> */}
          <p>Zyre</p>
        </div>
        <div>
          <ul className="flex gap-[4rem]">
            <li className="text-white font-[inter]">Home</li>
            <li className="text-white font-[inter]">Company</li>
            <li className="text-white font-[inter]">Solutions</li>
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
      <div className="h-screen flex flex-col items-center justify-center">
        <span className="text-white self-center text-[4rem] font-bold font-[inter]">
          About Us
        </span>
        <p className="text-white p-[2rem] leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure cum
          perspiciatis aliquam quidem molestias cupiditate mollitia, placeat
          consequatur odio debitis quae sapiente nihil veniam illum quos vel
          labore dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eum repellat doloribus voluptates quasi in. Aspernatur, beatae
          vitae! Iusto laudantium iste corrupti asperiores reprehenderit numquam
          quas dolorem, sequi commodi nisi cumque. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Inventore sed eius tempore voluptates,
          tenetur asperiores. Vero blanditiis maxime dolore error cum
          consectetur enim dolor, officiis facere rem molestias aperiam eum?
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
      <div className="h-screen flex flex-col items-center justify-center p-[2rem]">
        <span className="text-white font-[2rem] font-[inter] font-bold text-[4rem]">
          Solutions
        </span>
        <div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure cum
            perspiciatis aliquam quidem molestias cupiditate mollitia, placeat
            consequatur odio debitis quae sapiente nihil veniam illum quos vel
            labore dolorem.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure cum
            perspiciatis aliquam quidem molestias cupiditate mollitia, placeat
            consequatur odio debitis quae sapiente nihil veniam illum quos vel
            labore dolorem.
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure cum
            perspiciatis aliquam quidem molestias cupiditate mollitia, placeat
            consequatur odio debitis quae sapiente nihil veniam illum quos vel
            labore dolorem.
          </p>
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
            <Input type="text" placeholder="Name" className="w-[300px]" />
          </section>
          <section className="flex gap-[1rem]">
            <Input type="text" placeholder="Name" className="w-[300px]" />
            <Input type="text" placeholder="Name" className="w-[300px]" />
          </section>
          <Textarea placeholder="Address" />
        </div>
        {/* Inputs */}
      </div>
      {/* Feedback */}

      {/* Footer */}

      {/* Footer */}
    </main>
  );
}

export default App;
