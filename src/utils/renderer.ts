import { createElement, useMemo } from "react";
import { Button } from "../components/atoms";
import { BuilderElement } from "../types";

const getComponentByKey: Record<string, any> = {
  button: Button,
};

export const renderElement: any = (config: BuilderElement) => {
  const validElements = useMemo(() => Object.keys(getComponentByKey), []);

  if (validElements.includes(config.tag)) {
    return createElement(
      getComponentByKey[config.tag],
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
  }

  return null;
};
