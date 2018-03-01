import styled from 'styled-components';
import { withWindowSize } from 'react-fns';

export const PurpleBackground = withWindowSize(
  styled.div`
    height: ${props => props.height + 'px'};
    width: ${props => props.width + 'px'};
  `
);
