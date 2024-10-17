import { Flex, Hr, useTheme, Checkbox, FlexWrap } from "react-hexa-dev";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import HighLighter from "../../../../../Components/Shared/HighLighter";
import PropsTable from "../../../../../Components/Shared/PropsTable";
import { checkboxEx1, checkboxEx2 } from "./Checkbox.code";
import { options, props } from "./Checkbox.props";

const CheckboxPage = () => {
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">Checkbox</h2>

        <p className="text-lg max-md:p-10 w-3/5">
          The Checkbox component is a versatile input element that allows users to select
          or deselect options. It supports customization of ring appearance, colors, and
          various visual properties, making it a highly adaptable component for forms and
          user interactions.
        </p>

        <Flex
          options={{
            justify: FlexTypes.Center,
            align: FlexTypes.Center,
            wrap: FlexWrap.Wrap,
          }}
          className="m-auto my-5 gap-4 w-3/4"
        >
          <Checkbox label="is checked" />
          <Checkbox label="is checked" defaultChecked />
          <Checkbox
            label="is checked"
            defaultChecked
            options={{
              ring: {
                thickness: 2,
                variant: colors.primary,
              },
            }}
          />
          <Checkbox
            label="is checked"
            defaultChecked
            options={{
              ring: {
                thickness: 2,
                variant: colors.warning,
              },
            }}
          />
          <Checkbox
            label="is checked"
            defaultChecked
            options={{
              ring: {
                thickness: 2,
                variant: colors.failure,
              },
            }}
          />
          <Checkbox
            label="is checked"
            defaultChecked
            options={{
              ring: {
                thickness: 2,
                variant: colors.success,
              },
            }}
          />
          <Checkbox
            label="is checked"
            defaultChecked
            options={{
              ring: {
                thickness: 2,
                variant: colors.standrad,
              },
            }}
          />
        </Flex>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Usage</h2>
          <p className="mt-4 mb-8 text-lg ">
            Here’s a basic example of how to use the Checkbox component:
          </p>
          <HighLighter>{checkboxEx1}</HighLighter>
        </div>

        <div className="w-3/4">
          <h2 className="text-2xl font-bold">Customizing Checkbox Appearance</h2>
          <p className="mt-4 mb-8 text-lg ">
            You can easily customize the ring thickness, colors, and other visual
            properties of the Checkbox component using the options prop:
          </p>
          <HighLighter>{checkboxEx2}</HighLighter>
        </div>

        <Hr options={{ border: { thickness: "w-1/2" } }} />

        <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Checkbox Options</h2>
          </Flex>
          <PropsTable tableProps={options} />
        </Flex>

        <Flex options={{ direction: FlexDir.Col }} className="mb-9 gap-4">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">Checkbox Props</h2>
          </Flex>
          <PropsTable tableProps={props} />
        </Flex>
      </Flex>
    </div>
  );
};

export default CheckboxPage;
