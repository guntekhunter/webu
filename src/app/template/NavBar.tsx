import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full flex justify-center py-[.7rem] border-b-[1px] border-opacity-[66%]">
      <div className="w-[90%] flex justify-between">
        <div>
          <div className="text-[1rem] font-bold">WEB U</div>
          <div className="text-[.66rem] font-thin">All For You</div>
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
