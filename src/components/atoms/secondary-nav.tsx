import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #ddeefe;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 64px;
  margin-bottom: 2px;
`;

export const SecondaryNav: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
