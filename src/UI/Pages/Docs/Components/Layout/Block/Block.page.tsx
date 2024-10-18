import { blockEx1, blockEx2 } from "./Block.code";
import { props, options } from "./Block.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import BlockExamples from "./Block.example";

const BlockPage = () => {
  return (
    <DocsPageGenerator
      title="Block"
      upperText={`
        The Block component is a simple and versatile container used to create block-level sections in your layout. 
        It is often used as a wrapper for other components or elements to provide consistent padding, margins, and alignment. 
        This component is particularly useful for creating structured sections within your UI, offering options for customization that ensure visual consistency.
      `}
      examples={<BlockExamples />}
      basicExample={blockEx1}
      customExample={blockEx2}
      customText={`
        You can easily customize the padding, margin, and other visual properties of the Block component using the options prop:
      `}
      tableProps={props}
      tableOptions={options}
    />
  );
};

export default BlockPage;
