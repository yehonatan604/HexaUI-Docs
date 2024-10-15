import { Card, Button, Flex, Hr, RainbowBorder, Title, FlexWrap } from "react-hexa-dev";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import HighLighter from "../../../../../Components/Shared/HighLighter";
import PropsTable from "../../../../../Components/Shared/PropsTable";
import { cardEx1, cardEx2 } from "./Card.code";
import { options, props, footerOptions, footerProps, headerProps } from "./Card.props";
import { BsPhone, BsTrash } from "react-icons/bs";
import { PiPencil } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";

const CardPage = () => {
  return (
    <div className="flex justify-center">
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        className={`pb-1 gap-y-9 mx-auto w-4/5`}
      >
        <h2 className="text-4xl font-extrabold font-serif mt-10">Card</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The Card component is a flexible container used to display content in a visually
          appealing and organized manner. It includes an optional header and footer,
          providing a structure that suits a variety of content.
        </p>

        <Flex
          options={{ justify: FlexTypes.Center, wrap: FlexWrap.Wrap }}
          className="gap-10"
        >
          <Card
            options={{
              bgVariant: "slate-800",
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
              bgVariant: "stone-900",
              textVariant: "standard-l",
              shadow: {
                color: "standard",
                size: "xl",
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
              bgVariant: "white-d",
              textVariant: "black",
              shadow: {
                color: "standard",
                size: "xl",
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

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the Card component:
          </p>
          <HighLighter>{cardEx1}</HighLighter>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing Card Appearance</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the background color, text color, and shadow of the
            Card using the options prop:
          </p>
          <RainbowBorder className="text-sm ml-4 mt-4">
            <HighLighter>{cardEx2}</HighLighter>
          </RainbowBorder>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Card Options</h2>
          </Flex>
          <PropsTable tableProps={options} />
        </Flex>

        <Flex options={{ direction: FlexDir.Col }} className="mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Card Props</h2>
          </Flex>
          <PropsTable tableProps={props} />
        </Flex>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <p className="text-lg max-md:p-10 w-3/5">
          The Card component includes an optional header and footer. The header and footer
          can be customized using the Card.Header and Card.Footer components,
          respectively.
        </p>

        <Flex options={{ direction: FlexDir.Col }} className="mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Card Header Props</h2>
          </Flex>
          <PropsTable tableProps={headerProps} />
        </Flex>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Card Footer Options</h2>
          </Flex>
          <PropsTable tableProps={footerOptions} />
        </Flex>

        <Flex options={{ direction: FlexDir.Col }} className="mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Card Footer Props</h2>
          </Flex>
          <PropsTable tableProps={footerProps} />
        </Flex>
      </Flex>
    </div>
  );
};

export default CardPage;
