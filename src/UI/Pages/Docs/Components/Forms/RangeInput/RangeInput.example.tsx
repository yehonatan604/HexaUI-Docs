import { Flex, FlexTypes, FlexWrap, RangeInput, useTheme } from "react-hexa-dev";

const RangeInputExamples = () => {
  const { colors } = useTheme();

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto my-5 gap-4 w-3/4"
    >
      <RangeInput label="Range" />
      <RangeInput
        label="Primary"
        options={{
          textVariant: colors.primary,
          rangeVariant: colors.primary,
        }}
      />
      <RangeInput
        label="Warning"
        options={{
          textVariant: colors.warning,
          rangeVariant: colors.warning,
        }}
      />
      <RangeInput
        label="Failure"
        options={{
          textVariant: colors.failure,
          rangeVariant: colors.failure,
        }}
      />
      <RangeInput
        label="Success"
        options={{
          textVariant: colors.success,
          rangeVariant: colors.success,
        }}
      />
      <RangeInput
        label="Select"
        options={{
          textVariant: colors.select,
          rangeVariant: colors.select,
        }}
      />
      <RangeInput
        label="Cancel"
        options={{
          textVariant: colors.cancel,
          rangeVariant: colors.cancel,
        }}
      />
      <RangeInput
        label="Info"
        options={{
          textVariant: colors.info,
          rangeVariant: colors.info,
        }}
      />
      <RangeInput
        label="Secondary"
        options={{
          textVariant: colors.secondary,
          rangeVariant: colors.secondary,
        }}
      />
    </Flex>
  );
};

export default RangeInputExamples;
