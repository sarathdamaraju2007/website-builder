import { useDispatch } from "react-redux";
import { addElement } from "../../../slice";
import { Button } from "../../atoms";
import { v4 as uuid } from "uuid";

export const EmptyBuilder = () => {
  const dispatch = useDispatch();

  const handleRowAdd = () => {
    dispatch(
      addElement({
        parentId: "__parent__",
        tag: "button",
        id: uuid(),
        children: "hello",
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
