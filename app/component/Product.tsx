"use client";
import { Settings, Shield, Cpu, Users, DollarSign, Headphones } from "lucide-react";

import { Check } from "lucide-react";
import Image from "next/image";

export default function Product() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <p className="text-center text-gray-500 text-sm mb-2">Product</p>
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          Boost your digital presence with Marketcall
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ADVERTISERS */}
          <div className="bg-white border rounded-xl p-8 relative overflow-hidden pb-32 md:pb-28 lg:pb-32 xl:pb-36">
            <h3 className="text-2xl font-semibold mb-4">Advertisers</h3>
            <p className="text-gray-600 mb-6">
              I am an advertiser, app developer, service provider or agency
              looking to reach the right customers and maximize profits.
            </p>

            <ul className="space-y-3 text-gray-700 text-md mb-8">
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-1" size={18} />
                Get promote by super affiliates
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-1" size={18} />
                Easy to use
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-1" size={18} />
                Pay only for qualified calls
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-1" size={18} />
                Detailed statistics and analytics
              </li>
            </ul>

            <button className="bg-indigo-600 text-white mt-8  lg:mt-14 xl:mt-8 px-6 py-3 rounded-md">
              See all features
            </button>

            {/* Image hidden on small devices */}
            <Image
              src="/adv.jpg"
              width={120}
              height={120}
              alt="advertiser"
              className="hidden sm:block absolute bottom-4 right-4 
              opacity-90 sm:bottom-0 sm:right-0 lg:bottom-0 lg:right-0 xl:bottom-0 xl:right-0"
            />
          </div>

          {/* PARTNERS */}
          <div className="bg-white border rounded-xl p-8 relative overflow-hidden pb-32 md:pb-28 lg:pb-32 xl:pb-36">
            <h3 className="text-2xl font-semibold mb-4">Partners</h3>
            <p className="text-gray-600 mb-6">
              I am a publisher, website owner, influencer, email marketer,
              app developer looking to promote brands, products and services
              and maximize my revenue.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8  ">
              <li className="flex items-start gap-2 ">
                <Check className="text-green-500 mt-1" size={18} />
                Only top offers
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-1" size={18} />
                Weekly payouts
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-1" size={18} />
                Free advertising tools
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-1" size={18} />
                Exclusive verticals
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-green-500 mt-1" size={18} />
                High conversion 
              </li>
            </ul>

            <button className="bg-indigo-600 text-white text-sm lg:text-md px-4 py-3 lg:px-6  rounded-md">
              Become a partner
            </button>

            {/* Image hidden on small devices */}
            <Image
              src="/partner.jpg"
              width={120}
              height={120}
              alt="partner"
              className="hidden sm:block absolute bottom-4 right-4 
              opacity-90 sm:bottom-0 sm:right-0 lg:bottom-0 lg:right-0 xl:bottom-0 xl:right-0"
            />
          </div>
        </div>

        {/* FEATURES ROW */}
     
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16 text-gray-700">
  <div className="flex flex-row items-center justify-center gap-2 min-h-[80px]">
    <Settings size={24} className="text-indigo-600" />
    <span className="text-center">Marketing tools</span>
  </div>

  <div className="flex flex-row items-center justify-center gap-2 min-h-[80px]">
    <Shield size={24} className="text-indigo-600" />
    <span className="text-center">Fraud prevention</span>
  </div>

  <div className="flex flex-row items-center justify-center gap-2 min-h-[80px]">
    <Cpu size={24} className="text-indigo-600" />
    <span className="text-center">Automatization</span>
  </div>

  <div className="flex flex-row items-center justify-center gap-2 min-h-[80px]">
    <Users size={24} className="text-indigo-600" />
    <span className="text-center">Lead generation</span>
  </div>

  <div className="flex flex-row items-center justify-center gap-2 min-h-[80px]">
    <DollarSign size={24} className="text-indigo-600" />
    <span className="text-center">Payouts</span>
  </div>

  <div className="flex flex-row items-center justify-center gap-2 min-h-[80px]">
    <Headphones size={24} className="text-indigo-600" />
    <span className="text-center">Dedicated Support</span>
  </div>
</div>
      </div>
    </section>
  );
}