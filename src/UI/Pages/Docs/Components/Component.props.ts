import { TTableProps } from "../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
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
        prop: "bgVariant",
        type: "Variant | string",
        description: `Predefined background color variant (e.g., "success" | Variants.Success).`,
        required: false,
        defaultValue: "info",
    },
    {
        prop: "textVariant",
        type: "Variant | string",
        description: `Predefined text color variant (e.g., "standard" | Variants.Standard).`,
        required: false,
        defaultValue: "black-d",
    },
    {
        prop: "shadow",
        type: "TShadow",
        description: `Predefined shadow object for components, not all components support this.`,
        required: false,
        defaultValue: "null",
    },
    {
        prop: "border",
        type: "TBorder",
        description: `Predefined border object for components, not all components support this.`,
        required: false,
        defaultValue: "null",
    },
];

export { props, options };
