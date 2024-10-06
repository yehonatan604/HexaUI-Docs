import { TComponent } from "rainbow-plus-ui/src";
import { BiCopy } from "react-icons/bi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const HighLighter = (props: TComponent<"div">) => {
  const { children, ...componentProps } = props;

  const customHighlighterStyle = {
    borderRadius: "10px",
    backgroundColor: "#1a202c",
    padding: "20px",
  };

  return (
    <>
      <BiCopy
        className="cursor-pointer hover:opacity-50 p-1"
        size={30}
        color="black"
        onClick={() => {
          navigator.clipboard.writeText(children as string);
        }}
      />
      <div className="text-sm m-1 hover:opacity-70" {...componentProps}></div>
      <SyntaxHighlighter
        style={stackoverflowDark}
        customStyle={customHighlighterStyle}
        language="typescript"
      >
        {children as string}
      </SyntaxHighlighter>
    </>
  );
};

export default HighLighter;
