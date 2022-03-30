import { useDispatch } from "react-redux";
import { editElement } from "../../../../../slice";
import { BuilderElementForStore } from "../../../../../types";

export const EditImage = ({
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
        meta: {
          src: event.target.value,
        },
      })
    );
  };

  return (
    <>
      <div className="form-group">
        <label>Enter image src</label>
        <input
          type="text"
          className="form-control"
          id={elementConfig.id}
          aria-describedby="edit image src"
          placeholder={"enter new image url"}
          defaultValue={elementConfig.children as string}
          onBlur={blurHandler}
        />
      </div>
    </>
  );
};
