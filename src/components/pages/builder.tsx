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
import { elementsConfig } from "../organisms/builder/config/elements";
import { BuilderElement } from "../../types";
import { AppLayout } from "../layout/app-layout";
import { ElementEditor } from "../molecules/builder/element-editor";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
`;

export const BuilderPage = () => {
  const dispatch = useDispatch();

  const showColumnAddModal = useSelector(
    (state: RootState) => state.modalReducer.showColumnAddModal
  );

  const showElementAddModal = useSelector(
    (state: RootState) => state.modalReducer.showElementsAddModal
  );

  const showElementsManageModal = useSelector(
    (state: RootState) => state.modalReducer.showElementsManageModal
  );
  const builderConfig = useSelector((state: RootState) => state.builderConfig);

  const activeElement = useSelector((state: RootState) => state.activeElement);

  const handleModalClose = (type: ModalType) => {
    dispatch(
      toggleView({
        modalType: type,
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
          children: [],
          createdAt: new Date().getTime(),
        })
      );
    }
  };

  const handleElementAdd = (elementConfig: BuilderElement) => {
    dispatch(
      addElement({
        ...elementConfig,
        parentId: activeElement,
        id: v4(),
        tag: elementConfig.tag,
        children: elementConfig.children as any,
        createdAt: new Date().getTime(),
      })
    );
  };
  return (
    <AppLayout title="Highlevel - Builder">
      <Builder />
      <BuilderSlider
        visible={showColumnAddModal}
        onClose={() => handleModalClose(ModalType.ColumnAddModal)}
        key="columns"
      >
        <Container>
          {columnsConfig.map((column) => (
            <Panel
              key={column.id}
              onClick={() => handleColumnAdd(column.columnCount)}
            >
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
      <BuilderSlider
        visible={showElementAddModal}
        onClose={() => handleModalClose(ModalType.ElementsAddModal)}
        key="elements"
      >
        <Container>
          {elementsConfig.map((element) => (
            <Panel key={element.id} onClick={() => handleElementAdd(element)}>
              <p>{element.tag}</p>
            </Panel>
          ))}
        </Container>
      </BuilderSlider>
      <BuilderSlider
        visible={showElementsManageModal}
        onClose={() => handleModalClose(ModalType.ElementsManageModal)}
        key="elements-meta"
      >
        <Container>
          <ElementEditor elementConfig={builderConfig[activeElement]} />
        </Container>
      </BuilderSlider>
    </AppLayout>
  );
};
