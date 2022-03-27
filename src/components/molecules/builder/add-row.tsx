import { useDispatch } from "react-redux";
import { Button } from "../../atoms";
import { ModalType, toggleView } from "../../../slice/modals";

export const EmptyBuilder = () => {
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
      <span
        className="add-new-section"
        data-tooltip="tooltip"
        data-placement="bottom"
        title="Add New Section"
      >
        <i className="icon icon-plus"></i>
      </span>
      <div className="new-row-blank">
        <Button type="light" size="small" onClick={handleRowAdd}>
          Add New Row
        </Button>
      </div>
    </section>
  );
};
