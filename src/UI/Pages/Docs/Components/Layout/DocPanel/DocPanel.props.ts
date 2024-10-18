import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the Doc Panel.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "options",
        type: "DocPanelOptions",
        description: "Style options for the Doc Panel. see the options table for more.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "panelWidth",
        type: "string",
        description: "The width of the panel (css values).",
        required: false,
        defaultValue: "20%",
    },
    {
        prop: "innerClassName",
        type: "string",
        description: "The class name for the inner panel.",
        required: false,
        defaultValue: "text-turncate overflow-hidden *",
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
        prop: "position",
        type: 'relative | absolute | fixed | sticky',
        description: `The position type of the panel.`,
        required: false,
        defaultValue: "relative",
    },
    {
        prop: "placement",
        type: 'top | right | bottom | left',
        description: `The placement of the panel.`,
        required: true,
        defaultValue: "null",
    },
];

export { options, props };