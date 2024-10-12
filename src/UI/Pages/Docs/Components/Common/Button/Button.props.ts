import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the button. Usually text. an icon or both.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "Options",
        type: "ButtonOptions",
        description: "Style options for the button. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React Button element props such as onClick, disabled, etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "size",
        type: "Size | string",
        description: `Predefined size variant (e.g., "sm" | Sizes.Sm).`,
        required: false,
        defaultValue: "md",
    },
    {
        prop: "rounded",
        type: "boolean",
        description: `If false, the button's corners won't be round.`,
        required: false,
        defaultValue: "false",
    },
    {
        prop: "roundedS",
        type: "boolean",
        description: `If true, the button's END corners won't be round.`,
        required: false,
        defaultValue: "false",
    },
    {
        prop: "roundedE",
        type: "boolean",
        description: `If true, the button's START corners won't be round.`,
        required: false,
        defaultValue: "false",
    },
];

export { props, options };