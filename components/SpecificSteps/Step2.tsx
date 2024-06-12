export const Step2 = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 mx-auto justify-center max-w-4xl">
        <div className="space-y-4">
          <div className="space-x-5 flex items-center">
            <div className="w-10 h-10 bg-[#4f2a0e] rounded-full flex justify-center items-center text-[#fff0d8] spicy-rice text-2xl">
              2
            </div>
            <span className="text-3xl spicy-rice text-[#4f2a0e]">
              Submit your site
            </span>
          </div>
          <p className="text-xl">
            You'll need to have a url where we can see your code, whether it be{" "}
            <a href="https://github.com" className="underline">
              GitHub
            </a>{" "}
            or something like{" "}
            <a href="https://replit.com" className="underline">
              ReplIt
            </a>
            and a live url where we can see it! You can do this using{" "}
            <a href="https://vercel.com" className="underline">
              Vercel
            </a>{" "}
            or{" "}
            <a href="https://pages.github.com/" className="underline">
              GitHub Pages
            </a>
            .
          </p>
        </div>
        {/* <DynamicComputer /> */}
        <div>
          <img
            src="/liveurl.png"
            className="mx-auto border-2 shadow-lg hover:shadow-2xl transition border-[#4f2a0e] rounded-lg"
          />
          <p className="text-gray-400 text-sm mt-2 text-center italic">
            You'll be submitting your code and live link!
          </p>
        </div>
      </div>
    </>
  );
};
