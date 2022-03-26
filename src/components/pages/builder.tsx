import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { BuilderElement } from "../../types";
import { renderElement } from "../../utils";
import { EmptyBuilder } from "../molecules";

export const Builder = () => {
  const builderConfig = useSelector((state: RootState) => state.builderConfig);

  const constructJson = useMemo(() => {
    return Object.keys(builderConfig).reduce((acc, key) => {
      let el: BuilderElement = {
        ...builderConfig[key],
        children: (builderConfig[key].childrenKeys ?? []).map(
          (childKey) => builderConfig[childKey] as BuilderElement
        ),
      };

      return {
        ...acc,
        ...el,
      } as BuilderElement;
    }, {});
  }, [builderConfig]);

  if (constructJson && (constructJson as BuilderElement).children?.length) {
    return renderElement(constructJson);
  }

  return <EmptyBuilder />;
};
