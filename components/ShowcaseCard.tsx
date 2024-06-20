import React from "react";
import { Parallax } from "react-next-parallax";

export const ShowcaseCard = ({ url, name, user, pfp, repoUrl, liveLink }) => {
  return (
    <Parallax>
      <a href={liveLink} target="_blank">
        <div
          className="border-4 border-[#fff2de]  rounded-lg w-96 h-52 bg-center bg-cover relative"
          style={{ backgroundImage: `url(${url})` }}
        >
          <div className="absolute bottom-5 left-5" data-parallax-offset="15">
            <h1 className="spicy-rice text-4xl subtitle_explanation">{name}</h1>
            <div className="flex space-x-3 items-center mt-2">
              <img
                src={pfp}
                className="rounded-full h-8 w-8 border border-[#fff2de] "
              />
              <p className="mix-blend-difference text-lg	text-[#fff2de]">
                {user}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Parallax>
  );
};
