import { Link } from "react-router-dom";
import { Sidebar } from "react-hexa-dev";
import { FlexTypes } from "react-hexa-dev";
import { useTheme } from "react-hexa-dev";
import { TSidebarOptions } from "react-hexa-dev";
import { TSidebarHeaderOptions } from "react-hexa-dev";
import { TSidebarItemOptions } from "react-hexa-dev";
import { TBorder } from "react-hexa-dev";
import { BiBorderRadius } from "react-icons/bi";
import { BsBorderAll, BsThreeDots } from "react-icons/bs";
import { CgArrowsH, CgCardClubs, CgDisplayFlex, CgDockBottom } from "react-icons/cg";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaFont, FaRegSquare } from "react-icons/fa6";
import { GiAccordion } from "react-icons/gi";
import { GoSingleSelect } from "react-icons/go";
import { IoIosCheckboxOutline, IoMdQuote } from "react-icons/io";
import { LuPipette, LuSun } from "react-icons/lu";
import { MdOutlineHorizontalRule, MdOutlineTextFields } from "react-icons/md";
import { PiFrameCorners, PiListDashes, PiMouseScroll, PiSidebar } from "react-icons/pi";
import { RiInputMethodLine } from "react-icons/ri";
import { RxButton, RxDropdownMenu } from "react-icons/rx";
import { TbLayoutBottombarFilled, TbLayoutNavbarFilled } from "react-icons/tb";

const ComponentsMenu = () => {
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

  const core = {
    accordion: {
      icon: <GiAccordion />,
      title: "Accordion",
      link: "/components/core/accordion",
    },
    button: {
      icon: <RxButton />,
      title: "Button",
      link: "/components/core/button",
    },
    card: {
      icon: <CgCardClubs />,
      title: "Card",
      link: "/components/core/card",
    },
    rainbowBorder: {
      icon: <BiBorderRadius />,
      title: "Rainbow Border",
      link: "/components/core/rainbow-border",
    },
    ring: {
      icon: <PiFrameCorners />,
      title: "Ring",
      link: "/components/core/ring",
    },
    themeToggler: {
      icon: <LuSun />,
      title: "Theme Toggler",
      link: "/components/core/theme-toggler",
    },
  };

  const layout = {
    flex: {
      icon: <CgDisplayFlex />,
      title: "Flex",
      link: "/components/layout/flex",
    },
    dataGrid: {
      icon: <PiListDashes />,
      title: "DataGrid",
      link: "/components/layout/data-grid",
    },
    autoGrid: {
      icon: <BsBorderAll />,
      title: "AutoGrid",
      link: "/components/layout/auto-grid",
    },
    docPanel: {
      icon: <CgDockBottom />,
      title: "DocPanel",
      link: "/components/layout/doc-panel",
    },
    scrollarea: {
      icon: <PiMouseScroll />,
      title: "ScrollArea",
      link: "/components/layout/scroll-area",
    },
    block: {
      icon: <FaRegSquare />,
      title: "Block",
      link: "/components/layout/block",
    },
  };

  const typography = {
    hr: {
      icon: <MdOutlineHorizontalRule />,
      title: "Hr",
      link: "/components/hr",
    },
    list: {
      icon: <PiListDashes />,
      title: "List",
      link: "/components/list",
    },
    quote: {
      icon: <IoMdQuote />,
      title: "Quote",
      link: "/components/quote",
    },
    title: {
      icon: <FaFont />,
      title: "Title",
      link: "/components/title",
    },
  };

  const forms = {
    checkbox: {
      icon: <IoIosCheckboxOutline />,
      title: "Checkbox",
      link: "/components/forms/checkbox",
    },
    label: {
      icon: <MdOutlineTextFields />,
      title: "Label",
      link: "/components/forms/label",
    },
    rangeInput: {
      icon: <CiSliderHorizontal />,
      title: "RangeInput",
      link: "/components/forms/range-input",
    },
    select: {
      icon: <GoSingleSelect />,
      title: "Select",
      link: "/components/forms/select",
    },
    textInput: {
      icon: <RiInputMethodLine />,
      title: "TextInput",
      link: "/components/forms/text-input",
    },
    colorPicker: {
      icon: <LuPipette />,
      title: "ColorPicker",
      link: "/components/forms/color-picker",
    },
  };

  const navigation = {
    footer: {
      icon: <TbLayoutBottombarFilled />,
      title: "Footer",
      link: "/components/navigation/footer",
    },
    navbar: {
      icon: <TbLayoutNavbarFilled />,
      title: "Navbar",
      link: "/components/navigation/navbar",
    },
    sidebar: {
      icon: <PiSidebar />,
      title: "Sidebar",
      link: "/components/navigation/sidebar",
    },
    dropDown: {
      icon: <RxDropdownMenu />,
      title: "DropDown",
      link: "/components/navigation/sidebar",
    },
    pagination: {
      icon: <CgArrowsH />,
      title: "Pagination",
      link: "/components/navigation/sidebar",
    },
    breadCrumbs: {
      icon: <BsThreeDots />,
      title: "BreadCrumbs",
      link: "/components/navigation/tab",
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
        <Link to="/components/core" className="text-xl font-serif ml-5 hover:opacity-70">
          Core Components
        </Link>
      </Sidebar.Header>
      {Object.keys(core).map((key) => (
        <Sidebar.Item options={itemOptions} icon={core[key].icon} key={key}>
          <Link to={(core[key].link as string).toLowerCase()}>{core[key].title}</Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <Link to="/components/forms" className="text-xl font-serif ml-5 hover:opacity-70">
          Form Components
        </Link>
      </Sidebar.Header>
      {Object.keys(forms).map((key) => (
        <Sidebar.Item options={itemOptions} icon={forms[key].icon} key={key}>
          <Link to={(forms[key].link as string).toLowerCase()}>{forms[key].title}</Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <Link
          to="/components/layout"
          className="text-xl font-serif ml-5 hover:opacity-70"
        >
          Layout Components
        </Link>
      </Sidebar.Header>
      {Object.keys(layout).map((key) => (
        <Sidebar.Item options={itemOptions} icon={layout[key].icon} key={key}>
          <Link to={(layout[key].link as string).toLowerCase()}>{layout[key].title}</Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <Link
          to="/components/navigation"
          className="text-xl font-serif ml-5 hover:opacity-70"
        >
          Navigation Components
        </Link>
      </Sidebar.Header>
      {Object.keys(navigation).map((key) => (
        <Sidebar.Item options={itemOptions} icon={navigation[key].icon} key={key}>
          <Link to={(navigation[key].link as string).toLowerCase()}>
            {navigation[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Typography Components</h1>
      </Sidebar.Header>
      {Object.keys(typography).map((key) => (
        <Sidebar.Item options={itemOptions} icon={typography[key].icon} key={key}>
          <Link to={(typography[key].link as string).toLowerCase()}>
            {typography[key].title}
          </Link>
        </Sidebar.Item>
      ))}
    </Sidebar>
  );
};

export default ComponentsMenu;
