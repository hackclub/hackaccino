"use client";

import { Step1 } from "./SpecificSteps/Step1";
import { Step2 } from "./SpecificSteps/Step2";
import { Step3 } from "./SpecificSteps/Step3";

export const Steps = () => {
  return (
    <div>
      <h1 className="text-center text-6xl spicy-rice font-bold text-[#4f2a0e]">
        Steps
      </h1>

      <div className="space-y-16 mt-12">
        <Step1 />
        <Step2 />
        <Step3 />
      </div>
    </div>
  );
};
