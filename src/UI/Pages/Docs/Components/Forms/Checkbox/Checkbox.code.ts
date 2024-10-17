import { hexaPath } from "../../../../../../Data/Constants/Paths";

const checkboxEx1 = `import { Checkbox } from '${hexaPath}';

const App = () => {
  return (
    <Checkbox label="is checked" />
  );
};
`;

const checkboxEx2 = `import { Checkbox, Flex, FlexTypes, useTheme } from '${hexaPath}'

const App = () => {
  const { colors } = useTheme();
  
  return (
    <Flex
      options={{ justify: FlexTypes.Center, align: FlexTypes.Center }}
      className="gap-10"
    >
      <Checkbox
        label="is checked"
        defaultChecked
        options={{
          ring: {
            thickness: 2,
            variant: colors.warning,
          },
        }}
      />
      <Checkbox
        label="is checked"
        defaultChecked
        options={{
          ring: {
            thickness: 2,
            variant: colors.failure,
          },
        }}
      />
      <Checkbox
        label="is checked"
        defaultChecked
        options={{
          ring: {
            thickness: 2,
            variant: colors.success,
          },
        }}
      />
    </Flex>
  );
};
`;

export { checkboxEx1, checkboxEx2 };