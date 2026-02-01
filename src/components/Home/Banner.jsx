import { fontBangla } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h2 className={`${fontBangla.className} text-6xl font-bold leading-20`}>
          আপনার বাচ্চাকে দিন একটা{" "}
          <span className="text-primary">সুন্দর ভবিষ্যত</span>
        </h2>
        <p>Bye Every toy with up to 20% Discount</p>
        <Link href="/products" className="btn btn-primary btn-dash">Explore Products</Link>
      </div>
      <div>
        <Image
          alt="Bye Every toy with up to 20% Discount"
          src={"/assets/hero.png"}
          width={500}
          height={400}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
