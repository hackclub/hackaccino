export const Step3 = () => {
  return (
    <>
      <div className="flex flex-col space-x-0 md:flex-row mx-auto justify-center  max-w-4xl">
        <div className="space-y-4">
          <div className="space-x-5 flex items-center">
            <div className="w-10 h-10 bg-[#4f2a0e] rounded-full flex justify-center items-center text-[#fff0d8] spicy-rice text-2xl">
              3
            </div>
            <span className="text-3xl spicy-rice text-[#4f2a0e]">
              Get a free Frappuccino
            </span>
          </div>
          <p className="text-xl">
            After submitting, you'll get a grant from{" "}
            <a href="https://hcb.hackclub.com" className="underline">
              HCB
            </a>{" "}
            to spend on a frappuccino! Enjoy whichever flavor your heart
            desires—great work on the website you built!
          </p>
        </div>
        {/* <DynamicComputer /> */}
        <div className="flex justify-center">
          <img
            src="/cropped_frap.png"
            className="mx-auto w-[30vw] my-4 md:my-0 md:w-auto hover:animate-spin"
          />
        </div>
      </div>
    </>
  );
};
