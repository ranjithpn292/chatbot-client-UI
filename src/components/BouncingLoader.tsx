import React from "react";
import { BouncingDot, BouncingLoaderContainer } from "./styled.components";

const BouncingLoader = () => {
  return (
    <>
      <BouncingLoaderContainer>
        <BouncingDot />
        <BouncingDot />
        <BouncingDot />
      </BouncingLoaderContainer>
    </>
  );
};

export default BouncingLoader;
