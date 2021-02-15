import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 10px;
  margin: 50;
`;

const Filler = styled.div<{ completed: number, color: string }>`
  height: 100%;
  width: ${props => props.completed}%;
  background-color: ${props => props.color};
  border-radius: inherit;
  text-align: right;
`;

interface IProgressBarProps {
  color: string;
  completed: number;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ color, completed }) => {
    return (
      <ProgressBarContainer>
        <Filler completed={completed} color={color}></Filler>
      </ProgressBarContainer>
    )
  }