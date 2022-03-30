import { BuilderElement } from "../../../../types";

export const elementsConfig: Omit<BuilderElement, "createdAt">[] = [
  {
    id: "p",
    tag: "p",
    children: "This is a praragraph",
  },
  {
    id: "button",
    tag: "button",
    children: "this is a button",
  },
];
