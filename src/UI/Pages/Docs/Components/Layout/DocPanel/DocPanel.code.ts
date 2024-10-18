import { hexaPath } from "../../../../../../Data/Constants/Paths";

const docPanelEx1 = `import { DocPanel } from '${hexaPath}'

const App = () => {  
  return (
    <DocPanel options={{ placement: "top" }} className="h-[300px]">
      <p className="m-auto">Top Zone</p>
    </DocPanel>
  );
};
`;

const docPanelEx2 = `import { DocPanel } from '${hexaPath}'

const App = () => {  
  return (
    <DocPanel
      options={{
        placement: "left",
        border: {
          variant: "primary-d",
          thickness: "0.5",
        },
      }}
      panelWidth="100px"
      className="border-r-2"
    >
      <p className="p-2">item 1</p>
      <p className="p-2">item 2</p>
      <p className="p-2">item 3</p>
    </DocPanel>
  );
};
`;

export { docPanelEx1, docPanelEx2 };