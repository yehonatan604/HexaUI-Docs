import { Flex, Button } from "react-hexa-dev";

const ButtonExamples = () => {
  return (
    <Flex className="gap-4" options={{ justify: "center", align: "center" }}>
      <Button>Click Me</Button>
      <Button
        options={{
          bgVariant: "success-d",
          textVariant: "white-l",
          size: "md",
        }}
      >
        Success
      </Button>
      <Button options={{ bgVariant: "warning", textVariant: "info-d", size: "lg" }}>
        Warning
      </Button>
    </Flex>
  );
};

export default ButtonExamples;
