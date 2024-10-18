import { DocPanel, Flex, FlexTypes } from "react-hexa-dev";

const DocPanelExamples = () => {
  return (
    <>
      <Flex
        options={{
          justify: FlexTypes.SpaceBetween,
          align: FlexTypes.Start,
          direction: "col",
        }}
        className="m-auto h-[400px] w-3/5 bg-white text-2xl"
      >
        <DocPanel
          options={{ placement: "top" }}
          className="h-[200px]"
          innerClassName="min-h-24"
        >
          <p className="m-auto text-lg">Top Zone</p>
        </DocPanel>
        <DocPanel
          options={{ placement: "bottom" }}
          className="h-[200px]"
          innerClassName="min-h-24"
        >
          <p className="m-auto text-lg">Bottom Zone</p>
        </DocPanel>
      </Flex>
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
        }}
        className="m-auto gap-4 w-3/5 bg-white text-2xl"
      >
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
      </Flex>
    </>
  );
};

export default DocPanelExamples;
