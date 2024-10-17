import { rainbowBorderEx1, rainbowBorderEx2 } from "./RainbowBorder.code";
import { options, props } from "./RainbowBorder.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import RainbowBorderExamples from "./RainbowBorder.example";

const RainbowBorderPage = () => {
  return (
    <DocsPageGenerator
      title="RainbowBorder"
      upperText={`
        The RainbowBorder component is used to create a visually appealing, colorful border around a container. 
        It is highly customizable, allowing you to specify the thickness, gradient colors, rounding, and even the inner background and text colors. 
        This component is ideal for highlighting content and adding a unique flair to your UI.
      `}
      examples={<RainbowBorderExamples />}
      basicExample={rainbowBorderEx1}
      customExample={rainbowBorderEx2}
      customText="You can easily customize the thickness, gradient, rounded corners and more style options of the RainbowBorder using the options prop:"
      tableProps={options}
      tableOptions={props}
    />
  );
};

export default RainbowBorderPage;
