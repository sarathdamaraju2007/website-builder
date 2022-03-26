export interface BuilderElement {
  tag: string;
  id: string;
  class?: string;
  styles?: string;
  children?: string[];
}

export interface AddElement extends BuilderElement {
  parentId: string;
}
