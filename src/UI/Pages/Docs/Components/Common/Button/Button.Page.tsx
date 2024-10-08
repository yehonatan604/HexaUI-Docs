import {
  Button,
  Flex,
  FlexDir,
  FlexTypes,
  Hr,
  RainbowBorder,
  Variants,
} from "rainbow-plus-ui/src";
import HighLighter from "../../../../../../UI/Components/Common/HighLighter/Component";
import ComponentsMenu from "../../../../../../UI/Components/Menus/ComponentsMenu/Components.menu";
import {
  buttonEx1,
  buttonEx2,
} from "../../../../../../Data/Constants/CodeExamples/Button";

const ButtonPage = () => {
  return (
    <div className="flex justify-center">
      <div className="sticky top-0 h-[93vh] overflow-y-auto overflow-x-hidden bg-zinc-700">
        <ComponentsMenu />
      </div>
      <Flex
        direction={FlexDir.Col}
        justify={FlexTypes.Start}
        align={FlexTypes.Center}
        className={`pb-1 gap-y-9 mx-auto w-3/5`}
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

        <Flex justify="center">
          <Button>Standard</Button>
        </Flex>

        <Hr borderWidth="w-1/2" />

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

        <Flex className="gap-4" justify="center" align="center">
          <Button variant="success" size={"md"}>
            Success
          </Button>
          <Button variant={Variants.Warning} size={"lg"}>
            Warning
          </Button>
        </Flex>

        <Hr borderWidth="w-1/2" />

        <Flex
          direction={FlexDir.Col}
          justify={FlexTypes.Start}
          align={FlexTypes.Start}
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
                  <code>children</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>ReactNode</code>
                </td>
                <td className="py-2 px-4 border-b">
                  The content inside the button. Usually text. an icon or both.
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
                  <code>size</code>
                </td>
                <td className="py-2 px-4 border-b">
                  <code>Sizes | string</code>
                </td>
                <td className="py-2 px-4 border-b">
                  Predefined border color size (e.g., <code>"lg" | Sizes.Lg</code>
                  ).{" "}
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
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>
    </div>
  );
};

export default ButtonPage;
