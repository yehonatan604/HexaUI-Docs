import { useTheme, Flex, FlexTypes, FlexWrap } from "rainbow-plus-ui/src";
import { Grid } from "rainbow-plus-ui/src";

const GridExample = () => {
  const mode = useTheme().mode;
  const textColor = mode === "light" ? "text-zinc-800" : "text-zinc-300";

  return (
    <Flex
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      wrap={FlexWrap.Wrap}
      className="m-auto mb-5 gap-4 w-3/5 text-2xl"
    >
      <Grid
        cols={3}
        showBorder
        rowsArr={[
          <p className="p-2">item 1</p>,
          <p className="p-2">item 2</p>,
          <p className="p-2">item 3</p>,
          <p className="p-2">item 4</p>,
          <p className="p-2">item 5</p>,
          <p className="p-2">item 6</p>,
          <p className="p-2">item 7</p>,
          <p className="p-2">item 8</p>,
          <p className="p-2">item 9</p>,
        ]}
        className={`${textColor}`}
      />
    </Flex>
  );
};

export default GridExample;
