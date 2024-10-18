import { hexaPath } from "../../../../../../Data/Constants/Paths";

const selectEx1 = `import { Select } from '${hexaPath}';

const App = () => {
  return (
    <Select
        items={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
          { value: "3", label: "Option 3" },
        ]}
        className="dark:text-standard-d text-standard-l"
      />
  );
};
`;

const selectEx2 = `import { RangeInput, Flex, useTheme } from '${hexaPath}'

const App = () => {  
  const { colors } = useTheme();
  
  return (
    <Flex.Center className="m-auto my-5 gap-4 w-3/4">
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
        className="dark:text-standard-d text-standard-l"
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
        className="dark:text-standard-d text-standard-l"
      />
    </Flex.Center>
  );
};
`;

export { selectEx1, selectEx2 };