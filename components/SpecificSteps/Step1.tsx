import { Showcase } from "../Showcase";

export const Step1 = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row space-x-0   md:space-y-0 md:space-x-[3vw] mx-auto justify-center max-w-4xl">
        <div className="space-y-4">
          <div className="space-x-5 flex items-center">
            <div className="w-10 h-10 bg-[#4f2a0e] rounded-full flex justify-center items-center text-[#fff0d8] spicy-rice text-2xl">
              1
            </div>
            <span className="text-3xl spicy-rice text-[#4f2a0e]">
              Create a 3D website
            </span>
          </div>
          <p className="text-xl">
            A-Frame is an easy to use, beginner-focused web library that allows
            you to create 3D worlds extremely quickly! Check out their{" "}
            <a
              href="https://jams.hackclub.com/jam/3d-website"
              className="underline"
            >
              getting started
            </a>{" "}
            guide to start creating amazing 3D websites with just 40 lines of
            code! (Note: you're not restricted just to A-Frame. Feel free to use
            whatever you are comfortable with!)
          </p>

          <div className="pt-3">
            <a href="https://jams.hackclub.com/jam/3d-website" className="">
              <div className="text-[#FFF2DE] hover:scale-110 transition duration-750 text-center  text-lg md:text-2xl spicy-rice rounded-lg px-6 py-3 ring-4 ring-[#4F2A0E] border-2 border-[#FFF2DE] bg-[#4F2A0E] ">
                Learn how to use A-Frame
              </div>
            </a>
          </div>
        </div>
        {/* <DynamicComputer /> */}
        <img src="/computercrop.png" className="md:h-[30vh] mb-4 md:mb-0" />
      </div>

      <span className="">
        <div className="flex md:space-x-[3vw] mx-auto justify-center max-w-4xl my-8">
          <div className="md:w-1/2 mx-auto text-xl">
            Here are some examples of what you can build with A-Frame:
          </div>
        </div>
        {/* <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center mx-auto gap-8">
          <img src="/example1.jpeg" className=" w-auto" />
          <img src="/example2.png" className=" w-auto" />
          <img src="/example3.png" className="w-auto" />
        </div> */}
        <Showcase />
      </span>
    </>
  );
};
