export interface BuilderElement {
  tag: string;
  id: string;
  class?: string;
  styles?: string;
  children?: BuilderElement[] | string;
  createdAt: number;
}

export interface BuilderElementForStore
  extends Omit<BuilderElement, "children"> {
  children: BuilderElementForStore[] | string;
  parentId: string;
}
