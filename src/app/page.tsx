import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%]">
        {/* section 1 */}
        <section className="flex justify-center py-[5rem] relative">
          <div className="absolute h-full w-full z-[-1] top-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,116,183,0.9)_0%,_rgba(46,116,183,0)_70%)] opacity-20"></div>
          <div className="w-full justify-center flex">
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
                <div className="filter drop-shadow-[0_12px_20px_rgba(46,116,183,0.20)] animate-fadeInUp">
                  <img src="/foto.webp" alt="" className="rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section className="space-y-[1rem]">
          <h2 className="text-[2.165625rem] font-medium w-full text-center">
            Kenapa Bisnismu Butuh Website?
          </h2>
          <div className="grid grid-cols-4 gap-[1rem] py-10 bg-white">
            <div className="p-[2rem] rounded-[10px] bg-white filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] space-y-[1rem]">
              <p className="text-[0.8275rem] text-center font-semibold">
                Tingkatkan Kepercayaan Konsumen
              </p>
              <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                Website yang profesional memberi kesan bahwa bisnis Anda serius,
                terpercaya, dan punya identitas jelas. Banyak konsumen melakukan
                riset online sebelum membeli. Tanpa website, Anda kehilangan
                kepercayaan itu.
              </p>
            </div>
            <div className="p-[2rem] rounded-[10px] bg-white filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] space-y-[1rem]">
              <p className="text-[0.8275rem] text-center font-semibold">
                Tampil Lebih Unggul dari Kompetitor
              </p>
              <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                Masih banyak pelaku usaha yang belum punya website. Ini
                kesempatan Anda untuk tampil lebih profesional dan lebih mudah
                ditemukan oleh calon pelanggan yang mencarinya lewat Google.
              </p>
            </div>
            <div className="p-[2rem] rounded-[10px] bg-white filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] space-y-[1rem]">
              <p className="text-[0.8275rem] text-center font-semibold">
                Promosi Lebih Efisien dan Terukur
              </p>
              <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                Website bisa diintegrasikan dengan berbagai tools pemasaran
                digital seperti Google Ads, SEO, hingga media sosial. Hasil
                promosi Anda bisa dilacak, diukur, dan terus ditingkatkan—hal
                yang sulit dilakukan jika hanya mengandalkan metode
                konvensional.
              </p>
            </div>
            <div className="p-[2rem] rounded-[10px] bg-white filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] space-y-[2rem]">
              <p className="text-[0.8275rem] text-center font-semibold">
                Investasi Jangka Panjang
              </p>
              <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                Berbeda dengan iklan yang hanya aktif selama Anda membayar,
                website adalah aset digital yang bekerja terus-menerus untuk
                membangun reputasi dan menjangkau pasar Anda tanpa batas waktu.
              </p>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section className="grid grid-cols-2 gap-[2rem] py-[3rem] relative">
          <div className="absolute h-full w-full z-[-1] top-0 bg-[radial-gradient(ellipse_at_center,_rgba(162,46,183,0.9)_0%,_rgba(162,46,183,0)_70%)] opacity-10"></div>
          <div>
            <h2 className="text-[2.165625rem] font-medium w-full">
              Kenapa Kami?
            </h2>
            <p className="text-[.7rem] text-[#52697F] font-medium opacity-[66%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img src="1.png" alt="" className="w-[5.0625rem] h-[5.0625rem]" />
              <div>
                <div className="p-[2rem] space-y-[1rem]">
                  <p className="text-[0.8275rem] font-semibold">
                    Support Amanah & Responsif
                  </p>
                  <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                    Kami paham tantangan dan kebutuhan UMKM. Solusi kami
                    dirancang agar praktis, terjangkau, dan langsung berdampak
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src="2.png" alt="" className="w-[5.0625rem] h-[5.0625rem]" />
              <div>
                <div className="p-[2rem] space-y-[1rem]">
                  <p className="text-[0.8275rem] font-semibold">
                    Murah & Berkulitas
                  </p>
                  <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                    Kami paham tantangan dan kebutuhan UMKM. Solusi kami
                    dirancang agar praktis, terjangkau, dan langsung berdampak
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src="3.png" alt="" className="w-[5.0625rem] h-[5.0625rem]" />
              <div>
                <div className="p-[2rem] space-y-[1rem]">
                  <p className="text-[0.8275rem] font-semibold">
                    Customizable & Scalable
                  </p>
                  <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                    Kami paham tantangan dan kebutuhan UMKM. Solusi kami
                    dirancang agar praktis, terjangkau, dan langsung berdampak
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src="4.png" alt="" className="w-[5.0625rem] h-[5.0625rem]" />
              <div>
                <div className="p-[2rem] space-y-[1rem]">
                  <p className="text-[0.8275rem] font-semibold">
                    Desain Modern, Sistem Andal
                  </p>
                  <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                    Kami paham tantangan dan kebutuhan UMKM. Solusi kami
                    dirancang agar praktis, terjangkau, dan langsung berdampak
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img src="5.png" alt="" className="w-[5.0625rem] h-[5.0625rem]" />
              <div>
                <div className="p-[2rem] space-y-[1rem]">
                  <p className="text-[0.8275rem] font-semibold">
                    Spesialis UMKM
                  </p>
                  <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                    Kami paham tantangan dan kebutuhan UMKM. Solusi kami
                    dirancang agar praktis, terjangkau, dan langsung berdampak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
