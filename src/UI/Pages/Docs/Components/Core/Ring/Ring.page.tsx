import { ringEx1, ringEx2 } from "./Ring.code";
import { options, props } from "./Ring.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import RingExamples from "./Ring.example";

const RingPage = () => {
  return (
    <DocsPageGenerator
      title="Ring"
      upperText={`
        The Ring component allows you to add a customizable ring around any element. You
        can specify the ring color, thickness, border, shadow, and other styles to
        create an eye-catching highlight effect. This component is useful for
        emphasizing elements and creating a layered look in your UI.
      `}
      examples={<RingExamples />}
      basicExample={ringEx1}
      customExample={ringEx2}
      customText={`
        You can easily customize the ring thickness, colors, and other visual properties of the Ring component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
    />
  );
};

export default RingPage;
