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
  size?: "large" | "small" | "slim";
  icon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export const Button: FC<ButtonElementProps> = ({
  children,
  size,
  type = "primary",
  icon,
  onClick,
}) => {
  const className = useMemo(
    () => `btn btn-${type} ${size ? `btn-${size}` : ""}`,
    [type, size]
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (onClick as React.MouseEventHandler<HTMLButtonElement>)?.(e);
  };

  return (
    <button className={className} onClick={handleClick}>
      {icon}
      <span>{children}</span>
    </button>
  );
};
