import { useDispatch } from "react-redux";
import { Button } from "../../atoms";
import { ModalType, toggleView } from "../../../slice/modals";
import { setActiveElement } from "../../../slice/active-element";

export const AddRow = ({ activeElementId }: { activeElementId: string }) => {
  const dispatch = useDispatch();

  const handleRowAdd = () => {
    dispatch(
      toggleView({
        modalType: ModalType.ColumnAddModal,
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
        <Button type="light" size="small" onClick={handleRowAdd}>
          Add Columns
        </Button>
      </div>
    </section>
  );
};
