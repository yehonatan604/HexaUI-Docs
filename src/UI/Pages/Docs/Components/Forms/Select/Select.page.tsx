import { selectEx1, selectEx2 } from "./Select.code";
import { props, options } from "./Select.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import SelectExamples from "./Select.example";

const SelectPage = () => {
  return (
    <DocsPageGenerator
      title="Select"
      upperText={`
        The Select component allows users to choose an option from a dropdown list. 
        It supports customization of appearance, including colors, sizes, and other visual properties, making it suitable for various UI contexts.
      `}
      examples={<SelectExamples />}
      basicExample={selectEx1}
      customExample={selectEx2}
      customText={`
        You can easily customize the appearance and other visual properties of the Select component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
      dependsOnTheme
    />
  );
};

export default SelectPage;
