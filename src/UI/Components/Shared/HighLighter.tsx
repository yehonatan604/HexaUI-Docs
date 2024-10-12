import { useState } from "react";
import { Alert, Flex, RainbowBorder, TComponent } from "react-hexa-dev";
import { BiCheck, BiCopy } from "react-icons/bi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HighLighter = (props: TComponent<"div">) => {
  const { children, lang, className, ...componentProps } = props;
  const [copied, setCopied] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const customHighlighterStyle = {
    backgroundColor: "#1a202c",
    padding: "20px",
    border: "1px groove #161928",
    borderRadius: "5px",
    margin: "0 1px 1px 0",
  };

  const onCopy = () => {
    navigator.clipboard.writeText(children as string);
    setCopied(true);
    setShowSuccessAlert(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <RainbowBorder innerClassName="bg-transparent" dir="rtl">
      <div>
        {!copied ? (
          <BiCopy
            size={18}
            onClick={onCopy}
            className="cursor-pointer hover:opacity-70 m-1"
          />
        ) : (
          <Flex className="gap-2 items-center">
            <BiCheck size={26} />
            <span dir="ltr">Copied!</span>
          </Flex>
        )}
      </div>
      <div dir="ltr" className={`text-sm ${className}`} {...componentProps}>
        <SyntaxHighlighter
          style={dark}
          customStyle={customHighlighterStyle}
          language={lang || "tsx"}
        >
          {children as string}
        </SyntaxHighlighter>
      </div>
      <Alert
        show={showSuccessAlert}
        setShow={setShowSuccessAlert}
        options={{ title: "Copy to Clipboard", type: "success" }}
        dir="ltr"
      >
        Operation Successful!
      </Alert>
    </RainbowBorder>
  );
};

export default HighLighter;
