import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1``;

function ErrorScreen() {
  return (
    <Root>
      <Title>
        Error occured. Please refresh the app.
      </Title>
    </Root>
  );
}

export default ErrorScreen;
