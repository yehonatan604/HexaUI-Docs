import { Flex, FlexTypes, ThemeToggler } from "react-hexa-dev";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeTogglerExamples = () => {
  return (
    <Flex
      options={{
        justify: FlexTypes.Center,
        align: FlexTypes.Center,
      }}
      className="gap-10"
    >
      <ThemeToggler
        darkIcon={<MdOutlineDarkMode size={40} />}
        lightIcon={<MdOutlineLightMode size={40} />}
      />
      <ThemeToggler className="text-4xl mb-2" />
    </Flex>
  );
};

export default ThemeTogglerExamples;
