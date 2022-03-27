import { FC } from "react";

export const Row: FC = ({ children }) => {
  return (
    <div className="container">
      <div className="row">{children}</div>
    </div>
  );
};
