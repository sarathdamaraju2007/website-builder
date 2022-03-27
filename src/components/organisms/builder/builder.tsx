import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { BuilderElement } from "../../../types";
import { useRenderElement } from "./hooks";
import { EmptyBuilder } from "../../molecules";

export const Builder = () => {
  const builderConfig = useSelector((state: RootState) => state.builderConfig);

  const constructJson: Record<string, BuilderElement> = useMemo(() => {
    return Object.keys(builderConfig).reduce((acc, key) => {
      let { childrenKeys = [], children = [], ...rest } = builderConfig[key];

      if (childrenKeys.length) {
        children = childrenKeys.map((childKey) => {
          let child = builderConfig[childKey];
          return child;
        });
      }

      return {
        ...acc,
        [key]: {
          ...rest,
          children,
        },
      };
    }, {});
  }, [builderConfig]);

  const parentElement = constructJson["__root__"];

  if (parentElement && parentElement.children?.length) {
    return useRenderElement(parentElement);
  }

  return <EmptyBuilder />;
};
