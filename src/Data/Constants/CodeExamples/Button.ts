import { componentsPath } from "../Paths";

const buttonEx1 = `import { Button } from '${componentsPath}';

<>
    <Button>Click Me</Button>
</>
`;
const buttonEx2 = `import { Button, Flex, Sizes } from '${componentsPath}'
<>
  <Flex classname="gap-4">
      <Button
          options={{
          size: Sm,
          bgVariant: "success-d",
          textVariant: "white-l",
          }}
      >
  </Flex>
</>

`;

export { buttonEx1, buttonEx2 };