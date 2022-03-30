import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActiveElement } from "../../../../slice/active-element";
import { deleteElement } from "../../../../slice/builder";
import { ModalType, toggleView } from "../../../../slice/modals";
import {
  ActionMenu,
  ActionsContainer,
  ActionsMenu,
  WrapperContainer,
} from "./common";

export const ElementWrapper: FC<{ id: string }> = ({ id, children }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      toggleView({
        modalType: ModalType.ElementsManageModal,
        visibility: true,
      })
    );

    dispatch(
      setActiveElement({
        activeElementId: id,
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
    <WrapperContainer key={id} hoverBorder="#ff7402">
      <ActionsContainer>
        <ActionsMenu key={`actions-for-${id}`} backgroundColor="#ff7402">
          <div className="more-actions">
            <ActionMenu key={`edit-${id}`} onClick={handleEdit}>
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
