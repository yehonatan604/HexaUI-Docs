import { Accordion, Flex, Hr, RainbowBorder } from "react-hexa-dev/components";
import HighLighter from "../../../../../../UI/Components/Common/HighLighter/Component";
import { FlexDir, FlexTypes } from "react-hexa-dev/constants";
import {
  accordionEx1,
  accordionEx2,
} from "../../../../../../Data/Constants/CodeExamples/Accordion";

const AccordionPage = () => {
  return (
    <div className="flex justify-center">
      <Flex
        options={{
          direction: FlexDir.Col,
          justify: FlexTypes.Start,
          align: FlexTypes.Center,
        }}
        className={`pb-1 gap-y-9 mx-auto w-3/5`}
      >
        <h2 className="text-4xl font-extrabold font-serif mt-10">Accordion</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The Accordion component is a collapsible panel that allows you to display
          content in a compact and interactive way. It is perfect for organizing
          information and improving the user experience by hiding or revealing content as
          needed.
        </p>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the Accordion component:
          </p>
          <HighLighter>{accordionEx1}</HighLighter>
        </div>

        <Flex className="w-1/4">
          <Accordion
            options={{
              title: "Accordion Standard",
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
        <Hr options={{ border: { thickness: "w-1/2" } }} />
        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing the Border Color</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the border color of the Accordion by using either
            variants (as Variants or as string):
          </p>
          <RainbowBorder className="text-sm ml-4 mt-4">
            <HighLighter>{accordionEx2}</HighLighter>
          </RainbowBorder>
        </div>

        {/* Accordion Variants by using string */}
        <div className="w-1/4">
          <Accordion
            options={{
              title: "Accordion Info",
              textVariant: "info",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloremque, voluptates, quos, quidem vel quibusdam voluptatum voluptatem
              quia iusto quas dolorem. Quisquam doloremque, voluptates, quos, quidem vel
              quibusdam voluptatum voluptatem quia iusto quas dolorem.
            </p>
          </Accordion>
        </div>

        {/* Accordion Variants by using Variants */}
        <div className="w-1/4">
          <Accordion
            options={{
              title: "Accordion Warning",
              textVariant: "warning",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloremque, voluptates, quos, quidem vel quibusdam voluptatum voluptatem
              quia iusto quas dolorem. Quisquam doloremque, voluptates, quos, quidem vel
              quibusdam voluptatum voluptatem quia iusto quas dolorem.
            </p>
          </Accordion>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex
          options={{
            direction: FlexDir.Col,
            justify: FlexTypes.Start,
            align: FlexTypes.Start,
          }}
          className="w-3/4 gap-4 mb-9"
        >
          <h2 className="text-2xl font-bold">Props</h2>
          <table>
            <thead className="bg-zinc-700">
              <tr>
                <th className="py-2 px-4 text-left font-semibold border-b">Prop</th>
                <th className="py-2 px-4 text-left font-semibold  border-b">Type</th>
                <th className="py-2 px-4 text-left font-semibold border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>title</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>string</code>
                </td>
                <td className="py-2 px-4 border-b">
                  The title displayed in the accordion header.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>variant</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>Variants | string</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Predefined border color variant (e.g.,{" "}
                  <code>"cyan" | Variants.Cyan</code>
                  ).{" "}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>className</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>string</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Additional Tailwind CSS classes to override default styles.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>style</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>string</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Additional CSS to override default styles.
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>
    </div>
  );
};

export default AccordionPage;
