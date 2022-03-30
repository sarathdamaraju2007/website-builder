import { FC } from "react";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import { v4 } from "uuid";
import { addElement, deleteElement } from "../../../../slice";
import { Button } from "../../../atoms";
import {
  ActionMenu,
  ActionsContainer,
  ActionsMenu,
  WrapperContainer,
} from "./common";

const AddButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #37ca37;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: -15px;
  z-index: 2;
`;
export const SectionWrapper: FC<{ id: string }> = ({ id, children }) => {
  const dispatch = useDispatch();

  const handleSectionAdd = () => {
    dispatch(
      addElement({
        parentId: "__root__",
        id: v4(),
        tag: "__section__",
        children: [],
        createdAt: new Date().getTime(),
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteElement({
        id,
      })
    );
  };

  return (
    <WrapperContainer key={id} hoverBorder="#37ca37">
      <ActionsContainer>
        <ActionsMenu backgroundColor="#37ca37" key={`actions-for-${id}`}>
          <div className="more-actions">
            <ActionMenu key={`edit-${id}`}>
              <i className="fa fa-cog"></i>
            </ActionMenu>
            <ActionMenu onClick={handleDelete} key={`delete-${id}`}>
              <i className="fa fa-trash-alt"></i>
            </ActionMenu>
          </div>
        </ActionsMenu>
        <AddButtonContainer>
          <Button size="slim" onClick={handleSectionAdd} type="info">
            <i
              className="fa fa-plus"
              aria-hidden="true"
              data-for={`addSection-tooltip-${id}`}
              data-tip
            ></i>
          </Button>
        </AddButtonContainer>
      </ActionsContainer>

      {children}

      <ReactTooltip id={`addSection-tooltip-${id}`}>
        <span>Add section</span>
      </ReactTooltip>
    </WrapperContainer>
  );
};
