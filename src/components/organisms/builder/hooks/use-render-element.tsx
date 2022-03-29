import { createElement, ReactElement, ReactNode } from "react";
import { Button, Col, Row } from "../../../atoms";
import { BuilderElement } from "../../../../types";
import {
  ColumnWrapper,
  ElementWrapper,
  SectionWrapper,
} from "../../../molecules/builder/wrappers";
import { AddRow, AddElement } from "../../../molecules";

const elementsMap: Record<string, any> = {
  __root__: "div",
  __section__: Row,
  __column__: Col,
  button: Button,
  p: "p",
};

const validElements = Object.keys(elementsMap) ?? [];

const renderElement: any = (config: BuilderElement) =>
  createElement(
    elementsMap[config.tag],
    {
      id: config.id,
      key: config.id,
      className: config.class ?? null,
    },
    config.children &&
      (typeof config.children === "string"
        ? config.children
        : config.children.map((c) => useRenderElement(c)))
  );

export const useRenderElement: any = (config: BuilderElement) => {
  if (validElements.includes(config.tag)) {
    switch (config.tag) {
      case "__section__": {
        return (
          <SectionWrapper>
            {config.children?.length ? (
              renderElement(config)
            ) : (
              <AddRow activeElementId={config.id} />
            )}
          </SectionWrapper>
        );
      }

      case "__column__": {
        return (
          <ColumnWrapper>
            {config.children?.length ? (
              renderElement(config)
            ) : (
              <AddElement activeElementId={config.id} />
            )}
          </ColumnWrapper>
        );
      }

      case "__root__": {
        return (
          <div>{config.children?.length ? renderElement(config) : "empty"}</div>
        );
      }

      default: {
        return (
          <ElementWrapper>
            {config.children?.length ? renderElement(config) : "empty"}
          </ElementWrapper>
        );
      }
    }
  }

  return null;
};
