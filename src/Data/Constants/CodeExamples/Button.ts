const buttonEx1 = `import { Button } from 'rainbow-plus-ui/src';

<>
    <Button>Standard</Button>
</>
`;
const buttonEx2 = `import { Button, Flex, Sizes, Variants } from 'rainbow-plus-ui/src'
<>
    <Flex classname="gap-4">
        <Button variant="success" size="md">
            Success
        </Button>

        <Button variant={Variants.Warning} size={Sizes.Lg}>
            Warning
        </Button>
    </Flex>
</>

`;

export { buttonEx1, buttonEx2 };