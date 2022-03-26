export interface BuilderElement {
  tag: string;
  id: string;
  class?: string;
  styles?: string;
  children?: BuilderElement[] | string;
}

export interface BuilderElementForStore extends BuilderElement {
  childrenKeys?: string[];
}

export interface AddElement extends BuilderElementForStore {
  parentId: string;
}
