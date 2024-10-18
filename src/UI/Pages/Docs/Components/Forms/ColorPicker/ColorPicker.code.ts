import { hexaPath } from "../../../../../../Data/Constants/Paths";

const colorPickerEx1 = `import { ColorPicker } from '${hexaPath}';

const App = () => {
  return (
    <ColorPicker />
  );
};
`;

const colorPickerEx2 = `import { Label, Flex, TextInput } from '${hexaPath}'

const App = () => {  
  return (
    <Flex options={{ direction: "col" }} className="gap-2">
      <Label
        htmlFor="test-input"
        text="This is a Label for test-input"
        options={{
          textVariant: "info-l",
        }}
      />
      <TextInput id="test-input" placeholder="Test Input" />
    </Flex>
  );
};
`;

export { colorPickerEx1, colorPickerEx2 };