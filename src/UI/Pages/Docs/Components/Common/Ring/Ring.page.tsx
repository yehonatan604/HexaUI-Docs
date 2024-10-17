import { Flex, Hr, useTheme, Ring, Sizes } from "react-hexa-dev";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import HighLighter from "../../../../../Components/Shared/HighLighter";
import PropsTable from "../../../../../Components/Shared/PropsTable";
import { ringEx1, ringEx2 } from "./Ring.code";
import { options, props } from "./Ring.props";

const RingPage = () => {
  const { colors } = useTheme();
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">Ring</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The Ring component allows you to add a customizable ring around any element. You
          can specify the ring color, thickness, border, shadow, and other styles to
          create an eye-catching highlight effect. This component is useful for
          emphasizing elements and creating a layered look in your UI.
        </p>

        <Flex
          options={{ justify: FlexTypes.Center, align: FlexTypes.Center }}
          className="gap-10"
        >
          <Ring className="p-1">Some Content</Ring>
          <Ring
            options={{
              ringVariant: colors.primary,
              borderVariant: colors.select,
              shadow: {
                color: colors.standrad,
                size: Sizes.Xl,
              },
              ringThickness: 2,
            }}
            className="m-auto mt-10"
          >
            <img
              src="https://loremflickr.com/250/200"
              alt="Random"
              className="w-full h-32 object-cover rounded"
            />
          </Ring>
          <Ring
            options={{
              ringVariant: colors.approve,
              borderVariant: colors.blackDark,
              shadow: {
                color: colors.selectLight,
                size: Sizes.Lg,
              },
              textVariant: colors.black,
              padding: 4,
              ringThickness: 2,
            }}
            className="m-auto"
          >
            Some Content
          </Ring>
          <Ring
            options={{
              ringVariant: colors.cancel,
              borderVariant: colors.approve,
              bgVariant: "lime-500",
              shadow: {
                color: colors.successLight,
                size: Sizes.Lg,
              },
              textVariant: colors.standrad,
              rounded: "full",
              ringThickness: 2,
            }}
            className="m-auto"
          >
            <div
              className={`rounded-full bg-gradient-to-b from-success-l to-success-d size-10`}
            />
          </Ring>
        </Flex>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the Ring component:
          </p>
          <HighLighter>{ringEx1}</HighLighter>
        </div>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing Ring Appearance</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the ring thickness, colors, and other visual
            properties of the Ring component using the options prop:
          </p>
          <HighLighter>{ringEx2}</HighLighter>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Ring Options</h2>
          </Flex>
          <PropsTable tableProps={options} />
        </Flex>

        <Flex options={{ direction: FlexDir.Col }} className="mb-9 gap-4">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Ring Props</h2>
          </Flex>
          <PropsTable tableProps={props} />
        </Flex>
      </Flex>
    </div>
  );
};

export default RingPage;
