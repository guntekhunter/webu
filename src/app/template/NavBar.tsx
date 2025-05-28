"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 100;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar on any scroll, hide only when very top
      if (currentScrollY > SCROLL_THRESHOLD) {
        setShow(true); // Show when user scrolls down or up
      } else {
        setShow(false); // Hide at very top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center py-[.7rem] border-b-[1px] border-opacity-[66%]">
      <div
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        } backdrop-blur-sm bg-white/90 border-b-[1.5px] border-white/20 border-opacity-[66%]`}
      >
        <div className="md:w-full md:flex md:justify-center py-[.7rem] md:space-x-[.5rem] w-full">
          <div className="md:max-w-[90%] max-w-[80%] w-full mx-auto flex justify-between items-center">
            <div className="flex space-x-[.4rem]">
              <div>
                <img
                  src="/logo.png"
                  alt="start"
                  width={500}
                  height={500}
                  className="md:w-[2rem] mt-[.2rem] w-[2rem]"
                />
              </div>
              <div>
                <div className="md:text-[1rem] text-[1rem] font-bold">
                  WEB U
                </div>
                <div className="md:text-[.66rem] text-[.7rem] font-thin">
                  All For You
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="md:flex items-center hidden">
                <ul className="flex text-[.7rem] space-x-[2.5rem] text-[#0f1317] font-medium opacity-[96%]">
                  <li>Home</li>
                  <li>Tentang Kami</li>
                  <li>Portofolio</li>
                  <li>Layanan</li>
                  <li>Testimoni</li>
                </ul>
              </div>
            </div>
            <div className="md:flex items-center hidden">
              <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                Hubungi Kami
              </button>
            </div>
            <div
              className="h-full flex md:hidden items-center cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <img
                src={isMobileMenuOpen ? "/close.png" : "/open.png"} // Replace hamburger.png with your menu icon
                alt="toggle menu"
                className="w-[1rem] h-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* navbar stay */}
      <div className="md:w-[90%] w-[80%] flex justify-between z-[100] bg-white">
        <div>
          <div className="flex space-x-[.4rem]">
            <div>
              <img
                src="/logo.png"
                alt="start"
                width={500}
                height={500}
                className="md:w-[2rem] mt-[.2rem] w-[2rem]"
              />
            </div>
            <div>
              <div className="md:text-[1rem] text-[1rem] font-bold">WEB U</div>
              <div className="md:text-[.66rem] text-[.7rem] font-thin">
                All For You
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex items-center hidden">
          <ul className="flex text-[.7rem] space-x-[2.5rem] text-[#52697F] font-medium opacity-[66%]">
            <li>Home</li>
            <li>Tentang Kami</li>
            <li>Portofolio</li>
            <li>Layanan</li>
            <li>Testimoni</li>
          </ul>
        </div>
        <div className="md:flex items-center hidden">
          <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
            Hubungi Kami
          </button>
        </div>
        <div
          className="h-full flex md:hidden items-center cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img
            src={isMobileMenuOpen ? "/close.png" : "/open.png"} // Replace hamburger.png with your menu icon
            alt="toggle menu"
            className="w-[1rem] h-[1rem]"
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed w-[70%] z-50 transition-all duration-500 ease-in-out
    ${
      show
        ? "top-[3.8rem] backdrop-blur-sm bg-white/90 border-b-[1.5px] border-white/20 border-opacity-[66%]"
        : ""
    }
    bg-white p-[1rem] border border-opacity-[50%] rounded-[10px] right-0
     top-[3.8rem] md:text-left text-center`}
        >
          <ul className="space-y-[1rem]">
            <li>Home</li>
            <li>Tentang Kami</li>
            <li>Portofolio</li>
            <li>Layanan</li>
            <li>Testimoni</li>
          </ul>
          <div className="pt-[1rem]">
            <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
              Hubungi Kami
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
