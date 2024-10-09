import { Flex, List, Hr, Quote, Button } from "react-hexa-dev";
import { FlexDir, FlexTypes, Sizes } from "react-hexa-dev";
import { TCite } from "react-hexa-dev";
import { Link } from "react-router-dom";

const Home = () => {
  const cite: TCite = {
    url: "http://www.worldwildlife.org/who/index.html",
    text: "www.worldwildlife.org",
    placement: "start",
    variant: "info",
  };

  return (
    <Flex
      options={{
        direction: FlexDir.Col,
        justify: FlexTypes.Start,
        align: FlexTypes.Center,
      }}
      className={` pb-1 gap-y-9`}
    >
      <h1 className="text-4xl font-extrabold text-select sm:text-5xl mt-4">
        React Hexa UI
      </h1>
      <p className="mt-4 text-lg max-md:p-10">
        A modern, flexible, and lightweight React component library designed to make
        building user interfaces a breeze.
      </p>

      <>
        <h2 className="text-2xl font-bold">Why Hexa UI?</h2>
        <List
          className="mt-4 space-y-2"
          options={{
            items: [
              "🚀 Fast and Lightweight",
              "🎨 Tailwind CSS Integration",
              "🔧 Customizable Components",
              "📦 Modular and Scalable",
              "📚 Developer Friendly",
            ],
            fontSize: Sizes.Lg,
            align: FlexTypes.Start,
          }}
        />
      </>
      <Button
        options={{
          size: Sizes.Lg,
          bgVariant: "success-d",
        }}
        className="mt-10"
      >
        <Link to="/start">Getting Started</Link>
      </Button>
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Center,
          align: FlexTypes.Center,
        }}
        className="mt-10 gap-4"
      >
        <Hr options={{ border: { thickness: "w-1/2" } }} />
        <Quote
          cite={cite as string & TCite}
          options={{
            gap: 4,
          }}
        >
          For 50 years, WWF has been protecting the future of nature. The world's leading
          conservation organization, WWF works in 100 countries and is supported by 1.2
          million members in the United States and close to 5 million globally.
        </Quote>
        <Hr options={{ border: { thickness: "w-1/2" } }} />{" "}
      </Flex>
    </Flex>
  );
};

export default Home;
