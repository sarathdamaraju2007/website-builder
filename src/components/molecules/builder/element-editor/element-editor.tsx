import { BuilderElementForStore } from "../../../../types";
import { Button } from "../../../atoms";
import { EditButton, EditParagraph } from "./editors";
import { EditImage } from "./editors/image";

export enum ValidHtmlElements {
  Paragraph = "p",
  Button = "button",
  Image = "img",
}

export const validElementMaps: Record<ValidHtmlElements, any> = {
  [ValidHtmlElements.Paragraph]: "p",
  [ValidHtmlElements.Button]: Button,
  [ValidHtmlElements.Image]: "img",
};

export const ElementEditor = ({
  elementConfig,
}: {
  elementConfig: BuilderElementForStore;
}) => {
  switch (elementConfig.tag) {
    case ValidHtmlElements.Paragraph: {
      return <EditParagraph elementConfig={elementConfig} />;
    }

    case ValidHtmlElements.Button: {
      return <EditButton elementConfig={elementConfig} />;
    }

    case ValidHtmlElements.Image: {
      return <EditImage elementConfig={elementConfig} />;
    }

    default: {
      return null;
    }
  }
};
