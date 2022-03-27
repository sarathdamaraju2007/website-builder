import { FC, useEffect, useState } from "react";

export type SliderPropTypes = {
  visible?: boolean;
  onClose?: () => void;
};

export const BuilderSlider: FC<SliderPropTypes> = ({
  visible = false,
  onClose,
  children,
}) => {
  const [open, setOpen] = useState(visible);

  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  return (
    <section
      className={`hl_page-creator--columns-group ${open ? "active" : ""}`}
    >
      <span
        className="close-group"
        id="close-column-group"
        onClick={handleClose}
      >
        <i className="fa fa-times"></i>
      </span>
      <div className="manage-columns">
        <h2>Manage Columns</h2>
        <div className="columns-section-group-wrap">{children}</div>
      </div>
    </section>
  );
};
