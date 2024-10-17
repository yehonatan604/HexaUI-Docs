import { Accordion, Flex, Hr } from "react-hexa-dev";
import HighLighter from "../../../../../Components/Shared/HighLighter";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import { accordionEx1, accordionEx2 } from "./Accordion.code";
import { useTheme } from "react-hexa-dev";
import { props, options } from "./Accordion.props";
import PropsTable from "../../../../../Components/Shared/PropsTable";

const AccordionPage = () => {
  const { colors } = useTheme();

  return (
    <div className="flex justify-center">
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        className={`pb-1 gap-y-9 mx-auto w-4/5`}
      >
        <h2 className="text-4xl font-extrabold font-serif mt-10">Accordion</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The Accordion component is a collapsible panel that allows you to display
          content in a compact and interactive way. It is perfect for organizing
          information and improving the user experience by hiding or revealing content as
          needed.
        </p>

        {/* Accordion Variants by using string */}
        <Flex options={{ direction: "col" }} className="w-1/4 gap-4">
          <Accordion
            options={{
              title: "Accordion",
              border: { show: true, variant: colors.standrad },
              textVariant: colors.standradLight,
              titleVariant: colors.warning,
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloremque, voluptates, quos, quidem vel quibusdam voluptatum voluptatem
              quia iusto quas dolorem. Quisquam doloremque, voluptates, quos, quidem vel
              quibusdam voluptatum voluptatem quia iusto quas dolorem.
            </p>
          </Accordion>

          {/* Accordion Variants by using string */}
          <Accordion
            options={{
              title: "Accordion",
              border: { show: true, variant: colors.primaryDark },
              textVariant: colors.select,
              titleVariant: colors.primary,
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloremque, voluptates, quos, quidem vel quibusdam voluptatum voluptatem
              quia iusto quas dolorem. Quisquam doloremque, voluptates, quos, quidem vel
              quibusdam voluptatum voluptatem quia iusto quas dolorem.
            </p>
          </Accordion>

          {/* Accordion Variants by using Variants */}
          <Accordion
            options={{
              title: "Accordion",
              border: { show: true, variant: "zinc-300" },
              textVariant: "sky-500",
              titleVariant: "sky-300",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloremque, voluptates, quos, quidem vel quibusdam voluptatum voluptatem
              quia iusto quas dolorem. Quisquam doloremque, voluptates, quos, quidem vel
              quibusdam voluptatum voluptatem quia iusto quas dolorem.
            </p>
          </Accordion>
        </Flex>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the Accordion component:
          </p>
          <HighLighter>{accordionEx1}</HighLighter>
        </div>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing the Border Color</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the border color of the Accordion by using either
            variants (as Variants or as string) or Tailwind classes:
          </p>
          <HighLighter>{accordionEx2}</HighLighter>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="mb-9 gap-4">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Props</h2>
          </Flex>
          <PropsTable tableProps={props} />
        </Flex>

        <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Options</h2>
          </Flex>
          <PropsTable tableProps={options} />
        </Flex>
      </Flex>
    </div>
  );
};

export default AccordionPage;
