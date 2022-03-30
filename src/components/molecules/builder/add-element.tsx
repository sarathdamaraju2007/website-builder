import { useDispatch } from "react-redux";
import { Button } from "../../atoms";
import { ModalType, toggleView } from "../../../slice/modals";
import { setActiveElement } from "../../../slice/active-element";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 4px;
  background: #ff740266;
  border: 2px solid #ff7402bd;
  text-align: center;
  padding: 8px;
  -webkit-transition: all 0.2s ease-in-out 0s;
  -o-transition: all 0.2s ease-in-out 0s;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
`;
export const AddElement = ({
  activeElementId,
}: {
  activeElementId: string;
}) => {
  const dispatch = useDispatch();

  const handleElementAdd = () => {
    dispatch(
      toggleView({
        modalType: ModalType.ElementsAddModal,
        visibility: true,
      })
    );

    dispatch(
      setActiveElement({
        activeElementId,
      })
    );
  };

  return (
    <section className="hl_page-creator--section">
      <Wrapper>
        <Button type="light" size="small" onClick={handleElementAdd}>
          Add Elements
        </Button>
      </Wrapper>
    </section>
  );
};
