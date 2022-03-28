import { FC } from "react";

export const Row: FC = ({ children }) => {
  return (
    <div className="container">
      <div className="row">{children}</div>
    </div>
  );
};

export const Col: FC = ({ children }) => {
  return <div className="hl_page-creator--column">{children}</div>;
};
