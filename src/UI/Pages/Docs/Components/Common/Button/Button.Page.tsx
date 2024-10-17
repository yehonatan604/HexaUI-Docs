import { Button, Flex, Hr } from "react-hexa-dev";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import HighLighter from "../../../../../Components/Shared/HighLighter";
import { buttonEx1, buttonEx2 } from "./Button.code";
import PropsTable from "../../../../../Components/Shared/PropsTable";
import { options, props } from "./Button.props";

const ButtonPage = () => {
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">Button</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The Button component is a versatile UI element used to trigger actions or
          navigate through your application. It is designed to be fully customizable and
          supports various variants, sizes, and rounded styles.
        </p>

        <Flex className="gap-4" options={{ justify: "center", align: "center" }}>
          <Button>Click Me</Button>
          <Button
            options={{
              bgVariant: "success-d",
              textVariant: "white-l",
              size: "md",
            }}
          >
            Success
          </Button>
          <Button options={{ bgVariant: "warning", textVariant: "info-d", size: "lg" }}>
            Warning
          </Button>
        </Flex>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the Button component:
          </p>
          <HighLighter>{buttonEx1}</HighLighter>
        </div>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing Button Color & Sizes</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the background color & size of the Button by using
            variants (as Variants or as string) and sizes (as Sizes or as string):
          </p>
          <HighLighter>{buttonEx2}</HighLighter>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="mb-9 gap-4">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Props</h2>
          </Flex>
          <PropsTable tableProps={props} />
        </Flex>

        <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Options</h2>
          </Flex>
          <PropsTable tableProps={options} />
        </Flex>
      </Flex>
    </div>
  );
};

export default ButtonPage;
