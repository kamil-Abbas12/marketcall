"use client"

import React from "react"

const Hero = () => {
  return (
<div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16  py-20 gap-16">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 xl:px-24 py-16 gap-10 xl:gap-15">

        {/* LEFT SIDE */}
      <div className="left flex flex-col space-y-9 w-full xl:w-1/2">

  <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight text-black">
    New standard in performance marketing
  </h1>

  <p className="text-gray-600 text-base sm:text-lg max-w-lg">
    Marketcall is the best affiliate network to get new clients.
    We make millions of conversions every year.
  </p>

  <div className="flex flex-row gap-4 pt-2">
    
    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
      Get clients
    </button>

    <button className="border border-indigo-500 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">
      Monetize your traffic
    </button>

  </div>

</div>

        {/* RIGHT SIDE VIDEO */}
        <div className="w-full max-w-[640px]">

          <video
            width="867"
            autoPlay
            loop
            muted
            playsInline
            poster="/video_poster.jpg"
            className="w-full h-auto rounded-lg shadow-lg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

        </div>

      </div>

    </div>
  )
}

export default Hero