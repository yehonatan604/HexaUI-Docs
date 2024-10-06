import { Sidebar, Hr } from "rainbow-plus-ui/src";
import { BiBorderRadius } from "react-icons/bi";
import { BsBorderAll } from "react-icons/bs";
import { CgCardClubs } from "react-icons/cg";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaFont } from "react-icons/fa6";
import { Gi3dMeeple, GiAccordion } from "react-icons/gi";
import { GoSingleSelect } from "react-icons/go";
import { IoIosCheckboxOutline, IoIosColorPalette, IoMdQuote } from "react-icons/io";
import { LuSun } from "react-icons/lu";
import { MdOutlineHorizontalRule, MdOutlineTextFields } from "react-icons/md";
import { PiFrameCorners, PiListDashes, PiSidebar } from "react-icons/pi";
import { RiInputMethodLine } from "react-icons/ri";
import { RxButton } from "react-icons/rx";
import { TbLayoutBottombarFilled, TbLayoutNavbarFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const ComponentsMenu = () => {
  return (
    <Sidebar>
      <h1 className="text-2xl mt-4 mx-auto font-serif">Common</h1>
      <Sidebar.Item icon={<GiAccordion />}>
        <Link to="/components/common/accordion">Accordion</Link>
      </Sidebar.Item>
      <Sidebar.Item icon={<RxButton />}>Button</Sidebar.Item>
      <Sidebar.Item icon={<CgCardClubs />}>Card</Sidebar.Item>
      <Sidebar.Item icon={<BiBorderRadius />}>RainbowBorder</Sidebar.Item>
      <Sidebar.Item icon={<PiFrameCorners />}>Ring</Sidebar.Item>
      <Sidebar.Item label="new!" icon={<LuSun />}>
        ThemeToggler
      </Sidebar.Item>
      <Hr borderWidth="w-5/6" />
      <h1 className="text-2xl mx-auto font-serif">Forms</h1>
      <Sidebar.Item icon={<IoIosCheckboxOutline />}>Checkbox</Sidebar.Item>
      <Sidebar.Item icon={<IoIosColorPalette />}>ColorPicker</Sidebar.Item>
      <Sidebar.Item icon={<MdOutlineTextFields />}>Label</Sidebar.Item>
      <Sidebar.Item icon={<CiSliderHorizontal />}>RangeInput</Sidebar.Item>
      <Sidebar.Item icon={<GoSingleSelect />}>Select</Sidebar.Item>
      <Sidebar.Item icon={<RiInputMethodLine />}>TextInput</Sidebar.Item>
      <Hr borderWidth="w-5/6" />
      <h1 className="text-2xl mx-auto font-serif">Layout</h1>
      <Sidebar.Item icon={<Gi3dMeeple />}>Flex</Sidebar.Item>
      <Sidebar.Item icon={<BsBorderAll />}>Grid</Sidebar.Item>
      <Hr borderWidth="w-5/6" />
      <h1 className="text-2xl mx-auto font-serif">Navigation</h1>
      <Sidebar.Item icon={<TbLayoutBottombarFilled />}>Footer</Sidebar.Item>
      <Sidebar.Item icon={<TbLayoutNavbarFilled />}>Navbar</Sidebar.Item>
      <Sidebar.Item icon={<PiSidebar />}>Sidebar</Sidebar.Item>
      <Hr borderWidth="w-5/6" />
      <h1 className="text-2xl mx-auto font-serif">Typography</h1>
      <Sidebar.Item icon={<MdOutlineHorizontalRule />}>Hr</Sidebar.Item>
      <Sidebar.Item icon={<PiListDashes />}>List</Sidebar.Item>
      <Sidebar.Item icon={<IoMdQuote />}>Quote</Sidebar.Item>
      <Sidebar.Item icon={<FaFont />}>Title</Sidebar.Item>
    </Sidebar>
  );
};

export default ComponentsMenu;
