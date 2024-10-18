import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "Options",
        type: "CardOptions",
        description: "Style options for the Range Input. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "label",
        type: "string",
        description: "The label for the Range Input.",
        required: true,
        defaultValue: "",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React input element props such as 'id', 'max', 'value', etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "rangeVariant",
        type: "string",
        description: `The color variant for the Range Input's track.`,
        required: false,
        defaultValue: "standard",
    }
];

export { options, props };