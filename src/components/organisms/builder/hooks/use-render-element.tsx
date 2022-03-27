import { createElement, ReactElement, ReactNode } from "react";
import { Button, Row } from "../../../atoms";
import { BuilderElement } from "../../../../types";
import { SectionWrapper } from "../../../molecules/builder/wrappers";
import { AddRow } from "../../../molecules";

const elementsMap: Record<string, any> = {
  __root__: "div",
  __section__: "section",
  button: Button,
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
            {config.children ? renderElement(config) : <AddRow />}
          </SectionWrapper>
        );
      }

      case "__root__":
      default: {
        return <div>{config.children ? renderElement(config) : "empty"}</div>;
      }
    }
  }

  return null;
};
