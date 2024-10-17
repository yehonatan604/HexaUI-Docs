import { hexaPath } from "../../../../../../Data/Constants/Paths";

const themeTogglerEx1 = `import { ThemeToggler, Flex, FlexTypes } from '${hexaPath}'

const App = () => {  
  return (
    <Flex
      options={{ justify: FlexTypes.Center, align: FlexTypes.Center }}
      className="gap-10"
    >
      <ThemeToggler/>
      <p className="text-lg dark:text-white text-black">Text</p>
    </Flex>
  );
};
`;

const themeTogglerEx2 = `import { ThemeToggler, Flex, FlexTypes } from '${hexaPath}'
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const App = () => {  
  return (
    <Flex
      options={{ justify: FlexTypes.Center, align: FlexTypes.Center }}
      className="gap-10"
    >
      <ThemeToggler
        darkIcon={<MdOutlineDarkMode size={40} />}
        lightIcon={<MdOutlineLightMode size={40} />}
      />
      <p className="text-lg dark:text-white text-black">Text</p>
    </Flex>
  );
};
`;

export { themeTogglerEx1, themeTogglerEx2 };