import {
  GiAbbotMeeple,
  GiAbstract004,
  GiAbstract057,
  GiBulletBill,
} from "react-icons/gi";
import {
  Flex,
  FlexDir,
  FlexTypes,
  FlexWrap,
  List,
  ListStyleTypes,
  Sizes,
  Title,
  useTheme,
  Variants,
} from "rainbow-plus-ui/src";
import { TitleProps } from "rainbow-plus-ui/src/UI/Components/Typography/Title/Props";

const ListExample = () => {
  const mode = useTheme().mode;
  const textColor = mode === "light" ? "text-zinc-800" : "text-zinc-300";

  return (
    <Flex
      justify={FlexTypes.Center}
      align={FlexTypes.Center}
      direction={FlexDir.Col}
      className="m-auto mb-5 w-4/5"
    >
      <Title size={Sizes.Xl}>Lists</Title>
      <Flex
        justify={FlexTypes.Center}
        align={FlexTypes.Center}
        direction={FlexDir.Col}
        className="m-auto gap-y-10"
      >
        <List
          items={["item 1", "item 2", "item 3"]}
          className={`${textColor}`}
          flexDirection={FlexDir.Row}
          justify={FlexTypes.Center}
          align={FlexTypes.Center}
          gap="gap-10"
          listTitle={
            {
              text: "horizontal list",
            } as never & TitleProps
          }
        />

        <Flex
          justify={FlexTypes.Center}
          align={FlexTypes.Baseline}
          wrap={FlexWrap.Wrap}
          direction={FlexDir.Row}
          className="m-auto mb-5 gap-y-10 gap-x-20 w-3/5"
        >
          <List
            items={["item 1", "item 2", "item 3"]}
            className={`${textColor}`}
            listStyle={ListStyleTypes.Decimal}
            fontSize={Sizes.Sm}
            gap={Sizes.Xxs}
            variant={Variants.Success}
            listTitle={
              {
                text: "vertical list decimal style",
              } as never & TitleProps
            }
          />
          <List
            items={["item 1", "item 2", "item 3"]}
            className={`${textColor}`}
            listStyle={ListStyleTypes.Circle}
            fontSize={Sizes.Md}
            gap={Sizes.Xxs}
            variant={Variants.Warning}
            listTitle={
              {
                text: "vertical list warning",
              } as never & TitleProps
            }
          />
          <List
            items={["item 1", "item 2", "item 3"]}
            className={`${textColor}`}
            fontSize={Sizes.Lg}
            variant={Variants.Info}
            icons={[<GiBulletBill size={10} />]}
            listTitle={
              {
                text: "vertical list info variant with bullet icons",
              } as never & TitleProps
            }
            gap={Sizes.Xxs}
          />
          <List
            items={["item 1", "item 2", "item 3"]}
            className={`${textColor}`}
            fontSize={Sizes.Xl}
            gap={Sizes.Xs}
            variant={"random"}
            icons={[
              <GiBulletBill size={12} />,
              <GiAbbotMeeple size={12} />,
              <GiAbstract004 size={12} />,
            ]}
            byOrder
            listTitle={
              {
                text: "vertical list random variant with ordered icons",
                color: mode === "light" ? "text-zinc-800" : "text-zinc-200",
              } as never & TitleProps
            }
          />
          <List
            items={["item 1", "item 2", "item 3"]}
            className={`${textColor}`}
            fontSize={Sizes.Xxl}
            gap={Sizes.Md}
            variant={"rainbow"}
            icons={[
              <GiBulletBill size={13} />,
              <GiAbbotMeeple size={13} />,
              <GiAbstract004 size={13} />,
              <GiAbstract057 size={13} />,
            ]}
            listTitle={
              {
                text: "vertical list rainbow variant with random icons",
              } as never & TitleProps
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ListExample;
