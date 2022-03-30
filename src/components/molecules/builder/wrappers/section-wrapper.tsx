import { FC } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addElement, deleteElement } from "../../../../slice";
import {
  ActionMenu,
  ActionsContainer,
  ActionsMenu,
  WrapperContainer,
} from "./common";

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
      </ActionsContainer>
      {children}
    </WrapperContainer>
  );
};
