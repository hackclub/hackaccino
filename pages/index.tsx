"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Steps } from "@/components/Steps";
import { WhatchaWaitingFor } from "@/components/WhatchaWaitingFor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <img src="/flag.svg" className="max-w-48 md:absolute transition" />
      <div
        className={`flex min-h-[70vh] justify-center items-center flex-col items  pb-0 md:pb-0`}
      >
        <img src="/logo.svg" />
        <p className="subtitle_explanation text-lg md:text-[3vw]  cherry-bomb-one-regular">
          Make a 3D Website • Get a free Frappuccino
        </p>
        <div className="flex flex-col justify-center  md:flex-row space-x-8 mt-16">
          <a href="https://forms.hackclub.com/t/vA6GrDK99Tus" className="">
            <div className=" text-[#FFF2DE] transition duration-750 get-free-frap text-2xl flex items-center spicy-rice rounded-full px-6 py-3 ring-4 ring-[#4F2A0E] border-2 border-[#FFF2DE] bg-[#4F2A0E] ">
              <img
                src="https://cultofthepartyparrot.com/parrots/hd/coffeeparrot.gif"
                className="max-h-10 -mt-3 mr-2"
              />
              Get a Free Frap
            </div>
          </a>
          <a href="#" className="">
            <div className="transition duration-750 get-free-frap text-2xl spicy-rice rounded-full px-6 py-3 ring-4 ring-[#4F2A0E] border-2 border-[#FFF2DE]  text-[#4F2A0E]">
              Running a workshop?
            </div>
          </a>
        </div>
      </div>
      <div className="p-8 md:p-24 space-y-4">
        <Steps />
        <WhatchaWaitingFor />
      </div>
    </main>
  );
}
