import styled from "styled-components";

interface IExpansionPanelProps {
  expanded: boolean;
}

export const ExpansionPanel = styled.div<IExpansionPanelProps>`
  transition: ${({ expanded }) =>
    expanded ? "max-height 0.35s ease-in" : "max-height 0.25s ease-out"};
  max-height: ${({ expanded }) => (expanded ? "9999px" : "0px")};
  overflow: ${({ expanded }) => (expanded ? "visible" : "hidden")};
`;
