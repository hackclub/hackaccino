import { Howl, Howler } from "howler";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";

import { useState } from "react";

export const IdeaGenerator = () => {
  const [hold, setHold] = useState(false);
  const [drinkReady, setDrinkReady] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);

  const [recommendation, setRecommendation] = useState("");
  const sound = new Howl({ src: ["/pour_coffee.mp3"] });
  const spresso = new Howl({ src: ["/sweetlikespresso.mp3"] });

  return (
    <div>
      {/* <button
        onClick={() => {
          setHold(!hold);
        }}
        className={`${
          hold ? "translate-x-1 translate-y-1 shadow-sm" : ""
        } text-[#fff2de] spicy-rice rounded-lg w-[20vw] h-[5vw] text-[2vw] bg-[#4f2a0e] active:translate-x-1 active:translate-y-1 active:shadow-sm shadow-2xl transition`}
      >
        <span className="mr-4">☕️</span>
        {"Brew Idea"}
      </button> */}

      <div className="flex flex-col items-center">
        <p className={`text-lg w-auto max-w-sm ${drinkReady ? "" : "hidden"}`}>
          {recommendation}
        </p>
        <button
          onClick={() => {
            if (drinkReady) {
              setDrinkReady(false);
              setRecommendation("");
              return;
            }
            setHold(true);
            sound.play();

            fetch("/api/openai")
              .then((res) => res.json())
              .then((data) => {
                setTimeout(() => {
                  console.log(data);
                  setHold(false);
                  sound.pause();
                  setRecommendation(data.recommendation);
                  setDrinkReady(true);
                }, 2000);
              });
          }}
          disabled={hold}
          className="flex flex-col items-center"
        >
          <img
            src={
              drinkReady
                ? "/espresso.png"
                : hold
                ? "/pulling_shot.png"
                : "/idle_machine.png"
            }
            className="transition hover:scale-110"
          />
        </button>
        {/* {drinkReady && (
          <div className="flex space-x-3 mt-3">
            <button
              onClick={() => {
                if (!spresso.playing()) {
                  spresso.play();
                }
                setDrinkReady(false);
                setTimeout(() => {
                  setEasterEgg(true);
                }, 300);
              }}
              className=" text-[#FFF2DE] transition duration-750 hover:scale-110 get-free-frap text-lg flex items-center spicy-rice rounded-full px-4 py-1 ring-4 ring-red-800  bg-red-700 "
            >
              Throw away (don't click!)
            </button>
          </div>
        )} */}

        {easterEgg && (
          <div
            className="fixed w-screen h-screen bg-black bg-opacity-80 top-0 left-0 flex justify-center items-center"
            onClick={() => {
              setEasterEgg(false);
              spresso.unload();
            }}
          >
            <img
              onClick={() => {
                setEasterEgg(false);
                spresso.unload();
              }}
              src="https://cloud-mpvs8batk-hack-club-bot.vercel.app/02x-speed-ezgif.com-gif-maker.gif"
            />
          </div>
        )}
      </div>
    </div>
  );
};
