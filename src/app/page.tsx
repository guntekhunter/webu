import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      {/* section 1 */}
      <section className="w-[90%] flex justify-center h-[100vh] py-[5rem] relative">
        <div className="absolute h-full w-full z-[-1] top-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,116,183,0.9)_0%,_rgba(46,116,183,0)_80%)] opacity-20"></div>
        <div className="w-[60%] flex justify-center z-1">
          <div className="space-y-[1.6rem] ">
            <h1 className="text-[3.50375rem] text-center leading-[1.2]">
              Jasa Pembuatan Website Terpercaya
            </h1>
            <div className="w-full flex justify-center">
              <div className="w-[80%]">
                <p className="text-[.7rem] text-[#52697F] font-medium opacity-[66%] text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="w-full justify-center flex">
              <div className="space-x-[1rem]">
                <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                  Hubungi Kami
                </button>
                <button className="bg-white shadow-md text-[#52697F] opacity-[66%] font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                  Hubungi Kami
                </button>
              </div>
            </div>
            <div className="justify-center flex">
              <div>
                <div className="flex space-x-[.5rem]">
                  <div className="flex space-x-[.5rem]">
                    <img
                      src="/star2.png"
                      alt="start"
                      width={500}
                      height={500}
                      className="w-[.8rem] h-[.8rem]"
                    />
                    <img
                      src="/star2.png"
                      alt="start"
                      width={500}
                      height={500}
                      className="w-[.8rem] h-[.8rem]"
                    />
                    <img
                      src="/star2.png"
                      alt="start"
                      width={500}
                      height={500}
                      className="w-[.8rem] h-[.8rem]"
                    />
                    <img
                      src="/star1.png"
                      alt="start"
                      width={500}
                      height={500}
                      className="w-[.8rem] h-[.8rem]"
                    />
                  </div>
                  <p className="font-semibold  text-[.7rem]">4.8</p>
                  <p className="text-[#52697F] opacity-[66%] font-medium text-[.7rem]">
                    Lorem Ipsum is simply
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-400 p-0">
              <img
                src="/foto.webp"
                alt="start"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
