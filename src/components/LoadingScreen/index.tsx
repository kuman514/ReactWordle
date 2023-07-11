import React from 'react';
import styled from 'styled-components';

import Skeleton from '^/components/Skeleton';

const Root = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .Lines {
    row-gap: 6px;
  }

  & .Line {
    column-gap: 6px;
  }

  & .TouchInput {
    display: flex;
  }
`;

function LoadingScreen() {
  return (
    <Root>
      <div className="Lines">
        <div className="Line">
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="Line">
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="Line">
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="Line">
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="Line">
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="Line">
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
          <Skeleton width="100%" height="100%" />
        </div>
      </div>
      <div className="TouchInput">
        <Skeleton width="100%" height="100%" />
      </div>
    </Root>
  );
}

export default LoadingScreen;
