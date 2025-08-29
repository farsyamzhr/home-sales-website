function AboutUs() {
  return (
    <div id="aboutUs" className="wrapper min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-gray-300 py-7 md:py-20 px-5 lg:px-20 gap-10">
        <div className="box-about flex flex-col gap-4 md:gap-8">
            <div className="title text-center font-bold text-green-700 text-lg md:text-3xl">Tentang Kami</div>
            <div className="text-sm md:text-lg text-center">
                GriyaGo adalah platform properti yang berkomitmen memberikan solusi terbaik bagi siapa saja yang mencari rumah idaman. Dengan pilihan unit yang beragam, fasilitas modern, dan lokasi strategis, kami membantu mewujudkan rumah impian yang sesuai kebutuhan dan gaya hidupmu.
            </div>
        </div>
        <div className="box-title flex flex-col gap-1 items-center">
            <div className="title font-bold text-green-700 text-lg md:text-3xl">Layanan Kami</div>
            <div className="sub-title font-bold text-sm/5 text-center">GriyaGo kini hadir menjadi solusi bagi kamu</div>
        </div>
        <div className="box-service flex flex-col grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="card flex flex-col bg-white shadow rounded-md p-5 gap-3 items-center hover:bg-gradient-to-br from-green-700 to-black hover:text-white">
                <div className="box-subcard flex flex-col gap-1 items-center">
                    <img src="/assets/logo.svg" alt="" className="w-[40px]"/>
                    <div className="card-title font-bold">Jual Rumah</div>
                </div>
                <div className="card-subtitle text-sm text-center">
                    GriyaGo kini jadi kenyataan, beli rumah baru dengan fasilitas terbaik
                    dengan linkungan yang nyaman.
                </div>
            </div>
            <div className="card flex flex-col bg-white shadow rounded-md p-5 gap-3 items-center hover:bg-gradient-to-br from-green-700 to-black hover:text-white">
                <div className="box-subcard flex flex-col gap-1 items-center">
                    <img src="/assets/logo.svg" alt="" className="w-[40px]"/>
                    <div className="card-title font-bold">Jual Rumah</div>
                </div>
                <div className="card-subtitle text-sm text-center">
                    GriyaGo kini jadi kenyataan, beli rumah baru dengan fasilitas terbaik
                    dengan linkungan yang nyaman.
                </div>
            </div>
            <div className="card flex flex-col bg-white shadow rounded-md p-5 gap-3 items-center hover:bg-gradient-to-br from-green-700 to-black hover:text-white">
                <div className="box-subcard flex flex-col gap-1 items-center">
                    <img src="/assets/logo.svg" alt="" className="w-[40px]"/>
                    <div className="card-title font-bold">Jual Rumah</div>
                </div>
                <div className="card-subtitle text-sm text-center">
                    GriyaGo kini jadi kenyataan, beli rumah baru dengan fasilitas terbaik
                    dengan linkungan yang nyaman.
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
