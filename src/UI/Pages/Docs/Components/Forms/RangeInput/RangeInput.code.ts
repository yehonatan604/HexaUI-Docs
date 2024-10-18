import { hexaPath } from "../../../../../../Data/Constants/Paths";

const rangeInputEx1 = `import { RangeInput } from '${hexaPath}';

const App = () => {
  return (
    <RangeInput label="Range" />
  );
};
`;

const rangeInputEx2 = `import { RangeInput, Flex, useTheme } from '${hexaPath}'

const App = () => {  
  const { colors } = useTheme();
  
  return (
    <Flex.Center className="m-auto my-5 gap-4 w-3/4">
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
    </Flex.Center>
  );
};
`;

export { rangeInputEx1, rangeInputEx2 };