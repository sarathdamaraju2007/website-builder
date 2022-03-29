import { useDispatch } from "react-redux";
import { Button } from "../../atoms";
import { addElement } from "../../../slice";
import { v4 } from "uuid";

export const AddSection = () => {
  const dispatch = useDispatch();

  const handleSectionAdd = () => {
    dispatch(
      addElement({
        parentId: "__root__",
        id: v4(),
        tag: "__section__",
        children: [],
      })
    );
  };

  return (
    <section
      style={{
        width: "100%",
        padding: "32px 16px",
        textAlign: "center",
        border: "1px dashed #7e6b8f",
      }}
    >
      <div className="new-row-blank">
        <Button type="light" size="large" onClick={handleSectionAdd}>
          Add New Section
        </Button>
      </div>
    </section>
  );
};
