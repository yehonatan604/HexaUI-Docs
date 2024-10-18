import { colorPickerEx1, colorPickerEx2 } from "./ColorPicker.code";
import { props } from "./ColorPicker.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import ColorPickerExamples from "./ColorPicker.example";

const ColorPickerPage = () => {
  return (
    <DocsPageGenerator
      title="Color Picker"
      upperText={`
        The Color Picker component is a custom-designed color selector built from scratch. It allows users to choose colors dynamically with interactive canvases for hue and saturation control.
        This Color Picker responds to both light and dark themes, offering a seamless user experience in any UI context.
      `}
      examples={<ColorPickerExamples />}
      basicExample={colorPickerEx1}
      customExample={colorPickerEx2}
      customText={`
        You can easily customize the Color Picker to fit your needs, including adapting it for different themes, adjusting the size, and more, using the available options prop:
      `}
      tableProps={props}
    />
  );
};

export default ColorPickerPage;
