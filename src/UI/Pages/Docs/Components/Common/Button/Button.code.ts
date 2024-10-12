import { hexaPath } from "../../../../../../Data/Constants/Paths";

const buttonEx1 = `import { Button } from '${hexaPath}';
const App = () => {
  return (
    <>
      <Button>Click Me</Button>
    </>
  );
};
`;
const buttonEx2 = `import { Button, Flex, Sizes } from '${hexaPath}'

const App = () => {
  return (
    <Flex options={{ justify: "center", align: "center" }} className="gap-4">
      <Button
        options={{
          bgVariant: "success-d",
          textVariant: "white-l",
          size: Sizes.Md,
        }}
      >
        Success
      </Button>
      <Button
        options={{ bgVariant: "warning", textVariant: "info-d", size: Sizes.Lg }}
      >
        Warning
      </Button>
    </Flex>
  );
};
`;

export { buttonEx1, buttonEx2 };