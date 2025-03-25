import { Sidebar } from "react-hexa-dev";
import { FlexTypes } from "react-hexa-dev";
import { useTheme } from "react-hexa-dev";
import { TSidebarOptions } from "react-hexa-dev";
import { TSidebarHeaderOptions } from "react-hexa-dev";
import { TSidebarItemOptions } from "react-hexa-dev";
import { TBorder } from "react-hexa-dev";
import { BsStars, BsWindowFullscreen } from "react-icons/bs";
import { CgScrollV } from "react-icons/cg";
import { GrStorage } from "react-icons/gr";
import { IoColorPaletteOutline, IoPlayForwardOutline } from "react-icons/io5";
import { LiaSyncAltSolid } from "react-icons/lia";
import { LuClipboardPaste, LuFormInput } from "react-icons/lu";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { PiFlyingSaucerLight } from "react-icons/pi";
import { TbFileOrientation, TbTypography } from "react-icons/tb";
import { Link } from "react-router-dom";

const HooksMenu = () => {
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
  const themeManagement = {
    useTheme: {
      icon: <IoColorPaletteOutline />,
      title: "useTheme",
      link: "/hooks/useTheme",
    },
    useTypography: {
      icon: <TbTypography />,
      title: "useTypography",
      link: "/hooks/useTypography",
    },
  };

  const animation = {
    useConfeti: {
      icon: <BsStars />,
      title: "useConfeti",
      link: "/hooks/useConfeti",
    },
    useAnimation: {
      icon: <IoPlayForwardOutline />,
      title: "useAnimation",
      link: "/hooks/useAnimation",
    },
    useTransition: {
      icon: <PiFlyingSaucerLight />,
      title: "useHoverAnimation",
      link: "/hooks/useHoverAnimation",
    },
    useScrollReveal: {
      icon: <CgScrollV />,
      title: "useScrollReveal",
      link: "/hooks/useScrollReveal",
    },
  };

  const window = {
    useWindow: {
      icon: <BsWindowFullscreen />,
      title: "useWindow",
      link: "/hooks/useWindow",
    },
    useMediaQuery: {
      icon: <TbFileOrientation />,
      title: "useMediaQuery",
      link: "/hooks/useMediaQuery",
    },
    useStorage: {
      icon: <GrStorage />,
      title: "useStorage",
      link: "/hooks/useStorage",
    },
    useClipboard: {
      icon: <LuClipboardPaste />,
      title: "useClipboard",
      link: "/hooks/useClipboard",
    },
  };

  const dataManagement = {
    usePagination: {
      icon: <MdOutlineInsertPageBreak />,
      title: "usePagination ",
      link: "/hooks/usePagination ",
    },
    useForm: {
      icon: <LuFormInput />,
      title: "useForm",
      link: "/hooks/useForm",
    },
    label: {
      icon: <LiaSyncAltSolid />,
      title: "useAsync",
      link: "/hooks/useAsync",
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
        <h1 className="text-xl font-serif ml-5">Animations</h1>
      </Sidebar.Header>
      {Object.keys(animation).map((key) => (
        <Sidebar.Item options={itemOptions} icon={animation[key].icon} key={key}>
          <Link to={(animation[key].link as string).toLowerCase()}>
            {animation[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Data</h1>
      </Sidebar.Header>
      {Object.keys(dataManagement).map((key) => (
        <Sidebar.Item options={itemOptions} icon={dataManagement[key].icon} key={key}>
          <Link to={(dataManagement[key].link as string).toLowerCase()}>
            {dataManagement[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Themes</h1>
      </Sidebar.Header>
      {Object.keys(themeManagement).map((key) => (
        <Sidebar.Item options={itemOptions} icon={themeManagement[key].icon} key={key}>
          <Link to={(themeManagement[key].link as string).toLowerCase()}>
            {themeManagement[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Window & Browser</h1>
      </Sidebar.Header>
      {Object.keys(window).map((key) => (
        <Sidebar.Item options={itemOptions} icon={window[key].icon} key={key}>
          <Link to={(window[key].link as string).toLowerCase()}>{window[key].title}</Link>
        </Sidebar.Item>
      ))}
    </Sidebar>
  );
};

export default HooksMenu;
