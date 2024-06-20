import React from "react";
import Marquee from "react-fast-marquee";
import { ShowcaseCard } from "./ShowcaseCard";

export const Showcase = () => {
  return (
    <div className="py-6 my-[4vw] -rotate-[4deg] w-[120vw] -ml-[10vw]   bg-[#4f2a0e]">
      <h1 className="text-center text-5xl md:text-6xl spicy-rice font-bold text-[#fff2de]">
        Showcase
      </h1>
      <p className="text-lg text-[#fff2de] text-center">
        Here are some amazing projects that Hack Clubbers have submitted to
        Hackaccino!
      </p>

      <Marquee className="py-5" speed={100} pauseOnHover>
        <div className="pr-6">
          <ShowcaseCard
            name="Rubiks Cube"
            user={"Sahil Dasari"}
            pfp="https://cloud-ntosqo3ic-hack-club-bot.vercel.app/0image.png"
            repoUrl={
              "https://glitch.com/edit/#!/flannel-curly-leader?path=index.html%3A70%3A32"
            }
            liveLink={"https://flannel-curly-leader.glitch.me/"}
            url="https://cloud-7jztju6hz-hack-club-bot.vercel.app/0image.png"
          />
        </div>
        <div className="pr-6">
          <ShowcaseCard
            name="Neighborhood"
            url="https://cloud-4ob6fc75r-hack-club-bot.vercel.app/0image.png"
            user={"Chaitanya Vaswani"}
            pfp="https://avatars.githubusercontent.com/u/93338022?v=4"
            repoUrl={
              "https://github.com/chaitanya44444/3d-website-with-environment"
            }
            liveLink={
              "https://chaitanya44444.github.io/3d-website-with-environment/"
            }
          />
        </div>
        <div className="pr-6">
          <ShowcaseCard
            name="Personal Site"
            url="https://cloud-lkzrw62ym-hack-club-bot.vercel.app/0image.png"
            user={"Shaurya Bisht"}
            pfp="https://avatars.githubusercontent.com/u/87233614?v=4"
            repoUrl={"https://github.com/ssbdragonfly/3DPersonalPortfolio"}
            liveLink={"https://3-d-personal-portfolio.vercel.app/"}
          />
        </div>
        <div className="pr-6">
          <ShowcaseCard
            name="Map Frame"
            url="https://cloud-8sf2g708g-hack-club-bot.vercel.app/0image.png"
            user={"Geomad Paolo Gonzales Galang"}
            pfp="https://avatars.githubusercontent.com/u/96276085?v=4"
            repoUrl={"https://github.com/GGGalang/mapframe"}
            liveLink={"https://mapframe.vercel.app/"}
          />
        </div>
        <div className="pr-6">
          <ShowcaseCard
            name="You Spin Me Round"
            url="https://cloud-nuv7sqo5i-hack-club-bot.vercel.app/0image.png"
            user={"Cosmin Mare"}
            pfp="https://cloud-grge2ni0h-hack-club-bot.vercel.app/0image.png"
            repoUrl={"https://github.com/Cosmin-Mare/personal-website"}
            liveLink={
              "https://you-spin-me-right-round-baby-right-round.vercel.app/"
            }
          />
        </div>
        <div className="pr-6">
          <ShowcaseCard
            name="Dream Office"
            url="https://cloud-iyni2ne56-hack-club-bot.vercel.app/0image.png"
            user={"Swarit Choudhari"}
            pfp="https://avatars.githubusercontent.com/u/68472469?v=4"
            repoUrl={"https://github.com/SwiftyProgrammer690/3D-Bio"}
            liveLink={"https://swarits-room.vercel.app/"}
          />
        </div>
      </Marquee>
    </div>
  );
};
