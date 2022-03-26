import { FC, useMemo } from "react";

export type ButtonElementProps = {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  size?: "large" | "small";
  icon?: JSX.Element;
};

export const Button: FC<ButtonElementProps> = ({
  children,
  size,
  type = "primary",
  icon,
}) => {
  const className = useMemo(
    () => `btn btn-${type} ${size ? `btn-${size}` : ""}`,
    [type, size]
  );

  return (
    <button className={className}>
      {icon}
      <span>{children}</span>
    </button>
  );
};
