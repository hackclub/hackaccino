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
              Create a website in A-Frame
            </span>
          </div>
          <p className="text-xl">
            A-Frame is an easy to use, beginner-focused web library that allows
            you to create 3D worlds extremely quickly! Check out their{" "}
            <a
              href="https://aframe.io/docs/1.6.0/introduction/"
              className="underline"
            >
              getting started
            </a>{" "}
            guide to start creating amazing 3D websites with just 40 lines of
            code!
          </p>
        </div>
        {/* <DynamicComputer /> */}
        <img src="/computercrop.png" className="md:h-[30vh] mb-4 md:mb-0" />
      </div>

      <span className="">
        <div className="flex md:space-x-[3vw] mx-auto justify-center max-w-4xl my-8">
          <div className="md:w-1/2 mx-auto text-xl">
            Here are some examples of what you can build with A-Frame (visit{" "}
            <a href="https://webvr.directory/" className="underline">
              the showcase
            </a>{" "}
            to find more):
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1  mx-auto gap-8">
          <img src="/example1.jpeg" className="h-full w-auto" />
          <img src="/example2.png" className="h-full w-auto" />
          <img src="/example3.png" className="h-full w-auto" />
        </div>
      </span>
    </>
  );
};
