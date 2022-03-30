import { BuilderElementForStore } from "../../../../types";
import { Button } from "../../../atoms";
import { EditParagraph } from "./editors";

export enum ValidHtmlElements {
  Paragraph = "p",
}

export const validElementMaps: Record<ValidHtmlElements, string> = {
  [ValidHtmlElements.Paragraph]: "p",
};

export const ElementEditor = ({
  elementConfig,
}: {
  elementConfig: BuilderElementForStore;
}) => {
  const element = validElementMaps[elementConfig.tag as ValidHtmlElements];
  switch (elementConfig.tag) {
    case ValidHtmlElements.Paragraph: {
      return <EditParagraph elementConfig={elementConfig} />;
    }

    default: {
      return null;
    }
  }
};
