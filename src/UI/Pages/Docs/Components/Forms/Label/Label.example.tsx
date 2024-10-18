import { Label, Flex, TextInput } from "react-hexa-dev";

const LabelExamples = () => {
  return (
    <Flex options={{ direction: "col" }} className="gap-10">
      <Label text="This is just a Label" />
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
    </Flex>
  );
};

export default LabelExamples;
