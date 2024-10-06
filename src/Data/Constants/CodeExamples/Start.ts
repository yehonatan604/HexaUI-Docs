const installEx = "npm install rainbow-plus-ui";
const buttonEx = `import { Button } from 'rainbow-plus-ui/src';

function App() {
  return (
     <Button variant={Warning} size={Sizes.Lg}>
        {Warning}
      </Button>
  );
};
  
export default App;
`;
const styleEx = `<List
  items={["item 1", "item 2", "item 3"]}
  fontSize={Sizes.Xl}
  gap={Sizes.Xs}
  variant={"random"}
  icons={[
    <GiBulletBill size={12} />,
    <GiAbbotMeeple size={12} />,
    <GiAbstract004 size={12} />,
  ]}
  byOrder
  listTitle={{
    text: "vertical list witha random variant and ordered icons",
    color: mode === "light" ? "text-zinc-800" : "text-zinc-200",
  }}
/>
`;

export { installEx, buttonEx, styleEx };