import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "options",
        type: "TFooterOptions",
        description: "Style options for the Footer. see the options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "reserved",
        type: "string",
        description: "Right reserved text.",
        required: false,
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React div element props such as 'id', 'style', etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "reservedVariant",
        type: "string",
        description: `The color variant for the reserved text, e.g., 'standard'.`,
        required: false,
    },
    {
        prop: "childrenJustify",
        type: "'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'",
        description: "The justify content for the children of the Footer.",
        required: false,
        defaultValue: "center",
    },
    {
        prop: "childrenAlign",
        type: "'start' | 'end' | 'center' | 'baseline' | 'stretch'",
        description: "The align items for the children of the Footer.",
        required: false,
        defaultValue: "center",
    },
    {
        prop: "childrenDirection",
        type: "'row' | 'row-reverse' | 'col' | 'col-reverse'",
        description: "The flex direction for the children of the Footer.",
        required: false,
        defaultValue: "row",
    }
];

const footerBrandProps: TTableProps[] = [
    {
        prop: "options",
        type: "TFooterBrandOptions",
        description: "Style options for the FooterBrand. see the options table for more.",
        required: false,
    },
    {
        prop: "to",
        type: "string",
        description: "The URL to link to.",
        required: false,
    },
    {
        prop: "as",
        type: "React.ElementType",
        description: "The element type to render as.",
        required: false,
        defaultValue: "a",
    },
];

export { options, props, footerBrandProps };