import { useDispatch } from "react-redux";
import { editElement } from "../../../../../slice";
import { BuilderElementForStore } from "../../../../../types";

export const EditParagraph = ({
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
    <div className="form-group">
      <label>Enter Paragraph Text</label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder={"enter paragraph"}
        defaultValue={elementConfig.children as string}
        onBlur={blurHandler}
      />
    </div>
  );
};
