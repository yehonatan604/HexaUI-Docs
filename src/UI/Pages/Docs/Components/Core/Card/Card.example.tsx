import { Flex, FlexTypes, FlexWrap, Card, Title, Button } from "react-hexa-dev";
import { BsPhone, BsTrash } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { PiPencil } from "react-icons/pi";

const CardExamples = () => {
  return (
    <Flex options={{ justify: FlexTypes.Center, wrap: FlexWrap.Wrap }} className="gap-10">
      <Card
        options={{
          bgVariant: "black-d",
          textVariant: "standard-l",
          shadow: {
            color: "standard",
            size: "lg",
          },
        }}
        className="w-[250px] h-[430px]"
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
          <p className="py-2">Footer Content</p>
        </Card.Footer>
      </Card>

      <Card
        options={{
          bgVariant: "black",
          textVariant: "standard-l",
          shadow: {
            color: "standard",
            size: "lg",
          },
        }}
        className="w-[250px] h-[430px]"
      >
        <Card.Header>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-[250px] h-32 object-cover m-auto rounded"
          />
        </Card.Header>

        <Title options={{ padding: "p-1", size: "sm", align: FlexTypes.Start }}>
          Card 2
        </Title>
        <p className="px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, expedita
          updates. Veniam maiores assumenda.
        </p>
        <Card.Footer>
          <Flex
            options={{ justify: FlexTypes.SpaceBetween }}
            className="gap-4 w-full p-2"
          >
            <PiPencil size={20} />
            <BsPhone size={20} />
            <BsTrash size={20} />
            <FaHeart size={20} />
          </Flex>
        </Card.Footer>
      </Card>

      <Card
        options={{
          bgVariant: "standard-l",
          textVariant: "black",
          shadow: {
            color: "standard",
            size: "lg",
          },
        }}
        className="w-[250px] h-[430px]"
      >
        <Card.Header>
          <img
            src="https://loremflickr.com/250/200"
            alt="Random"
            className="w-[250px] h-32 object-cover m-auto rounded"
          />
        </Card.Header>

        <Title
          options={{
            padding: "p-1",
            size: "sm",
            align: FlexTypes.Start,
            textVariant: "black",
          }}
        >
          Card 3
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
            className="m-auto"
          >
            Details
          </Button>
        </Card.Footer>
      </Card>
    </Flex>
  );
};

export default CardExamples;
