import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
`;

export const NavItem = ({
  text,
  icon,
}: {
  text: string;
  icon?: JSX.Element;
}) => {
  return <Wrapper>{icon ? icon : null}</Wrapper>;
};
