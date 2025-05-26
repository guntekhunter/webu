import Image from "next/image";

export default function Home() {
  return (
    <div>
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
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
                <p className="text-[0.8275rem] text-left font-semibold">
                  Tingkatkan Kepercayaan Konsumen
                </p>
                <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                  Website yang profesional memberi kesan bahwa bisnis Anda
                  serius, terpercaya, dan punya identitas jelas. Banyak konsumen
                  melakukan riset online sebelum membeli. Tanpa website, Anda
                  kehilangan kepercayaan itu.
                </p>
              </div>
              <div className="p-[2rem] rounded-[10px] bg-white filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] space-y-[1rem]">
                <p className="text-[0.8275rem] text-left font-semibold">
                  Tampil Lebih Unggul dari Kompetitor
                </p>
                <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                  Masih banyak pelaku usaha yang belum punya website. Ini
                  kesempatan Anda untuk tampil lebih profesional dan lebih mudah
                  ditemukan oleh calon pelanggan yang mencarinya lewat Google.
                </p>
              </div>
              <div className="p-[2rem] rounded-[10px] bg-white filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] space-y-[1rem]">
                <p className="text-[0.8275rem] text-left font-semibold">
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
                <p className="text-[0.8275rem] text-left font-semibold">
                  Investasi Jangka Panjang
                </p>
                <p className="text-[0.51125rem] text-[#52697F] opacity-[66%]">
                  Berbeda dengan iklan yang hanya aktif selama Anda membayar,
                  website adalah aset digital yang bekerja terus-menerus untuk
                  membangun reputasi dan menjangkau pasar Anda tanpa batas
                  waktu.
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img
                  src="1.png"
                  alt=""
                  className="w-[5.0625rem] h-[5.0625rem]"
                />
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
                <img
                  src="2.png"
                  alt=""
                  className="w-[5.0625rem] h-[5.0625rem]"
                />
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
                <img
                  src="3.png"
                  alt=""
                  className="w-[5.0625rem] h-[5.0625rem]"
                />
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
                <img
                  src="4.png"
                  alt=""
                  className="w-[5.0625rem] h-[5.0625rem]"
                />
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
                <img
                  src="5.png"
                  alt=""
                  className="w-[5.0625rem] h-[5.0625rem]"
                />
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
          {/* section 4 */}
          <section className="flex justify center bg-gradient-to-r from-[#4BA2F6] via-[#9CC7F0] to-[#9FD0FF] rounded-[10px] space-x-[2rem] py-[3rem] px-[3rem]">
            <div className="relative w-[40%] ">
              <div className="absolute h-[10rem] z-10 w-[15rem] bottom-0 bg-white rounded-[10px] opacity-[60%]"></div>
              <div className="absolute h-[10rem] z-10 w-[15rem] right-0 bg-white rounded-[10px] opacity-[60%]"></div>
              <img
                src="laptop.png"
                alt=""
                width={500}
                height={500}
                className="z-20 absolute w-[23rem] left-[2rem]"
              />
            </div>
            <div className="w-[60%]  py-[2rem] space-y-[.7rem]">
              <h2 className="text-[2.165625rem] font-medium w-full text-white">
                Clients Business As Is Own
              </h2>
              <p className="text-[0.8275rem] text-white">
                Yups Benar ! Setiap project dari client kami kerjakan sepenuh
                hati dan kami perlakukan seperti bisnis kami sendiri, sehingga
                hasil terbaik yang akan Anda dapatkan.
              </p>
              <div className="space-x-[1rem]">
                <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                  Hubungi Kami
                </button>
                <button className="bg-white shadow-md text-[#52697F] opacity-[66%] font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </section>
          {/* section 5 */}
          <section className="flex space-y-[1rem] pt-[5rem]">
            <div className="w-full">
              <h2 className="text-[2.165625rem] font-medium w-full text-center">
                Harga Layanan Kami
              </h2>
              <div className="grid grid-cols-3 w-full space-x-[1rem]  py-[2rem]">
                <div className="py-[2rem]">
                  <div className="filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] bg-white p-[2rem] rounded-[10px]">
                    <div>
                      <h3 className="font-medium">Paket Standar</h3>
                      <p className="text-[0.51125rem]">
                        Company Profile Bisnis / UMKM / Web Personal / Catalog
                        Toko Online
                      </p>
                    </div>

                    <div className="w-full py-[1rem]">
                      <p className="text-[0.51125rem] text-center w-full text-[#2E74B7]">
                        Mulai Dari
                      </p>
                      <div className="relative">
                        <div className="absolute h-[.5px] w-[18%] bg-black top-[.3rem] left-[41%]"></div>
                        <p className="text-[0.51125rem] text-center w-full text-black">
                          Rp 1.500.000
                        </p>
                        <h4 className="text-[2.165625rem] font-medium w-full text-center text-[#2E74B7]">
                          Rp1 Juta
                        </h4>
                      </div>
                    </div>

                    <div className="text-[0.51125rem] space-y-[.3rem]">
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Free Domain
                        </p>
                        <p className="text-right">.com / .my.id / .web.id</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          SSL / HTTPS
                        </p>
                        <p className="text-right">.com / .my.id / .web.id</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Hosting
                        </p>
                        <p className="text-right">Free</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Bandwidth
                        </p>
                        <p className="text-right">Free</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Desain Responsive
                        </p>
                        <p className="text-right">Yes, Standart</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Desain Logo
                        </p>
                        <p className="text-right">Free</p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center pt-[2rem]">
                      <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                        Pilih Paket
                      </button>
                    </div>
                  </div>
                </div>

                <div className="filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] bg-[#2E74B7] p-[2rem] text-white rounded-[10px]">
                  <div>
                    <h3 className="font-medium">Paket Standar</h3>
                    <p className="text-[0.51125rem]">
                      Company Profile Bisnis / UMKM / Web Personal / Catalog
                      Toko Online
                    </p>
                  </div>

                  <div className="w-full py-[1rem]">
                    <p className="text-[0.51125rem] text-center w-full text-white">
                      Mulai Dari
                    </p>
                    <div className="relative">
                      <div className="absolute h-[.5px] w-[18%] bg-white top-[.3rem] left-[41%]"></div>
                      <p className="text-[0.51125rem] text-center w-full text-white">
                        Rp 1.500.000
                      </p>
                      <h4 className="text-[2.165625rem] font-medium w-full text-center text-white">
                        Rp1 Juta
                      </h4>
                    </div>
                  </div>

                  <div className="text-[0.51125rem] space-y-[.3rem]">
                    <div className="flex justify-between">
                      <p className="text-left text-white opacity-[66%]">
                        Free Domain
                      </p>
                      <p className="text-right">.com / .my.id / .web.id</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-left text-white opacity-[66%]">
                        SSL / HTTPS
                      </p>
                      <p className="text-right">.com / .my.id / .web.id</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-left text-white opacity-[66%]">
                        Hosting
                      </p>
                      <p className="text-right">Free</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-left text-white opacity-[66%]">
                        Bandwidth
                      </p>
                      <p className="text-right">Free</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-left text-white opacity-[66%]">
                        Desain Responsive
                      </p>
                      <p className="text-right">Yes, Standart</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-left text-white opacity-[66%]">
                        Desain Logo
                      </p>
                      <p className="text-right">Free</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center pt-[4rem]">
                    <button className="bg-white text-[#2E74B7] font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                      Pilih Paket
                    </button>
                  </div>
                </div>

                <div className="py-[2rem]">
                  <div className="filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.10)] bg-white p-[2rem]">
                    <div>
                      <h3 className="font-medium">Paket Standar</h3>
                      <p className="text-[0.51125rem]">
                        Company Profile Bisnis / UMKM / Web Personal / Catalog
                        Toko Online
                      </p>
                    </div>

                    <div className="w-full py-[1rem]">
                      <p className="text-[0.51125rem] text-center w-full text-[#2E74B7]">
                        Mulai Dari
                      </p>
                      <div className="relative">
                        <div className="absolute h-[.5px] w-[18%] bg-black top-[.3rem] left-[41%]"></div>
                        <p className="text-[0.51125rem] text-center w-full text-black">
                          Rp 1.500.000
                        </p>
                        <h4 className="text-[2.165625rem] font-medium w-full text-center text-[#2E74B7]">
                          Rp1 Juta
                        </h4>
                      </div>
                    </div>

                    <div className="text-[0.51125rem] space-y-[.3rem]">
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Free Domain
                        </p>
                        <p className="text-right">.com / .my.id / .web.id</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          SSL / HTTPS
                        </p>
                        <p className="text-right">.com / .my.id / .web.id</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Hosting
                        </p>
                        <p className="text-right">Free</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Bandwidth
                        </p>
                        <p className="text-right">Free</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Desain Responsive
                        </p>
                        <p className="text-right">Yes, Standart</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left text-[#52697F] opacity-[66%]">
                          Desain Logo
                        </p>
                        <p className="text-right">Free</p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center pt-[2rem]">
                      <button className="bg-[#2E74B7] text-white font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                        Pilih Paket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-[5rem] relative">
            <div className="absolute h-full w-full z-[-1] bg-[radial-gradient(ellipse_at_center,_rgba(46,116,183,0.9)_0%,_rgba(46,116,183,0)_70%)] opacity-60"></div>

            <div className="absolute h-full w-full z-[-1] bg-[radial-gradient(ellipse_at_center,_rgba(46,116,183,0.9)_0%,_rgba(46,116,183,0)_70%)]"></div>

            <div className="absolute right-0 h-full w-full z-[-1] bg-[radial-gradient(ellipse_at_top_right,_rgba(46,116,183,0.6)_0%,_rgba(46,116,183,0)_90%)] pointer-events-none rounded-[10px]"></div>

            <div className="absolute left-0 h-full w-full z-[-1] bg-[radial-gradient(ellipse_at_top_left,_rgba(46,116,183,0.6)_0%,_rgba(46,116,183,0)_70%)] pointer-events-none rounded-[10px]"></div>

            <div className="absolute bottom-0 right-0 h-full w-full z-[-1] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(46,116,183,0.6)_0%,_rgba(46,116,183,0)_70%)] pointer-events-none rounded-[10px]"></div>
            <div className="absolute h-full w-full z-[-1] backdrop-blur-sm bg-white rounded-[10px] opacity-70 border border-opacity-5 border-[#3a3a3a]"></div>
            <div className="py-[4rem]">
              <div className="w-full justify-center flex">
                <h2 className="text-[2.165625rem] font-medium w-[80%] text-center text-white">
                  Tunggu Apa Lagi ? Hubungi Kami Sekarang Dan Optimalkan Seluruh
                  Potensi Online Pada Bisnis Anda Sekarang!
                </h2>
              </div>
              <div className="w-full flex justify-center pt-[2rem]">
                <button className="bg-white shadow-md text-[#52697F] opacity-[66%] font-medium text-[.7rem] px-[2rem] py-[.5rem] rounded-[10px]">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-[#2E74B7] mt-[5rem] py-[5rem] px-[5%] text-white">
        <div className="w-[90] grid grid-cols-3">
          <div className="space-y-[1rem]">
            <div>
              <img src="logo white.png" alt="" className="w-[2rem]" />
            </div>
            <div className="space-y-[.5rem] font-light">
              <p className="font-medium">Media Sosial Kami</p>
              <p className="hover:text-[#c1c1c1] cursor-pointer">Instagram</p>
              <p className="hover:text-[#c1c1c1] cursor-pointer">Tiktok</p>
              <p className="hover:text-[#c1c1c1] cursor-pointer">Twitter</p>
            </div>
          </div>
          <div>
            <div className="space-y-[.5rem] font-light">
              <p className="font-medium">Pages</p>
              <p className="hover:text-[#c1c1c1] cursor-pointer">Home</p>
              <p className="hover:text-[#c1c1c1] cursor-pointer">
                Tentang kami
              </p>
              <p className="hover:text-[#c1c1c1] cursor-pointer">Portfolio</p>
              <p className="hover:text-[#c1c1c1] cursor-pointer">Layanan</p>
              <p className="hover:text-[#c1c1c1] cursor-pointer">Testimoni</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#2E74B7] pb-[1rem]">
        <p className="w-full text-center text-white">
          © {new Date().getFullYear()} Web U. All rights reserved.
        </p>
      </div>
    </div>
  );
}
