import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../slice";
import { ModalType, toggleView } from "../../slice/modals";
import { RootState } from "../../store";
import { Panel } from "../atoms";
import { BuilderSlider } from "../molecules/builder";
import { Builder } from "../organisms";
import { columnsConfig } from "../organisms/builder/config/columns";
import styled from "styled-components";
import { v4 } from "uuid";

const Container = styled.div`
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const BuilderPage = () => {
  const dispatch = useDispatch();

  const showColumnAddModal = useSelector(
    (state: RootState) => state.modalReducer.showColumnAddModal
  );

  const activeElement = useSelector((state: RootState) => state.activeElement);

  const handleModalClose = () => {
    dispatch(
      toggleView({
        modalType: ModalType.ColumnAddModal,
        visibility: false,
      })
    );
  };

  const handleColumnAdd = (count: number = 1) => {
    for (let i = 1; i <= count; i++) {
      dispatch(
        addElement({
          parentId: activeElement,
          id: v4(),
          tag: "__column__",
        })
      );
    }
  };

  return (
    <>
      <Builder />
      <BuilderSlider
        visible={showColumnAddModal}
        onClose={handleModalClose}
        key="columns"
      >
        <Container>
          {columnsConfig.map((column) => (
            <Panel onClick={() => handleColumnAdd(column.columnCount)}>
              {column.iconClass && (
                <span className="icon">
                  <i className={column.iconClass}></i>
                </span>
              )}
              <p>{column.columnCount}</p>
            </Panel>
          ))}
        </Container>
      </BuilderSlider>
    </>
  );
};
