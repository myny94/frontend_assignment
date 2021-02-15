// It is your job to implement this. More info in README

import * as React from "react";
import { Attribute } from "src/server/entities/attribute";
import styled from "styled-components";
import { ProgressBar } from "../ProgressBar";
import { Skill } from "../Skill";
import { HeadingTwo, HeadingThree, Paragraph } from "../Typography";

const HeroLogo = styled.img`
  width: 100%;
`;

const HeroContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  flex: 1;
  min-width: 250px;
`;

const AttributeRow = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  height: 34px;
  text-align: left;
`;

const AttributeLabel = styled.span`
  color: #191919;
  font-weight: 500;
  letter-spacing: 0.65px;
  font-family: "Montserrat";
`;

const SkillsContainer = styled.div`
  display: grid;
  & > * {
    margin-bottom: 16px;
  }
  & > *:last-child {
    margin-bottom: 0px;
  }
`

const HealthManaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const HealthMana = styled.div`
  padding: 0 16px;
`;

const HealthManaLabel = styled.div`
  font-family: Montserrat;
`;

const HealthManaValue = styled.div`
  font-family: Montserrat;
  font-size: 32px;
  font-weight: bold;
`;

interface IHeroCardProps {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  attributes: {
    strength: number;
    intelligence: number;
    stamina: number;
    healthpoints: number;
    mana: number;
    agility: number;
    speed: number;
    resistance: string;
    weakness: string;
  };
  skills: {
    name: string;
    element: string;
    damage: number;
  }[];
  // extend this
}

const showAttributes = [
  { label: "Agility", key: "agility", progress: true },
  { label: "Stamina", key: "stamina", progress: true },
  { label: "Strength", key: "strength", progress: true },
  { label: "Intelligence", key: "intelligence", progress: true },
  { label: "Speed", key: "speed", progress: true },
  { label: "Resistance", key: "resistance", progress: false },
  { label: "Weakness", key: "weakness", progress: false },
];

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  description,
  backStory,
  attributes,
  skills,
}) => {
  return (
    <HeroContainer>
      <HeadingTwo>{name}</HeadingTwo>
      <HeroLogo src={imgUrl} />
      <Paragraph>{description}</Paragraph>
      <HeadingThree>Story</HeadingThree>
      <Paragraph>{backStory}</Paragraph>
      <HealthManaContainer>
        <HealthMana>
          <HealthManaLabel>Health</HealthManaLabel>
          <HealthManaValue>{attributes.healthpoints}</HealthManaValue>
        </HealthMana>
        <HealthMana>
          <HealthManaLabel>Mana</HealthManaLabel>
          <HealthManaValue>{attributes.mana}</HealthManaValue>
        </HealthMana>
      </HealthManaContainer>

      <div>
        {showAttributes.map(({ label, key, progress }) => (
          <AttributeRow>
            <AttributeLabel>{label}</AttributeLabel>
            {progress ? (
              <ProgressBar completed={attributes[key]} color="#807c7c" />
            ) : (
              <AttributeLabel>{attributes[key]}</AttributeLabel>
            )}
          </AttributeRow>
        ))}
      </div>

      <HeadingThree>Skills</HeadingThree>

      <SkillsContainer>
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            element={skill.element}
            damage={skill.damage}
          />
        ))}
      </SkillsContainer>
    </HeroContainer>
  );
};
