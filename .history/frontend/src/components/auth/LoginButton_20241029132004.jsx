import Image from "next/image";
import React from "react";

const LoginButton = ({ imgURL,alt,onClick ,text}) => {
  return (
    <div className="w-full relative rounded-[40px] bg-white border-darkslategray border-[1px] border-solid box-border h-14 overflow-hidden shrink-0 text-left text-[22px]  font-times-new-roman">
<div className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_122.5px)] flex flex-row items-center justify-center gap-4">
<img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="Social media logo.svg" />
<b className="relative">Continue with Google</b>
</div>
</div>)
;
  );
};

export default LoginButton;
