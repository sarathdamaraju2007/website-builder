import { FC } from "react";
import styled from "styled-components";

// Just to say that i am familiar with styled components
const PanelContainer = styled.div`
  border: 2px solid #f2f7fa;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  padding: 15px 10px;
  margin-left: 5px;
  margin-right: 5px;
  width: calc(50% - 10px);
  min-width: calc(50% - 10px);
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    background-color: #f2f7fa;
    border-color: #e0ecf3;
    -webkit-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    transform: rotate(5deg);
  }
`;

export const Panel: FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  return <PanelContainer onClick={onClick}>{children}</PanelContainer>;
};
