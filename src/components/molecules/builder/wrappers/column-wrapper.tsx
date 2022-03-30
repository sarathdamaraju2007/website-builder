import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteElement } from "../../../../slice";
import {
  ActionMenu,
  ActionsContainer,
  ActionsMenu,
  WrapperContainer,
} from "./common";

export const ColumnWrapper: FC<{ id: string }> = ({ id, children }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteElement({
        id,
      })
    );
  };
  return (
    <WrapperContainer className="hl_page-creator--column" hoverBorder="#188bf6">
      <ActionsContainer>
        <ActionsMenu backgroundColor="#188bf6" key={`actions-for-${id}`}>
          <div className="more-actions">
            <ActionMenu key={`edit-${id}`}>
              <i className="fa fa-cog"></i>
            </ActionMenu>
            <ActionMenu onClick={handleDelete} key={`delete-${id}`}>
              <i className="fa fa-trash-alt"></i>
            </ActionMenu>
          </div>
        </ActionsMenu>
      </ActionsContainer>
      {children}
    </WrapperContainer>
  );
};
