import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "Options",
        type: "ComponentOptions",
        description: "Style options for the Label. see the Options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "text",
        type: "string",
        description: "The text for the Label.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "...props",
        type: "any",
        description: "Supports all standard Label props such as 'htmlFor', 'onclick', etc.",
        required: false,
        defaultValue: "null",
    },
];


export { props };