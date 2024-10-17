import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "Options",
        type: "CardOptions",
        description: "Style options for the Ring. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "label",
        type: "string",
        description: "The label text for the Checkbox.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard Checkbox Input props such as 'name', 'checked', 'value', etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "ring",
        type: "TRing",
        description: "The Ring options for the Checkbox component, if not set, no ring will be used when checkbox is blurred, default ring will be used otherwise.",
        required: false,
        defaultValue: "null",
    },
];

export { options, props };