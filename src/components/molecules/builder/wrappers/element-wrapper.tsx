import { FC } from "react";
import styled from "styled-components";

const ActionsContainer = styled.div`
  opacity: 0;
`;

const WrapperContainer = styled.div`
  border: 2px solid transparent;
  position: relative;
  transition: all 0.2s ease-in-out 0s;
  padding: 4px 0px;

  &:hover {
    border-color: #ff7402;
    ${ActionsContainer} {
      opacity: 1;
    }
  }
`;

const ActionsMenu = styled.div`
  display: flex;
  position: absolute;
  top: -25px;
  right: -2px;
  z-index: 2;
  background-color: #ff7402;
`;

const ActionMenu = styled.span`
  margin: 0px 4px;
  color: #fff;
`;

export const ElementWrapper: FC = ({ children }) => {
  return (
    <WrapperContainer>
      <ActionsContainer>
        <ActionsMenu>
          <div className="more-actions">
            <ActionMenu>
              <i className="fa fa-cog"></i>
            </ActionMenu>
            <ActionMenu>
              <i className="fa fa-eye"></i>
            </ActionMenu>
            <ActionMenu>
              <i className="fa fa-copy"></i>
            </ActionMenu>
            <ActionMenu>
              <i className="fa fa-trash-alt"></i>
            </ActionMenu>
          </div>
        </ActionsMenu>
      </ActionsContainer>
      {children}
    </WrapperContainer>
  );
};
