import React from 'react';
import styled from 'styled-components';

export const NextButton = styled.button`
  background-color: #b6874e;
  color: #fff;
  border-radius: 10px;
  padding: 15px 10px;
  font-size: 0.7em;
  box-shadow: -1px 6px 0px -4px rgba(0, 0, 0, 0.25);
  border: 1px solid #61784a;
  outline: none;
  margin-top: 50px;
`;

export const Input = styled.input`
  text-align: center;
  margin-bottom: ${props => (props.last ? 0 : '10px')};
  padding: 15px 10px;
  border-radius: 10px;
  color: #61784a;
  font-size: 0.7em;
  box-shadow: -1px 6px 0px -4px rgba(0, 0, 0, 0.25);
  border: 1px solid #61784a;
  outline: none;
`;

export const Heading = styled.h2`
  color: #c9c3ba;
  font-family: sans-serif;
  text-align: center;
`;
