import React from 'react';
import styled, { CSSObject } from 'styled-components';

interface RootProps {
  width?: CSSObject['width'];
  height?: CSSObject['height'];
  borderRadius?: CSSObject['borderRadius'];
}

const Root = styled.div<RootProps>`
  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    50%,
    100% {
      transform: translateX(100%);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #e2e2e2, #b6b6b6, #e2e2e2);
    animation: loading 1000ms ease-in-out infinite;
  }

  overflow: hidden;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: #e2e2e2;
`;

type Props = RootProps;

function Skeleton({ width, height, borderRadius }: Props) {
  return <Root width={width} height={height} borderRadius={borderRadius} />;
}

export default Skeleton;
