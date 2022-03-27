import { useDispatch } from "react-redux";
import { Button } from "../../atoms";
import { ModalType, toggleView } from "../../../slice/modals";

export const AddRow = () => {
  const dispatch = useDispatch();

  const handleRowAdd = () => {
    dispatch(
      toggleView({
        modalType: ModalType.ColumnAddModal,
        visibility: true,
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
