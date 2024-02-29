import React, { FC } from "react";
import Lottie from "lottie-react";
import loading from "../../assets/lotties/spinner2.json";

const LoadingCustom: FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[70vh]">
      <Lottie
        autoPlay={true}
        loop={true}
        animationData={loading}
        className="w-36"
      />
    </div>
  );
};

export default LoadingCustom;
