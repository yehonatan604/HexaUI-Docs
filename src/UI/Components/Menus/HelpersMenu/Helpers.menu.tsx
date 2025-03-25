import { Sidebar } from "react-hexa-dev";
import { FlexTypes } from "react-hexa-dev";
import { useTheme } from "react-hexa-dev";
import { TSidebarOptions } from "react-hexa-dev";
import { TSidebarHeaderOptions } from "react-hexa-dev";
import { TSidebarItemOptions } from "react-hexa-dev";
import { TBorder } from "react-hexa-dev";
import { BsCalendar2Date, BsDashLg } from "react-icons/bs";
import { CiCalendarDate, CiSliderHorizontal } from "react-icons/ci";
import {
  GiCamel,
  GiPerspectiveDiceSixFacesRandom,
  GiSandSnake,
  GiThreeKeys,
  GiWaterDivinerStick,
} from "react-icons/gi";
import { GoSortDesc } from "react-icons/go";
import { IoInvertModeOutline } from "react-icons/io5";
import { LiaStampSolid } from "react-icons/lia";
import { LuClipboardPaste, LuFileJson } from "react-icons/lu";
import {
  MdHttp,
  MdOutlineEmail,
  MdOutlineNoEncryption,
  MdOutlinePhone,
  MdUpcoming,
} from "react-icons/md";
import { PiEmptyThin } from "react-icons/pi";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { TbNumber123 } from "react-icons/tb";
import { TiSortNumericallyOutline } from "react-icons/ti";
import { VscGroupByRefType, VscSymbolArray, VscSymbolString } from "react-icons/vsc";
import { Link } from "react-router-dom";

const HelpersMenu = () => {
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
  const stringUtilities = {
    generateRandomString: {
      icon: <GiPerspectiveDiceSixFacesRandom />,
      title: "generateRandomString",
      link: "/helpers/generateRandomString",
    },
    capitalizeFirstLetter: {
      icon: <RxLetterCaseCapitalize />,
      title: "capitalizeFirstLetter",
      link: "/helpers/capitalizeFirstLetter",
    },
    truncateString: {
      icon: <VscSymbolString />,
      title: "truncateString",
      link: "/helpers/truncateString",
    },
    toKebabCase: {
      icon: <BsDashLg />,
      title: "toKebabCase",
      link: "/helpers/toKebabCase",
    },
    toCamelCase: {
      icon: <GiCamel />,
      title: "toCamelCase",
      link: "/helpers/toCamelCase",
    },
    toSnakeCase: {
      icon: <GiSandSnake />,
      title: "toSnakeCase",
      link: "/helpers/toSnakeCase",
    },
  };

  const validation = {
    isEmail: {
      icon: <MdOutlineEmail />,
      title: "isEmail",
      link: "/helpers/isEmail",
    },
    isURL: {
      icon: <MdHttp />,
      title: "isURL",
      link: "/helpers/isURL",
    },
    isPhoneNumber: {
      icon: <MdOutlinePhone />,
      title: "isPhoneNumber",
      link: "/helpers/isPhoneNumber",
    },
    isUUID: {
      icon: <MdOutlineNoEncryption />,
      title: "isUUID",
      link: "/helpers/isUUID",
    },
    isInteger: {
      icon: <TbNumber123 />,
      title: "isInteger",
      link: "/helpers/isInteger",
    },
    isStrongPassword: {
      icon: <RiLockPasswordLine />,
      title: "isStrongPassword",
      link: "/helpers/isStrongPassword",
    },
    isAlphanumeric: {
      icon: <TiSortNumericallyOutline />,
      title: "isAlphanumeric",
      link: "/helpers/isAlphanumeric",
    },
    isEmpty: {
      icon: <PiEmptyThin />,
      title: "isEmpty",
      link: "/helpers/isEmpty",
    },
    isDateValid: {
      icon: <CiCalendarDate />,
      title: "isDateValid",
      link: "/helpers/isDateValid",
    },
    isInRange: {
      icon: <CiSliderHorizontal />,
      title: "isInRange",
      link: "/helpers/isInRange",
    },
    isJsonString: {
      icon: <LuFileJson />,
      title: "isJsonString",
      link: "/helpers/isJsonString",
    },
    isArrayUnique: {
      icon: <VscSymbolArray />,
      title: "isArrayUnique",
      link: "/helpers/isArrayUnique",
    },
  };

  const dataTranformations = {
    groupBy: {
      icon: <VscGroupByRefType />,
      title: "groupBy",
      link: "/helpers/groupBy",
    },
    sortArrayByKey: {
      icon: <GoSortDesc />,
      title: "sortArrayByKey",
      link: "/helpers/sortArrayByKey",
    },
    chunkArray: {
      icon: <GiWaterDivinerStick />,
      title: "chunkArray",
      link: "/helpers/chunkArray",
    },
    omitKeys: {
      icon: <MdUpcoming />,
      title: "omitKeys",
      link: "/helpers/omitKeys",
    },
    pickKeys: {
      icon: <GiThreeKeys />,
      title: "pickKeys",
      link: "/helpers/pickKeys",
    },
    invertObject: {
      icon: <IoInvertModeOutline />,
      title: "invertObject",
      link: "/helpers/invertObject",
    },
    formatDate: {
      icon: <BsCalendar2Date />,
      title: "invertObject",
      link: "/helpers/invertObject",
    },
    dateToTimestamp: {
      icon: <LuClipboardPaste />,
      title: "dateToTimestamp",
      link: "/helpers/dateToTimestamp",
    },
    timestampToDate: {
      icon: <LiaStampSolid />,
      title: "timestampToDate",
      link: "/helpers/timestampToDate",
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
        <h1 className="text-xl font-serif ml-5">Validation</h1>
      </Sidebar.Header>
      {Object.keys(validation).map((key) => (
        <Sidebar.Item options={itemOptions} icon={validation[key].icon} key={key}>
          <Link to={(validation[key].link as string).toLowerCase()}>
            {validation[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">String Utilities</h1>
      </Sidebar.Header>
      {Object.keys(stringUtilities).map((key) => (
        <Sidebar.Item options={itemOptions} icon={stringUtilities[key].icon} key={key}>
          <Link to={(stringUtilities[key].link as string).toLowerCase()}>
            {stringUtilities[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Data Transformations</h1>
      </Sidebar.Header>
      {Object.keys(dataTranformations).map((key) => (
        <Sidebar.Item options={itemOptions} icon={dataTranformations[key].icon} key={key}>
          <Link to={(dataTranformations[key].link as string).toLowerCase()}>
            {dataTranformations[key].title}
          </Link>
        </Sidebar.Item>
      ))}
    </Sidebar>
  );
};

export default HelpersMenu;
