import { Flex, FlexTypes, RainbowBorder, useTheme } from "react-hexa-dev";
import { GiAlliedStar } from "react-icons/gi";

const RainbowBorderExamples = () => {
  const { gradients } = useTheme();

  return (
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
  );
};

export default RainbowBorderExamples;
