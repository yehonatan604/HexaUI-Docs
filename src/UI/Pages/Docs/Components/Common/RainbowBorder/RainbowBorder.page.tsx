import { RainbowBorder, Flex, Hr, useTheme } from "react-hexa-dev";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import HighLighter from "../../../../../Components/Shared/HighLighter";
import PropsTable from "../../../../../Components/Shared/PropsTable";
import { rainbowBorderEx1, rainbowBorderEx2 } from "./RainbowBorder.code";
import { options, props } from "./RainbowBorder.props";
import { GiAlliedStar } from "react-icons/gi";

const RainbowBorderPage = () => {
  const { gradients } = useTheme();
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">RainbowBorder</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The RainbowBorder component is used to create a visually appealing, colorful
          border around a container. It is highly customizable, allowing you to specify
          the thickness, gradient colors, rounding, and even the inner background and text
          colors. This component is ideal for highlighting content and adding a unique
          flair to your UI.
        </p>

        <Flex options={{ justify: FlexTypes.Center }} className="gap-10">
          <RainbowBorder
            options={{
              thickness: "xs",
              gradient: gradients.primary,
              innerBgVariant: "black-d",
              innerTextVariant: "standard-l",
            }}
          >
            <div className="p-5">
              <p className="text-center">Hello</p>
              <p className="text-center">Hello</p>
              <p className="text-center">Hello</p>
            </div>
          </RainbowBorder>

          <RainbowBorder
            options={{
              thickness: "sm",
              gradient: gradients.secondary,
              innerBgVariant: "black-d",
              innerTextVariant: "standard-l",
            }}
          >
            <div className="p-5">
              <p className="text-center">Hello</p>
              <p className="text-center">Hello</p>
              <p className="text-center">Hello</p>
            </div>
          </RainbowBorder>

          <RainbowBorder
            options={{
              thickness: "3xl",
              gradient: gradients.primary,
              rounded: "full",
              innerBgVariant: "success-d",
              innerTextVariant: "white",
            }}
          >
            <div className="rounded-full">
              <GiAlliedStar size={100} />
            </div>
          </RainbowBorder>
        </Flex>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the RainbowBorder component:
          </p>
          <HighLighter>{rainbowBorderEx1}</HighLighter>
        </div>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing RainbowBorder Appearance</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the thickness, gradient, and rounded corners of the
            RainbowBorder using the options prop:
          </p>
          <HighLighter>{rainbowBorderEx2}</HighLighter>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">RainbowBorder Options</h2>
          </Flex>
          <PropsTable tableProps={options} />
        </Flex>

        <Flex options={{ direction: FlexDir.Col }} className="mb-9 gap-4">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">RainbowBorder Props</h2>
          </Flex>
          <PropsTable tableProps={props} />
        </Flex>
      </Flex>
    </div>
  );
};

export default RainbowBorderPage;
