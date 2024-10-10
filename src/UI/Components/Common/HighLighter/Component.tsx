import { TComponent } from "react-hexa-dev";
import { BiCopy } from "react-icons/bi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HighLighter = (props: TComponent<"div">) => {
  const { children, lang, ...componentProps } = props;

  const customHighlighterStyle = {
    backgroundColor: "#1a202c",
    padding: "20px",
  };

  return (
    <div dir="rtl">
      <div className="mr-[.9rem] mb-[-2.8rem] hover:opacity-70 cursor-pointer">
        <BiCopy
          size={25}
          onClick={() => {
            navigator.clipboard.writeText(children as string);
          }}
        />
      </div>
      <div dir="ltr" className="text-sm m-1" {...componentProps}>
        <SyntaxHighlighter
          style={dark}
          customStyle={customHighlighterStyle}
          language={lang || "tsx"}
        >
          {children as string}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HighLighter;
