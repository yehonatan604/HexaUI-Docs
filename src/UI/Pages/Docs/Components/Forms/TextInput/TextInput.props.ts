import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "Options",
        type: "SelectOptions",
        description: "Style options for the TextInput. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "label",
        type: "string",
        description: "The label for the TextInput.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard React input element props such as 'id', 'value', 'onChange', etc.",
        required: false,
        defaultValue: "null",
    },
];

const options: TTableProps[] = [
    {
        prop: "helperText",
        type: "string",
        description: `The helper text to display below the TextInput.`,
        required: false,
        defaultValue: "null",
    },
    {
        prop: "helperTextVariant",
        type: "string",
        description: `The color variant for the helper text.`,
        required: false,
        defaultValue: "inherit from theme *",
    },
    {
        prop: "ring",
        type: "TRing",
        description: "The ring style for the TextInput.",
        required: false,
        defaultValue: "standard-d, 1",
    },
];

export { options, props };