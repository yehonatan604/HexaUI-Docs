import { autoGridEx1, autoGridEx2 } from "./AutoGrid.code";
import { props, options } from "./AutoGrid.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import AutoGridExamples from "./AutoGrid.example";

const AutoGridPage = () => {
  return (
    <DocsPageGenerator
      title="Auto Grid"
      upperText={`
        The Auto Grid component provides an automatic, responsive layout system that dynamically adjusts the positioning of child elements. 
        It simplifies creating complex, multi-column layouts by automatically determining the optimal column placement, based on the container width and the available space. 
        This component is ideal for making highly responsive and aesthetically balanced layouts with minimal configuration.
      `}
      examples={<AutoGridExamples />}
      basicExample={autoGridEx1}
      customExample={autoGridEx2}
      customText={`
        You can easily customize the column count, spacing, and other visual properties of the Auto Grid component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
      dependsOnTheme
    />
  );
};

export default AutoGridPage;
