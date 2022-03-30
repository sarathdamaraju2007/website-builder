import { BuilderElement } from "../../../../types";

export const elementsConfig: Omit<BuilderElement, "createdAt">[] = [
  {
    id: "p",
    tag: "p",
    children: "This is a praragraph",
    meta: {},
  },
  {
    id: "button",
    tag: "button",
    children: "this is a button",
    meta: {},
  },
  {
    id: "img",
    tag: "img",
    children: "http://placehold.jp/150x150.png",
    meta: {
      src: "http://placehold.jp/150x150.png",
    },
  },
];
