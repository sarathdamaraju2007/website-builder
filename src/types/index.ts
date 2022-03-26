export interface BuilderElement {
  tag: string;
  id: string;
  class?: string;
  styles?: string;
  children?: BuilderElement[];
}

export interface BuilderElementForStore {
  tag: string;
  id: string;
  class?: string;
  styles?: string;
  children?: string[];
}

export interface AddElement extends BuilderElementForStore {
  parentId: string;
}
