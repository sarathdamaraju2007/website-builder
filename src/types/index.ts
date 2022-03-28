export interface BuilderElement {
  tag: string;
  id: string;
  class?: string;
  styles?: string;
  children?: BuilderElement[] | string;
}

export interface BuilderElementForStore
  extends Omit<BuilderElement, "children"> {
  children: BuilderElementForStore[];
  parentId: string;
}
