import styled from 'styled-components';
import { withWindowSize } from 'react-fns';

export const FullSizeBackground = withWindowSize(
  styled.div`
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
    background-color: ${props => props.backgroundColor};
    box-sizing: border-box;
    display: block;
    overflow: auto;
  `
);
