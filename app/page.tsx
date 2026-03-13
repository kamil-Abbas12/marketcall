"use client"

import Image from "next/image";
import Hero from "./component/Hero";
import Product from "./component/Product";
import Choose from "./component/Choose";
import Ads from "./component/Ads";
import Get from "./component/Get";
export default function Home() {
  return (
    <>
  <Hero/>
  <Product/>
  <Choose/>
  <Ads/>
  <Get/>
    </>
  );
}
