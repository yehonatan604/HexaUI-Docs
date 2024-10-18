import { docPanelEx1, docPanelEx2 } from "./DocPanel.code";
import { props, options } from "./DocPanel.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import DocPanelExamples from "./DocPanel.example";

const DocPanelPage = () => {
  return (
    <DocsPageGenerator
      title="Doc Panel"
      upperText={`
        The Doc Panel component provides a resizable panel, ideal for creating a flexible layout where users can interactively adjust the size and placement of different sections.
        This component helps create complex UIs that need adjustable panels.
      `}
      examples={<DocPanelExamples />}
      basicExample={docPanelEx1}
      customExample={docPanelEx2}
      customText={`
        You can easily customize the appearance, behavior, and other visual properties of the Doc Panel component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
      overrideNotes
    />
  );
};

export default DocPanelPage;
