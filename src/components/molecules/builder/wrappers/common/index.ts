import styled from "styled-components";

type ActionsMenuProps = {
  backgroundColor?: string;
};

export const ActionsMenu = styled.div<ActionsMenuProps>`
  display: flex;
  position: absolute;
  top: 0;
  right: -2px;
  z-index: 2;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "inherit"};
`;

export const ActionMenu = styled.span`
  margin: 0px 4px;
  color: #fff;
`;

export const ActionsContainer = styled.div`
  opacity: 0;
`;

type WrapperContainerProps = {
  hoverBorder?: string;
};

export const WrapperContainer = styled.div<WrapperContainerProps>`
  border: 2px solid transparent;
  position: relative;
  transition: all 0.2s ease-in-out 0s;
  padding: 4px 0px;

  &:hover {
    border-color: ${({ hoverBorder }) => hoverBorder ?? "transparent"};
    ${ActionsContainer} {
      opacity: 1;
    }
  }
`;
