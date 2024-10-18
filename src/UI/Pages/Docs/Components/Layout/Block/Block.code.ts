import { hexaPath } from "../../../../../../Data/Constants/Paths";

const blockEx1 = `import { Flex } from '${hexaPath}';

const App = () => {
  return (
    <Flex className="size-10 bg-info-l" />
  );
};
`;

const blockEx2 = `import { Flex, FlexTypes, FlexDirection, FlexWrap } from '${hexaPath}'

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

export { blockEx1, blockEx2 };