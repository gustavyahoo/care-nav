import React from 'react';
import { withWindowSize } from 'react-fns';
import styled from 'styled-components';

export const PurpleBackground = withWindowSize(
  styled.div`
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
    background-color: #4b395a;
    box-sizing: border-box;
    display: block;
    overflow: auto;
  `
);

export const AppName = styled.h1`
  margin-top: 200px;
  text-align: center;
  color: #874b3f;
  font-size: 4em;
  text-transform: uppercase;
  font-family: sans-serif;
`;

const SplashScreen = props => (
  <PurpleBackground>
    <AppName>Care_Nav</AppName>
  </PurpleBackground>
);

export default SplashScreen;
