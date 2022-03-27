import { FC, useState } from "react";
import ReactTooltip from "react-tooltip";

export const SectionWrapper: FC = ({ children }) => {
  const [active, setActive] = useState(false);
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
      <span
        className="add-new-section"
        data-tip
        data-for="addSection"
        title="Add New Section"
      >
        <i className="fa fa-plus"></i>
      </span>
      <ReactTooltip id="addSection">
        <span>Add new section</span>
      </ReactTooltip>
      {children}
    </div>
  );
};
