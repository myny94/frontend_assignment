import * as React from "react";

import styled from "styled-components";
import { HeadingTwo, Paragraph } from "../../components/Typography";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 120px 1fr 1fr;
  text-align: left;
  gap: 16px;

  color: #191919;
  font-weight: 500;
  letter-spacing: 0.65px;
  font-family: "Montserrat";
`;

const SkillName = styled.div`
  padding: 8px;
`;

function elementBackgroundColor(element: string): string {
    switch (element) {
        case 'Plasma': return '#42e5d9';
        case 'Physical': return '#f5a84e';
        case 'Fire': return '#c42357';
        case 'Psychic': return '#672998';
        default: return '#000000';
    }
}

function elementTextColor(element: string): string {
    switch (element) {
        case 'Plasma': return '#000000';
        case 'Physical': return '#000000';
        case 'Fire': return '#ffffff';
        case 'Psychic': return '#ffffff';
        default: return '#ffffff';
    }
}

const SkillElement = styled.div<{element: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => elementTextColor(props.element)};
  background-color: ${props => elementBackgroundColor(props.element)};
  border-radius: 9999px;
  padding: 8px;
  text-align: center;
`;

const SkillDamage = styled.div`
  padding: 8px;
`;

interface ISkillProps {
  name: string;
  element: string;
  damage: number;
}

export const Skill: React.FC<ISkillProps> = ({ name, element, damage }) => (
  <Container>
    <SkillElement element={element}>{element}</SkillElement>
    <SkillName>{name}</SkillName>
    <SkillDamage>{damage}</SkillDamage>
  </Container>
);
