import React from "react";

type Props = {};

const Button = (props: Props) => {
  return (
    <div>
      {" "}
      <button className=" font-semibold text-base py-[8px] px-[12px] lg:px-[24px] lg:py-[16px] w-full  rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.24),_0px_0px_0px_1px_#00AAF7]  bg-[#00AAF7] bg-gradient-to-b from-white/[0.2] to-[#0079AF33]/[0.2]   text-white">
        Continue
      </button>
    </div>
  );
};

export default Button;
