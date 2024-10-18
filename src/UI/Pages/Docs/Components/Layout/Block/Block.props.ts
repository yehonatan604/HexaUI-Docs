import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Flex container (optional).",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "options",
        type: "CardOptions",
        description: "Style options for the Flex container. see the options table for more.",
        required: false,
        defaultValue: "null",
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
        prop: "direction",
        type: "string | FlexDirections",
        description: `The direction of the Flex container. (e.g., "row" | FlexDirections.Row).`,
        required: false,
        defaultValue: "row",
    },
    {
        prop: "justify",
        type: "string | FlexTypes",
        description: `The justify content of the Flex container. (e.g., "center" | FlexTypes.Center).`,
        required: false,
        defaultValue: "start",
    },
    {
        prop: "align",
        type: "string | FlexTypes",
        description: `The align items of the Flex container. (e.g., "center" | FlexTypes.Center).`,
        required: false,
        defaultValue: "start",
    },
    {
        prop: "wrap",
        type: "string | FlexWrap",
        description: `The wrap of the Flex container. (e.g., "wrap" | FlexWrap.Wrap).`,
        required: false,
        defaultValue: "nowrap",
    },
];

export { options, props };