# website-builder
### Goal

The goal I consider was to implement the Website builder as simpel and scable as possible and I am happy to have achieved. 
I couldnt implemented the DND but am confident with the current setup this can be scalable as needed. 

There are two core sections of the app. 
- One is `useRenderElement` which generates the element based on its type with Action wrappers
- and the important one would be (i'd like to call Engine) `getTreeFromList` which converts flat object into nested tree.

#### Core Tech Stack Used
- Redux
- Typescript
- React helmet
- styled-components
- uuid
- react-tooltip

#### Setup Stack
- commitizen
- eslint
- husky
- lint-staged
- prettier

#### Redux Structure
redux store is kept as simple as possible and there are slices for almost every action needed.
![Screenshot 2022-03-30 at 9 37 59 PM](https://user-images.githubusercontent.com/86392264/160880841-c9d7d1f4-e3d6-454c-ba18-94c16b78a8ba.png)


#### Screenshots

![Screenshot 2022-03-30 at 9 31 08 PM](https://user-images.githubusercontent.com/86392264/160879893-94c08a73-afc0-4e73-8e28-b6662b924edf.png)
![Screenshot 2022-03-30 at 9 30 52 PM](https://user-images.githubusercontent.com/86392264/160879909-41083ca4-d69b-44b2-8891-ab0974ad2b0f.png)
![Screenshot 2022-03-30 at 9 31 01 PM](https://user-images.githubusercontent.com/86392264/160880060-a2818b70-81d7-430b-87ec-f5016cbae167.png)

#### Known gotchas
- Deleting Elements sometimes breakes the app. Thsi happens when there are children in the deleted element or the element part of the children.
 I need to work onn tuning the engine. Since i timeboxed the work, this was upfront mentioned. 

P.S: Thank you for the task. It made me reliase my potiential and i am more confident now
