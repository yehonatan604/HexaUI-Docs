import { Flex, FlexTypes, FlexWrap, Select, useTheme } from "react-hexa-dev";

const SelectExamples = () => {
  const { colors } = useTheme();
  const textColor = "dark:text-standard-d text-standard-l";

  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
        wrap: FlexWrap.Wrap,
      }}
      className="m-auto mb-5 gap-4 w-3/4 text-2xl"
    >
      <Select
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
      <Select
        options={{
          textVariant: colors.primary,
        }}
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
      <Select
        options={{
          textVariant: colors.success,
          listItemsVariant: colors.success,
          border: {
            variant: colors.approve,
          },
        }}
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
      <Select
        options={{
          textVariant: colors.secondary,
          listItemsVariant: colors.warning,
          border: {
            variant: colors.primary,
          },
        }}
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className={`${textColor}`}
      />
    </Flex>
  );
};

export default SelectExamples;
