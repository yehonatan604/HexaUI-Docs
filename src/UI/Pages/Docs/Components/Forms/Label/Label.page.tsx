import { labelEx1, labelEx2 } from "./Label.code";
import { props } from "./Label.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import LabelExamples from "./Label.example";

const LabelPage = () => {
  return (
    <DocsPageGenerator
      title="Label"
      upperText={`
        The Label component is used to display descriptive text for form elements or other content, providing users with important information.
        It supports various customization options, such as text colors, sizes, and alignment, making it adaptable for different UI requirements.
      `}
      examples={<LabelExamples />}
      basicExample={labelEx1}
      customExample={labelEx2}
      customText={`
        You can easily customize the text color, size, and alignment of the Label component using the options prop:
      `}
      tableProps={props}
    />
  );
};

export default LabelPage;
