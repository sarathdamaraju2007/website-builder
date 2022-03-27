import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import ReactTooltip from "react-tooltip";
import { v4 } from "uuid";
import { addElement } from "../../../../slice";

export const SectionWrapper: FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleSectionAdd = () => {
    dispatch(
      addElement({
        parentId: "__root__",
        id: v4(),
        tag: "__section__",
      })
    );
  };

  return (
    <div
      className={`hl_page-creator--section ${active ? "active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="hl_page-creator--actions">
        <div className="move-actions">
          <span data-tooltip="tooltip" data-placement="right" title="Up">
            <i className="fa fa-arrow-up"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="right" title="Down">
            <i className="fa fa-arrow-down"></i>
          </span>
        </div>
        <div className="more-actions">
          <span data-tooltip="tooltip" data-placement="left" title="Settings">
            <i className="fa fa-cog"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="left" title="Clone">
            <i className="fa fa-eye"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="left" title="Save">
            <i className="fa fa-copy"></i>
          </span>
          <span data-tooltip="tooltip" data-placement="left" title="Delete">
            <i className="fa fa-trash-alt"></i>
          </span>
        </div>
      </div>
      <button
        className="add-new-section"
        data-tip
        data-for="addSection"
        title="Add New Section"
        onClick={handleSectionAdd}
      >
        <i className="fa fa-plus"></i>
      </button>
      <ReactTooltip id="addSection">
        <span>Add new section</span>
      </ReactTooltip>
      {children}
    </div>
  );
};
