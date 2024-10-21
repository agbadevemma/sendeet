import Elements from "@/icons/elements";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4"><div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
          <Elements color="black" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">Dashboard</p>
          <p className="text-sm text-grey-500">Welcome back, Testing Company</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default page;
