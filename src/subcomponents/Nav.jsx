import { Button } from "@/components/ui/button";
import logo from "/new_logo.png";
import PropTypes from "prop-types";
import "../index.css"

const Nav = ({ bottomRef, scrollToBottom }) => {
  return (
    <div>
      <div
        className={`flex justify-between items-center  z-50 fixed w-[100%]
        backdrop-blur-md pt-[2rem] px-[2rem] pb-[1rem]
        `}
      >
        {/* Image */}
        <div>
          <a href="/">
            <img src={logo} alt="" className="h-[48px] " />
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

            <a href="products">
              <li className="text-white font-[500] txt left font-zyre">
                Products
              </li>
            </a>
            <a href="solutions">
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
    </div>
  );
};

Nav.propTypes = {
  bottomRef: PropTypes.object.isRequired, // Assuming bottomRef is a ref object
  scrollToBottom: PropTypes.func.isRequired, // Assuming scrollToBottom is a function
};

export default Nav;
