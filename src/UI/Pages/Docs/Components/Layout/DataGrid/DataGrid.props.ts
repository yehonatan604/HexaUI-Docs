import { TTableProps } from "../../../../../Components/Shared/PropsTable";

const props: TTableProps[] = [
    {
        prop: "options",
        type: "AutoGridOptions",
        description: "Style options for the AutoGrid. see the options table for more.",
        required: false,
        defaultValue: "null",
    },
    {
        prop: "cols",
        type: "number",
        description: "The number of columns to display in the AutoGrid.",
        required: true,
        defaultValue: "null",
    },
    {
        prop: "rowsArr",
        type: "React.ReactNode[]",
        description: "The list of React nodes to display in the AutoGrid.",
        required: true,
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
        prop: "borderVariant",
        type: "string",
        description: `The border color variant for the AutoGrid, e.g., 'primary'.`,
        required: false,
        defaultValue: "standard-l/standrad-d *",
    },
];

export { options, props };