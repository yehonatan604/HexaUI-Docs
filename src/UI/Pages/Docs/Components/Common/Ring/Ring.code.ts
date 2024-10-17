import { hexaPath } from "../../../../../../Data/Constants/Paths";

const ringEx1 = `import { Ring } from '${hexaPath}';

const App = () => {
  return (
    <Ring className="p-1">Some Content</Ring>
  );
};
`;

const ringEx2 = `import { Ring, Flex, FlexTypes, Sizes, useTheme } from '${hexaPath}'

const App = () => {
  const { colors } = useTheme();
  
  return (
    <Flex
          options={{ justify: FlexTypes.Center, align: FlexTypes.Center }}
          className="gap-10"
        >
      <Ring className="p-1">Some Content</Ring>
      <Ring
        options={{
          ringVariant: colors.primary,
          borderVariant: colors.select,
          shadow: {
            color: colors.standrad,
            size: Sizes.Xl,
          },
          ringThickness: 2,
        }}
        className="m-auto mt-10"
      >
        <img
          src="https://loremflickr.com/250/200"
          alt="Random"
          className="w-full h-32 object-cover rounded"
        />
      </Ring>
      <Ring
        options={{
          ringVariant: colors.approve,
          borderVariant: colors.blackDark,
          shadow: {
            color: colors.selectLight,
            size: Sizes.Lg,
          },
          textVariant: colors.black,
          padding: 4,
          ringThickness: 2,
        }}
        className="m-auto"
      >
        Some Content
      </Ring>
      <Ring
        options={{
          ringVariant: colors.cancel,
          borderVariant: colors.approve,
          bgVariant: "lime-500",
          shadow: {
            color: colors.successLight,
            size: Sizes.Lg,
          },
          textVariant: colors.standrad,
          rounded: "full",
          ringThickness: 2,
        }}
        className="m-auto"
      >
        <div className="rounded-full bg-gradient-to-b from-success-l to-success-d size-10" />
      </Ring>
    </Flex>
  );
};
`;

export { ringEx1, ringEx2 };