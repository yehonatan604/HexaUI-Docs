import { Sidebar } from "react-hexa-dev";
import { FlexTypes } from "react-hexa-dev";
import { useTheme } from "react-hexa-dev";
import { TSidebarOptions } from "react-hexa-dev";
import { TSidebarHeaderOptions } from "react-hexa-dev";
import { TSidebarItemOptions } from "react-hexa-dev";
import { TBorder } from "react-hexa-dev";
import { CgDisplayFlex, CgDisplaySpacing } from "react-icons/cg";
import { CiDatabase } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { GrValidate } from "react-icons/gr";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { IoNavigate } from "react-icons/io5";
import { LuComponent } from "react-icons/lu";
import { MdInvertColors, MdOutlineColorize, MdOutlineColorLens } from "react-icons/md";
import { PiResize, PiShareDuotone } from "react-icons/pi";
import { RxColorWheel } from "react-icons/rx";
import { TbForms, TbTypography } from "react-icons/tb";
import { Link } from "react-router-dom";

const TypesMenu = () => {
  const { colors } = useTheme();
  const borderOptions = {
    variant: colors.standradDark,
    thickness: "2",
  } as TBorder;

  // Sidebar  Options
  const options = {
    bgVariant: "zinc-900",
    border: borderOptions,
    disableClose: true,
  } as TSidebarOptions;

  const itemOptions = {
    textVariant: colors.white,
  } as TSidebarItemOptions;

  const headerOptions = {
    bgVariant: "zinc-800",
    textVariant: colors.infoLight,
    placement: FlexTypes.Start,
  } as TSidebarHeaderOptions;

  // Sidebar Items
  const component = {
    main: {
      icon: <LuComponent />,
      title: "Component Main Types",
      link: "/types/main",
    },
    common: {
      icon: <PiShareDuotone />,
      title: "Common",
      link: "/types/common",
    },
    forms: {
      icon: <TbForms />,
      title: "Forms",
      link: "/types/forms",
    },
    layout: {
      icon: <FiLayout />,
      title: "Layout",
      link: "/types/layout",
    },
    navigation: {
      icon: <IoNavigate />,
      title: "Navigation",
      link: "/types/navigation",
    },
    Typography: {
      icon: <TbTypography />,
      title: "Typography",
      link: "/types/Typography",
    },
  };

  const forms = {
    data: {
      icon: <CiDatabase />,
      title: "Data",
      link: "/types/data",
    },
    validations: {
      icon: <GrValidate />,
      title: "Validation Types",
      link: "/types/validations",
    },
  };

  const layout = {
    flexTypes: {
      icon: <CgDisplayFlex />,
      title: "Flex Types",
      link: "/types/FlexTypes",
    },
    sizes: {
      icon: <PiResize />,
      title: "Sizes",
      link: "/types/Sizes",
    },
    spacing: {
      icon: <CgDisplaySpacing />,
      title: "Spacing",
      link: "/types/Spacing",
    },
  };

  const styling = {
    colors: {
      icon: <MdInvertColors />,
      title: "Colors ",
      link: "/hooks/colors ",
    },
    gradients: {
      icon: <HiOutlineColorSwatch />,
      title: "Gradients",
      link: "/types/gradients",
    },
    TColor: {
      icon: <MdOutlineColorize />,
      title: "TColor",
      link: "/types/TColor",
    },
    TColorPalette: {
      icon: <MdOutlineColorLens />,
      title: "TColorPalette ",
      link: "/types/TColorPalette ",
    },
    TGradientPalette: {
      icon: <RxColorWheel />,
      title: "TGradientPalette",
      link: "/types/TGradientPalette",
    },
  };

  return (
    <Sidebar
      options={options}
      style={{
        width: "17vw",
      }}
    >
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Component Types</h1>
      </Sidebar.Header>
      {Object.keys(component).map((key) => (
        <Sidebar.Item options={itemOptions} icon={component[key].icon} key={key}>
          <Link to={(component[key].link as string).toLowerCase()}>
            {component[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Themes Types</h1>
      </Sidebar.Header>
      {Object.keys(styling).map((key) => (
        <Sidebar.Item options={itemOptions} icon={styling[key].icon} key={key}>
          <Link to={(styling[key].link as string).toLowerCase()}>
            {styling[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Form & Input Types</h1>
      </Sidebar.Header>
      {Object.keys(forms).map((key) => (
        <Sidebar.Item options={itemOptions} icon={forms[key].icon} key={key}>
          <Link to={(forms[key].link as string).toLowerCase()}>{forms[key].title}</Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Layout & Positioning Types</h1>
      </Sidebar.Header>
      {Object.keys(layout).map((key) => (
        <Sidebar.Item options={itemOptions} icon={layout[key].icon} key={key}>
          <Link to={(layout[key].link as string).toLowerCase()}>{layout[key].title}</Link>
        </Sidebar.Item>
      ))}
    </Sidebar>
  );
};

export default TypesMenu;
