import { buttonEx1, buttonEx2 } from "./Button.code";
import { options, props } from "./Button.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import ButtonExamples from "./Button.example";

const ButtonPage = () => {
  return (
    <DocsPageGenerator
      title="Button"
      upperText={`
        The Button component is a versatile UI element used to trigger actions or navigate through your application. 
        It is designed to be fully customizable and supports various variants, sizes, and rounded styles.
      `}
      examples={<ButtonExamples />}
      basicExample={buttonEx1}
      customExample={buttonEx2}
      customText={`
        You can easily customize the background color & size of the Button by using 
        variants (as Variants or as string) and sizes (as Sizes or as string):
      `}
      tableProps={props}
      tableOptions={options}
    />
  );
};

export default ButtonPage;
