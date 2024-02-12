import { useState } from "react";
import { Icon } from "../Icon";
import mobile_logo from "../assets/mobile_logo.png";
import logo from "../assets/logo-salesforce.svg";
import { useEffect } from "react";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (this.window.innerWidth < "1280") {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <>
      {isMobile ? (
        <nav className="header flex justify-between max-w-[100vw] h-[56px] items-center">
          <div className="hamburger-container flex gap-6 items-center pl-6">
            <Icon name="hamburger-blue" className="w-[18px] h-[18px]" />
            <div className="logo">
              <img src={mobile_logo} className="w-[45px] h-[32px]" alt="" />
            </div>
          </div>
          <div className="user-container flex justify-between gap-6 items-center pr-6">
            <div>
              <Icon name="search-blue" className="w-[18px] h-[18px]" />
            </div>
            <div>
              <Icon name="user-blue" className="w-[18px] h-[18px]" />
            </div>
            <button className="bg-[#2e844a] text-[14px] py-[4px] px-[12px] rounded-md tracking-wide font-bold text-white border">
              Try for free
            </button>
          </div>
        </nav>
      ) : (
        <nav className="header flex justify-between max-w-[100vw] h-[96px] mx-[40px] items-center">
          <div className="hamburger-container flex gap-6 items-center">
            <div className="logo">
              <img src={logo} className="w-[68px] h-[48px]" alt="" />
            </div>
          </div>

          <ul className="flex flex-grow ml-5 ">
            <li className="px-[16px] text-[16px] font-bold text-[#032d60] hover:text-[#0176d3]">
              Products
            </li>
            <li className="px-[16px] text-[16px] font-bold text-[#032d60] hover:text-[#0176d3]">
              Industries
            </li>
            <li className="px-[16px] text-[16px] font-bold  text-[#032d60] hover:text-[#0176d3]">
              Customers
            </li>
            <li className="px-[16px] text-[16px] font-bold  text-[#032d60] hover:text-[#0176d3]">
              Learning
            </li>
            <li className="px-[16px] text-[16px] font-bold  text-[#032d60] hover:text-[#0176d3]">
              Support
            </li>
            <li className="px-[16px] text-[16px] font-bold  text-[#032d60] hover:text-[#0176d3]">
              More
            </li>
          </ul>

          <Icon name="chevron-right-blue" className="w-[18px] h-[18px]" />

          <div className="flex px-[15px]">
            <div className="contact-container mx-[12px]">
              <span className="block text-center text-[14px] mx-[4px] text-[rgb(3,45,95)] underline">
                Contact Us
              </span>
              <span className="text-[14px] mx-[4px]">(+44) 800 086 8530</span>
            </div>
            <div className="user-container flex justify-between gap-6 items-center">
              <div>
                <Icon name="search-blue" className="w-[18px] h-[18px]" />
              </div>
              <div>
                <Icon name="globe-blue" className="w-[18px] h-[18px]" />
              </div>
              <div className="flex items-center justify-center">
                <Icon name="user-blue" className="w-[18px] h-[18px] mr-1" />
                <span className="font-semibold">Login</span>
              </div>
              <button className="bg-[#2e844a] text-[16px] py-[8px] px-[24px] rounded-md tracking-wide font-semibold hover:bg-black hover:text-white text-white border">
                Try for free
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;
