"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const pageHeight = document.body.scrollHeight;
      const triggerScroll = pageHeight * 0.1;

      if (currentScrollY > triggerScroll) {
        setShow(currentScrollY < lastScrollY); // Show when scrolling up
      } else {
        setShow(true); // Always show above 30% scroll
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="w-full flex justify-center py-[.7rem] border-b-[1px] border-opacity-[66%]">
      <div
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
          show ? "-translate-y-full" : "translate-y-0"
        } backdrop-blur-sm bg-white/10 border-b-[1.5px] border-white/20 border-opacity-[66%]`}
      >
        <div className="w-full flex justify-center py-[.7rem] space-x-[.5rem]">
          <div className="w-[90%] flex justify-between">
            <div className="flex space-x-[.4rem]">
              <div>
                <img
                  src="/logo.png"
                  alt="start"
                  width={500}
                  height={500}
                  className="w-[2rem] mt-[.2rem]"
                />
              </div>
              <div>
                <div className="text-[1rem] font-bold">WEB U</div>
                <div className="text-[.66rem] font-thin">All For You</div>
              </div>
            </div>
            <div className="flex items-center">
              <ul className="flex text-[.7rem] space-x-[2.5rem] text-[#0f1317] font-medium opacity-[96%]">
                <li>Home</li>
                <li>Tentang Kami</li>
                <li>Portofolio</li>
                <li>Layanan</li>
                <li>Testimoni</li>
              </ul>
            </div>
            <div className="flex items-center">
              <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex justify-between">
        <div>
          <div className="flex space-x-[.4rem]">
            <div>
              <img
                src="/logo.png"
                alt="start"
                width={500}
                height={500}
                className="w-[2rem] mt-[.2rem]"
              />
            </div>
            <div>
              <div className="text-[1rem] font-bold">WEB U</div>
              <div className="text-[.66rem] font-thin">All For You</div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <ul className="flex text-[.7rem] space-x-[2.5rem] text-[#52697F] font-medium opacity-[66%]">
            <li>Home</li>
            <li>Tentang Kami</li>
            <li>Portofolio</li>
            <li>Layanan</li>
            <li>Testimoni</li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}
