import { styled, keyframes } from "styled-components";

// Define the bouncing animation with keyframes
const bouncingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Create the BouncingLoader container with flex properties
const BouncingLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Create individual bouncing dots as styled-components
const BouncingDot = styled.div`
  width: 16px;
  height: 16px;
  margin: 3px 6px;
  border-radius: 50%;
  background-color: #a3a1a1;
  opacity: 1;
  animation: ${bouncingAnimation} 0.6s infinite alternate;
`;

export { BouncingLoaderContainer, BouncingDot };
