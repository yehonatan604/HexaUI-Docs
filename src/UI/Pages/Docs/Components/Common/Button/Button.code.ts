import { hexaPath } from "../../../../../../Data/Constants/Paths";

const buttonEx1 = `import { Button } from '${hexaPath}';

<>
    <Button>Click Me</Button>
</>
`;
const buttonEx2 = `import { Button, Flex, Sizes } from '${hexaPath}'
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