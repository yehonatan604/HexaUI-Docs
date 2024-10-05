import {
  Flex,
  FlexDir,
  FlexTypes,
  List,
  Sizes,
  Hr,
  Quote,
  TCite,
  Button,
  Variants,
} from "@yehonatan604/rainbow-plus-ui/src";
import { Link } from "react-router-dom";

const Home = () => {
  const cite: TCite = {
    url: "http://www.worldwildlife.org/who/index.html",
    text: "www.worldwildlife.org",
    placement: "start",
  };

  return (
    <Flex
      direction={FlexDir.Col}
      justify={FlexTypes.Start}
      align={FlexTypes.Center}
      className={` pb-1 gap-y-9`}
    >
      <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl mt-4">
        Rainbow Plus UI
      </h1>
      <p className="mt-4 text-lg max-md:p-10">
        A modern, flexible, and lightweight React component library designed to make
        building user interfaces a breeze.
      </p>

      <>
        <h2 className="text-2xl font-bold">Why Rainbow Plus UI?</h2>
        <List
          className="mt-4 space-y-2"
          items={[
            "🚀 Fast and Lightweight",
            "🎨 Tailwind CSS Integration",
            "🔧 Customizable Components",
            "📦 Modular and Scalable",
            "📚 Developer Friendly",
          ]}
          fontSize={Sizes.Lg}
          align={FlexTypes.Start}
        />
      </>
      <Button size={Sizes.Lg} variant={Variants.Success} className="mt-10">
        <Link to="/start">Getting Started</Link>
      </Button>
      <Flex
        direction={FlexDir.Col}
        justify={FlexTypes.Center}
        align={FlexTypes.Center}
        className="mt-10 gap-4"
      >
        <Hr borderWidth="w-1/2" />
        <Quote cite={cite as string & TCite} gap="gap-4">
          For 50 years, WWF has been protecting the future of nature. The world's leading
          conservation organization, WWF works in 100 countries and is supported by 1.2
          million members in the United States and close to 5 million globally.
        </Quote>
        <Hr borderWidth="w-1/2" />
      </Flex>
    </Flex>
  );
};

export default Home;
