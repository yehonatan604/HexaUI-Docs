import { accordionEx1, accordionEx2 } from "./Accordion.code";
import { props, options } from "./Accordion.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import AccordionExamples from "./Accordion.example";

const AccordionPage = () => {
  return (
    <DocsPageGenerator
      title="Accordion"
      upperText={`
        The Accordion component is a collapsible panel that allows you to display content in a compact and interactive way. 
        It is perfect for organizing information and improving the user experience by hiding or revealing content as needed.
      `}
      examples={<AccordionExamples />}
      basicExample={accordionEx1}
      customExample={accordionEx2}
      customText={`
        You can easily customize the border color of the Accordion by using 
        either variants (as Variants or as string) or Tailwind classes:
      `}
      tableProps={props}
      tableOptions={options}
    />
  );
};

export default AccordionPage;
