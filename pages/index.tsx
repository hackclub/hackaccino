import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <img
        src="https://assets.hackclub.com/flag-orpheus-top.svg"
        className="max-w-48 md:absolute hover:rotate-[25deg] transition"
      />
      <div
        className={`flex min-h-screen flex-col items-center p-8 md:p-24 ${inter.className}`}
      >
        <img src="/logo.svg" />
        <p className="subtitle_explanation text-lg md:text-[3vw]  cherry-bomb-one-regular">
          Make a 3D Website • Get a free Frappuccino
        </p>
        <div className="flex flex-col justify-center  md:flex-row space-x-8 mt-16">
          <a href="#" className="">
            <div className=" transition duration-750 get-free-frap text-2xl flex items-center space-x-2 spicy-rice rounded-full px-6 py-3 ring-4 ring-[#4F2A0E] border-2 border-[#FFF2DE] bg-[#4F2A0E] text-[#FFF2DE]">
              <img
                src="https://cultofthepartyparrot.com/parrots/hd/coffeeparrot.gif"
                className="max-h-10 -mt-3"
              />
              <span>Get a Free Frap</span>
            </div>
          </a>
          <a href="#" className="">
            <div className="transition duration-750 get-free-frap text-2xl spicy-rice rounded-full px-6 py-3 ring-4 ring-[#4F2A0E] border-2 border-[#FFF2DE]  text-[#4F2A0E]">
              Running a workshop?
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
