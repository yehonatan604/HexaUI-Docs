import { Flex, FlexTypes, FlexWrap } from "react-hexa-dev";

const FlexExamples = () => {
  const box1 = (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="size-5 bg-info-l"
    >
      F
    </Flex>
  );
  const box2 = (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="size-5 bg-success"
    >
      L
    </Flex>
  );
  const box3 = (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="size-5 bg-failure"
    >
      E
    </Flex>
  );
  const box4 = (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="size-5 bg-warning"
    >
      X
    </Flex>
  );

  return (
    <div className="w-full text-black font-serif font-semibold">
      <Flex
        options={{
          justify: FlexTypes.Center,
          align: FlexTypes.Start,
          wrap: FlexWrap.Wrap,
        }}
        className="m-auto gap-8 w-3/4"
      >
        {/*F*/}
        <Flex options={{ direction: "col" }} className="gap-4">
          <Flex className="gap-4">
            {box1}
            {box1}
            {box1}
          </Flex>
          {box1}
          <Flex className="gap-4">
            {box1}
            {box1}
            {box1}
          </Flex>
          {box1}
          {box1}
        </Flex>

        {/*L*/}
        <Flex options={{ direction: "col" }} className="gap-4">
          {box2}
          {box2}
          {box2}
          {box2}
          <Flex className="gap-4">
            {box2}
            {box2}
            {box2}
          </Flex>
        </Flex>

        {/*E*/}
        <Flex options={{ direction: "col" }} className="gap-4">
          <Flex className="gap-4">
            {box3}
            {box3}
            {box3}
          </Flex>
          {box3}
          <Flex className="gap-4">
            {box3}
            {box3}
            {box3}
          </Flex>
          {box3}
          <Flex className="gap-4">
            {box3}
            {box3}
            {box3}
          </Flex>
        </Flex>

        {/*X*/}
        <Flex
          options={{
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
          }}
        >
          <Flex
            options={{
              direction: "col",
              justify: FlexTypes.SpaceBetween,
            }}
            className="h-[165px]"
          >
            {box4}
            {box4}
          </Flex>
          <Flex
            options={{
              direction: "col",
              justify: FlexTypes.SpaceBetween,
            }}
            className="h-[92px]"
          >
            {box4}
            {box4}
          </Flex>
          <Flex
            options={{
              direction: "col",
              justify: FlexTypes.Center,
              align: FlexTypes.Center,
            }}
            className="h-[165px]"
          >
            {box4}
          </Flex>
          <Flex
            options={{
              direction: "col",
              justify: FlexTypes.SpaceBetween,
            }}
            className="h-[90px]"
          >
            {box4}
            {box4}
          </Flex>
          <Flex
            options={{
              direction: "col",
              justify: FlexTypes.SpaceBetween,
            }}
            className="h-[165px]"
          >
            {box4}
            {box4}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default FlexExamples;
