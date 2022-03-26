import { createElement } from "react";
import { BuilderElement } from "../types";

export const renderElement: any = (config: BuilderElement) => {
  return createElement(
    config.tag,
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
};
