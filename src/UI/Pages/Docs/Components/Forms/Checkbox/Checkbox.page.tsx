import { checkboxEx1, checkboxEx2 } from "./Checkbox.code";
import { options, props } from "./Checkbox.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import CheckboxExamples from "./Checkbox.example";

const CheckboxPage = () => {
  return (
    <DocsPageGenerator
      title="Checkbox"
      upperText={`
        The Checkbox component is a versatile input element that allows users to select or deselect options. 
        It supports customization of ring appearance, colors, and various visual properties, 
        making it a highly adaptable component for forms and user interactions.
      `}
      examples={<CheckboxExamples />}
      basicExample={checkboxEx1}
      customExample={checkboxEx2}
      customText={`
        You can easily customize the ring thickness, colors, and other visual properties of the Checkbox component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
    />
  );
};

export default CheckboxPage;
