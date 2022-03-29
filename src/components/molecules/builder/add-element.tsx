import { useDispatch } from "react-redux";
import { Button } from "../../atoms";
import { ModalType, toggleView } from "../../../slice/modals";
import { setActiveElement } from "../../../slice/active-element";

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
      <div className="new-row-blank">
        <Button type="light" size="small" onClick={handleElementAdd}>
          Add Elements
        </Button>
      </div>
    </section>
  );
};
