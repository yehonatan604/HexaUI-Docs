import { Flex, Hr, FlexWrap } from "react-hexa-dev";
import { FlexDir, FlexTypes } from "react-hexa-dev";
import HighLighter from "./HighLighter";
import PropsTable, { TTableProps } from "./PropsTable";
import { ReactNode } from "react";

export type DocsPageGeneratorProps = {
  title: string;
  upperText: string;
  examples?: ReactNode;
  basicExample?: string;
  customExample?: string;
  customText?: string;
  tableProps: TTableProps[];
  tableOptions?: TTableProps[];
  extraUpperContent?: ReactNode;
  dependsOnTheme?: boolean;
};

const DocsPageGenerator = ({
  title,
  upperText,
  extraUpperContent,
  examples,
  basicExample,
  customExample,
  customText,
  tableProps,
  tableOptions,
  dependsOnTheme,
}: DocsPageGeneratorProps) => {
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
        <h2 className="text-4xl font-extrabold font-serif mt-10">{title}</h2>

        <p className="text-lg max-md:p-10 w-3/5">{upperText}</p>

        {examples && (
          <Flex
            options={{
              justify: FlexTypes.Center,
              align: FlexTypes.Center,
              wrap: FlexWrap.Wrap,
            }}
            className="m-auto my-5 gap-4 w-3/4"
          >
            {examples}
          </Flex>
        )}

        {extraUpperContent && extraUpperContent}

        {basicExample && (
          <div className="w-3/4">
            <h2 className="text-2xl font-bold">Usage</h2>
            <p className="mt-4 mb-8 text-lg ">
              Here’s a basic example of how to use the {title} component:
            </p>
            <HighLighter>{basicExample}</HighLighter>
          </div>
        )}

        {customExample && (
          <div className="w-3/4">
            <h2 className="text-2xl font-bold">Customizing {title} Appearance</h2>
            <p className="mt-4 mb-8 text-lg ">{customText}</p>
            <HighLighter>{customExample}</HighLighter>
          </div>
        )}

        <Hr />

        {tableOptions && (
          <Flex options={{ direction: FlexDir.Col }} className="gap-4 mb-9">
            <Flex options={{ justify: FlexTypes.Start }} className="w-full">
              <h2 className="text-2xl font-bold">{title} Options</h2>
            </Flex>
            <PropsTable tableProps={tableOptions} />
            {dependsOnTheme && (
              <div className="w-3/4">
                <p className="text-lg">
                  * The appearance of this component depends on the theme mode you are
                  using.
                </p>
              </div>
            )}
          </Flex>
        )}

        <Flex options={{ direction: FlexDir.Col }} className="mb-9 gap-4">
          <Flex options={{ justify: FlexTypes.Start }} className="w-full">
            <h2 className="text-2xl font-bold">{title} Props</h2>
          </Flex>
          <PropsTable tableProps={tableProps} />
        </Flex>
      </Flex>
    </div>
  );
};

export default DocsPageGenerator;
