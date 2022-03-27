import { createElement, ReactElement, ReactNode } from "react";
import { Button, Row } from "../../../atoms";
import { BuilderElement } from "../../../../types";
import { SectionWrapper } from "../../../molecules/builder/wrappers";

const elementsMap: Record<string, any> = {
  __root__: "div",
  __section__: Row,
  __column__: "section",
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
        : config.children.map((c) => renderElement(c)))
  );

export const useRenderElement: any = (config: BuilderElement) => {
  if (validElements.includes(config.tag)) {
    switch (config.tag) {
      case "__section__": {
        return <SectionWrapper>{renderElement(config)}</SectionWrapper>;
      }

      default: {
        return <SectionWrapper>{renderElement(config)}</SectionWrapper>;
      }
    }
  }

  return null;
};
