import { cardEx1, cardEx2 } from "./Card.code";
import { options, props, headerProps, footerOptions, footerProps } from "./Card.props";
import DocsPageGenerator from "../../../../../Components/Shared/DocsPageGenerator";
import CardExamples from "./Card.example";
import { Hr } from "react-hexa-dev";

const CardPage = () => {
  return (
    <>
      <DocsPageGenerator
        title="Card"
        upperText={`
          The Card component is a flexible container used to display content in a visually appealing and organized manner. 
          It includes an optional header and footer, providing a structure that suits a variety of content.
        `}
        examples={<CardExamples />}
        basicExample={cardEx1}
        customExample={cardEx2}
        customText={`You can easily customize the background color, text color, and shadow of the Card using the options prop:`}
        tableProps={props}
        tableOptions={options}
      />
      <Hr options={{ width: "1/4" }} />
      <DocsPageGenerator
        title="Card.Header"
        upperText={`
          The Card.Header component is used to display content at the top of a Card. 
          It is highly customizable, allowing you to add images, text, and other elements to create a visually appealing header.
        `}
        tableProps={headerProps}
      />
      <Hr options={{ width: "1/4" }} />
      <DocsPageGenerator
        title="Card.Footer"
        upperText={`
          The Card.Footer component is used to display content at the bottom of a Card. 
          It is highly customizable, allowing you to add buttons, icons, and other elements to create a visually appealing footer.
        `}
        customText={`You can easily customize the appearance of the Card.Footer component using the options prop:`}
        tableProps={footerOptions}
        tableOptions={footerProps}
      />
    </>
  );
};

export default CardPage;
