import { useDispatch } from "react-redux";
import { editElement } from "../../../../../slice";
import { BuilderElementForStore } from "../../../../../types";

export const EditButton = ({
  elementConfig,
}: {
  elementConfig: BuilderElementForStore;
}) => {
  const dispatch = useDispatch();

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch(
      editElement({
        ...elementConfig,
        children: event.target.value,
      })
    );
  };

  return (
    <>
      <div className="form-group">
        <label>Enter Button Text</label>
        <input
          type="text"
          className="form-control"
          id={elementConfig.id}
          aria-describedby="edit button"
          placeholder={"enter new button text"}
          defaultValue={elementConfig.children as string}
          onBlur={blurHandler}
        />
      </div>
    </>
  );
};
