import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { BuilderElementForStore } from "../../../types";
import { AddSection } from "../../molecules/builder";
import { useRenderElement } from "./hooks";

const getTreeFromList = (data: BuilderElementForStore[]) => {
  let list = data.slice(1);
  let map: Record<string, any> = {},
    node;

  for (let i = 0; i < list.length; i += 1) {
    map[list[i].id] = i;
  }

  for (let j = 0; j < list.length; j += 1) {
    node = list[j];
    if (list[j].parentId !== "__root__") {
      const { children, ...rest } = list[map[list[j].parentId]];
      list[map[list[j].parentId]] = {
        ...rest,
        children: [...children, list[j]],
      };
    }
  }
  return list;
};

export const Builder = () => {
  const builderConfig = useSelector((state: RootState) => state.builderConfig);

  const parse = useCallback(getTreeFromList, []);
  const roots = parse(Object.values(builderConfig)).filter(
    (el) => el.parentId === "__root__"
  );

  if (roots.length) {
    return (
      <>
        {useRenderElement({
          tag: "__root__",
          id: "__root__",
          children: roots,
        })}
      </>
    );
  }

  return <AddSection />;
};
