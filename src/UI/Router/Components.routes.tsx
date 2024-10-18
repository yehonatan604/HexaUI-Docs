import { Routes, Route } from "react-router-dom";
import AccordionPage from "../Pages/Docs/Components/Core/Accordion/Accordion.page";
import ButtonPage from "../Pages/Docs/Components/Core/Button/Button.Page";
import CardPage from "../Pages/Docs/Components/Core/Card/Card.page";
import CoreComponentsPage from "../Pages/Docs/Components/Core/Common.page";
import RainbowBorderPage from "../Pages/Docs/Components/Core/RainbowBorder/RainbowBorder.page";
import RingPage from "../Pages/Docs/Components/Core/Ring/Ring.page";
import ThemeTogglerPage from "../Pages/Docs/Components/Core/ThemeToggler/ThemeToggler.page";
import CheckboxPage from "../Pages/Docs/Components/Forms/Checkbox/Checkbox.page";
import FormsComponentsPage from "../Pages/Docs/Components/Forms/Forms.page";
import LayoutComponentsPage from "../Pages/Docs/Components/Layout/Layout.page";
import LabelPage from "../Pages/Docs/Components/Forms/Label/Label.page";
import RangeInputPage from "../Pages/Docs/Components/Forms/RangeInput/RangeInput.page";
import SelectPage from "../Pages/Docs/Components/Forms/Select/Select.page";
import TextInputPage from "../Pages/Docs/Components/Forms/TextInput/TextInput.page";
import FlexPage from "../Pages/Docs/Components/Layout/Flex/Flex.page";
import ColorPickerPage from "../Pages/Docs/Components/Forms/ColorPicker/ColorPicker.page";
import AutoGridPage from "../Pages/Docs/Components/Layout/AutoGrid/AutoGrid.page";
import DataGridPage from "../Pages/Docs/Components/Layout/DataGrid/DataGrid.page";
import DocPanelPage from "../Pages/Docs/Components/Layout/DocPanel/DocPanel.page";
import ScrollAreaPage from "../Pages/Docs/Components/Layout/ScrollArea/ScrollArea.page";
import BlockPage from "../Pages/Docs/Components/Layout/Block/Block.page";

const ComponentRoutes = () => (
  <Routes>
    <Route path="core">
      <Route index element={<CoreComponentsPage />} />
      <Route path="accordion" element={<AccordionPage />} />
      <Route path="button" element={<ButtonPage />} />
      <Route path="card" element={<CardPage />} />
      <Route path="rainbow-border" element={<RainbowBorderPage />} />
      <Route path="ring" element={<RingPage />} />
      <Route path="theme-toggler" element={<ThemeTogglerPage />} />
    </Route>
    <Route path="forms">
      <Route index element={<FormsComponentsPage />} />
      <Route path="checkbox" element={<CheckboxPage />} />
      <Route path="label" element={<LabelPage />} />
      <Route path="range-input" element={<RangeInputPage />} />
      <Route path="text-input" element={<TextInputPage />} />
      <Route path="select" element={<SelectPage />} />
      <Route path="color-picker" element={<ColorPickerPage />} />
    </Route>
    <Route path="layout">
      <Route index element={<LayoutComponentsPage />} />
      <Route path="flex" element={<FlexPage />} />
      <Route path="auto-grid" element={<AutoGridPage />} />
      <Route path="data-grid" element={<DataGridPage />} />
      <Route path="doc-panel" element={<DocPanelPage />} />
      <Route path="scroll-area" element={<ScrollAreaPage />} />
      <Route path="block" element={<BlockPage />} />
    </Route>
  </Routes>
);

export default ComponentRoutes;
