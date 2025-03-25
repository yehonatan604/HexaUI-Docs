import { flexEx1, flexEx2 } from "./Footer.code";
import { props, options, footerBrandProps } from "./Footer.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import FooterExamples from "./Footer.example";

const FooterPage = () => {
  return (
    <>
      <DocsPageGenerator
        title="Footer"
        upperText={`
        The Footer component allows you to create a container with a custom, theme-responsive layout. 
        It provides a flexible container that integrates seamlessly into your UI.
      `}
        examples={<FooterExamples />}
        basicExample={flexEx1}
        customExample={flexEx2}
        customText={`
        You can easily customize the direction, alignment, wrapping, and other visual properties of the Flex component using the options prop:
      `}
        tableProps={props}
        tableOptions={options}
      />
      <DocsPageGenerator
        title="Footer.Brand"
        upperText={`
        The Footer.Brand component is used to display a brand or logo in the Footer, typically linking or redirecting to the home page.
      `}
        tableProps={footerBrandProps}
      />
    </>
  );
};

export default FooterPage;
