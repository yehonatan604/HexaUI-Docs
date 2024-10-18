import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Scroll Area.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "options",
        type: "ComponentOptions",
        description: "Style options for the Scroll Area. see the options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "maxHeight",
        type: "string",
        description: "The maximum height of the Scroll Area.",
        required: false,
        defaultValue: "fit",
    },
    {
        prop: "maxWidth",
        type: "string",
        description: "The maximum width of the Scroll Area.",
        required: false,
        defaultValue: "fit",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React div element props such as 'id', 'style', etc.",
        required: false,
        defaultValue: "null",
    },
];

export { props };