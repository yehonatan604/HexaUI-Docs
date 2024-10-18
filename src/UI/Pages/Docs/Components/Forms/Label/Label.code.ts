import { hexaPath } from "../../../../../../Data/Constants/Paths";

const labelEx1 = `import { Label } from '${hexaPath}';

const App = () => {
  return (
    <Label text="This is just a Label" />
  );
};
`;

const labelEx2 = `import { Label, Flex, TextInput } from '${hexaPath}'

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

export { labelEx1, labelEx2 };