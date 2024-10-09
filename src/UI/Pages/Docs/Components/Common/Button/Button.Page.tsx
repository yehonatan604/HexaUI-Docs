import { Button, Flex, Hr, RainbowBorder } from "react-hexa-dev";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import HighLighter from "../../../../../../UI/Components/Common/HighLighter/Component";
import {
  buttonEx1,
  buttonEx2,
} from "../../../../../../Data/Constants/CodeExamples/Button";

const ButtonPage = () => {
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">Button</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The Button component is a versatile UI element used to trigger actions or
          navigate through your application. It is designed to be fully customizable and
          supports various variants, sizes, and rounded styles.
        </p>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the Button component:
          </p>
          <RainbowBorder className="text-sm ml-4 mt-4">
            <HighLighter>{buttonEx1}</HighLighter>
          </RainbowBorder>
        </div>

        <Flex options={{ justify: FlexTypes.Center }}>
          <Button>Click Me</Button>
        </Flex>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing Button Color & Sizes</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the background color & size of the Button by using
            variants (as Variants or as string) and sizes (as Sizes or as string):
          </p>
          <RainbowBorder className="text-sm ml-4 mt-4">
            <HighLighter>{buttonEx2}</HighLighter>
          </RainbowBorder>
        </div>

        <Flex className="gap-4" options={{ justify: "center", align: "center" }}>
          <Button
            options={{
              bgVariant: "success-d",
              textVariant: "white-l",
              size: "md",
            }}
          >
            Success
          </Button>
          <Button options={{ bgVariant: "warning", textVariant: "info-d", size: "lg" }}>
            Warning
          </Button>
        </Flex>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Props</h2>
          </Flex>
          <table>
            <thead className="bg-zinc-700">
              <tr>
                <th className="py-2 px-4 text-left font-semibold border-b">Prop</th>
                <th className="py-2 px-4 text-left font-semibold  border-b">Type</th>
                <th className="py-2 px-4 text-left font-semibold border-b">
                  Description
                </th>
                <th className="py-2 px-4 text-left font-semibold border-b">Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>children</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>ReactNode</code>
                </td>
                <td className="py-2 px-4 border-b">
                  The content inside the button. Usually text. an icon or both.
                </td>
                <td className="py-2 px-4 border-b">true</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>Options</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>ButtonOptions</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Style options for the button. see the Options table for more.
                </td>
                <td className="py-2 px-4 border-b">false</td>
              </tr>

              <tr>
                <td className="py-2 px-4 border-b">
                  <code>...props</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>any</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Supports all standard React Button element props such as onClick,
                  disabled, etc.
                </td>
                <td className="py-2 px-4 border-b">
                  <code>false</code>
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>

        <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Options</h2>
          </Flex>
          <table>
            <thead className="bg-zinc-700">
              <tr>
                <th className="py-2 px-4 text-left font-semibold border-b">Prop</th>
                <th className="py-2 px-4 text-left font-semibold  border-b">Type</th>
                <th className="py-2 px-4 text-left font-semibold border-b">
                  Description
                </th>
                <th className="py-2 px-4 text-left font-semibold border-b">Required</th>
                <th className="py-2 px-4 text-left font-semibold border-b">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>bgVariant</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>Variants | string</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Predefined background color variant (e.g.,{" "}
                  <code>"success" | Variants.Success</code>
                  ).
                </td>
                <td className="py-2 px-4 border-b">
                  <code>false</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>"info"</code>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>TextVariant</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>Variants | string</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Predefined text color variant (e.g.,{" "}
                  <code>"white-l" | Variants.WhiteLight</code>
                  ).
                </td>
                <td className="py-2 px-4 border-b">
                  <code>false</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>"black-d"</code>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>size</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>Sizes | string</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Predefined button size (e.g., <code>"lg" | Sizes.Lg</code>
                  ).{" "}
                </td>
                <td className="py-2 px-4 border-b">
                  <code>false</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>"md"</code>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>rounded</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>boolean</code>
                </td>
                <td className="py-2 px-4 border-b">
                  If false, the button's corners won't be round.
                </td>
                <td className="py-2 px-4 border-b">
                  <code>false</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>"rounded"</code>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>roundedS</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>boolean</code>
                </td>
                <td className="py-2 px-4 border-b">
                  If true, the button's <strong>End </strong>corners won't be round.
                </td>
                <td className="py-2 px-4 border-b">
                  <code>false</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>"rounded"</code>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">
                  <code>roundedE</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>boolean</code>
                </td>
                <td className="py-2 px-4 border-b">
                  If true, the button's <strong>Start </strong>corners won't be round.
                </td>
                <td className="py-2 px-4 border-b">
                  <code>false</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>"rounded"</code>
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>
    </div>
  );
};

export default ButtonPage;
