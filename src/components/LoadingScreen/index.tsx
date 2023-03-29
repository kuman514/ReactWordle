import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1``;

function LoadingScreen() {
  return (
    <Root>
      <Title>
        Loading
      </Title>
    </Root>
  );
}

export default LoadingScreen;
