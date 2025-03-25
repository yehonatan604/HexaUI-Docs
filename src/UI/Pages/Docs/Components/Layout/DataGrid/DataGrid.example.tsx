import { AutoGrid, Flex, FlexTypes } from "react-hexa-dev";

const DataGridExamples = () => {
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="m-auto gap-4 w-3/5 text-2xl"
    >
      <AutoGrid
        cols={3}
        rowsArr={[
          <p className="p-2">item 1</p>,
          <p className="p-2">item 2</p>,
          <p className="p-2">item 3</p>,
          <p className="p-2">item 4</p>,
          <p className="p-2">item 5</p>,
          <p className="p-2">item 6</p>,
          <p className="p-2">item 7</p>,
          <p className="p-2">item 8</p>,
          <p className="p-2">item 9</p>,
        ]}
        className={`dark:text-info-l text-info-d text-sm`}
      />
    </Flex>
  );
};

export default DataGridExamples;
