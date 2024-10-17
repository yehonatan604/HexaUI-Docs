import { hexaPath } from "../../../../../../Data/Constants/Paths";

const rainbowBorderEx1 = `import { Card, Flex, FlexTypes } from '${hexaPath}';

const App = () => {
  return (
    <Flex options={{ justify: FlexTypes.Center }}>
      <Card
        options={{
          bgVariant: "standard-d",
          textVariant: "standard-l",
          shadow: {
            color: "standard",
            size: "xl",
          },
        }}
        className="w-[250px]"
      >
        <Card.Header>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-[250px] h-32 object-cover m-auto rounded"
          />
        </Card.Header>

        <Title options={{ padding: "p-1", size: "sm", align: FlexTypes.Start }}>
          Card 1
        </Title>
        <p className="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          updates. Veniam maiores assumenda.
        </p>
        
        <Card.Footer>
          <Button
            options={{
              bgVariant: "approve",
              textVariant: "standard-l",
            }}
          >
            +
          </Button>
        </Card.Footer>
      </Card>
    </Flex>
  );
};
`;

const rainbowBorderEx2 = `import { Button, Flex, Sizes } from '${hexaPath}'

const App = () => {
  return (
    <Flex options={{ justify: FlexTypes.Center }}>
      <Card
        options={{
          bgVariant: "standard-d",
          textVariant: "standard-l",
          shadow: {
            color: "standard",
            size: "xl",
          },
        }}
        className="w-[250px]"
      >
        <Card.Header>
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-[250px] h-32 object-cover m-auto rounded"
        />
        </Card.Header>

        <Title options={{ padding: "p-1", size: "sm", align: FlexTypes.Start }}>
          Card 1
        </Title>
        <p className="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          updates. Veniam maiores assumenda.
        </p>
        <Card.Footer>
          <Button
            options={{
              bgVariant: "approve",
              textVariant: "standard-l",
            }}
          >
            +
          </Button>
        </Card.Footer>
      </Card>
    </Flex>
  );
};
`;

export { rainbowBorderEx1, rainbowBorderEx2 };