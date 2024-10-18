import { hexaPath } from "../../../../../../Data/Constants/Paths";

const flexEx1 = `import { Flex } from '${hexaPath}';

const App = () => {
  return (
    <Flex className="size-10 bg-info-l" />
  );
};
`;

const flexEx2 = `import { Flex, FlexTypes, FlexDirection, FlexWrap } from '${hexaPath}'

const App = () => {  
  return (
    <>
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
          wrap: FlexWrap.Wrap,
        }}
        className="size-5 bg-failure"
      >
        {/* content */}
      </Flex>
      <Flex
        options={{
          direction: FlexDirection.Col,
          justify: FlexTypes.SpaceAround,
          align: FlexTypes.Baseline,
        }}
        className="size-5 bg-warning"
      >
        {/* content */}
      </Flex
    </>
  );
};
`;

export { flexEx1, flexEx2 };